
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonProfile, selectPersonProfile } from '../redux/slices/profileSlice';
import './ShowPersonProfile.css'

const ShowPersonProfile = () => {
  const dispatch = useDispatch();
  const personProfile = useSelector(selectPersonProfile);

  useEffect(() => {

    const fetchData = async () => {
        const mockProfile = {
            firstName: 'Neelesh',
            lastName: 'Kumawat',
            primaryPhone: '123-456-7890',
            primaryEmail: 'neelesh@gmail.com',
            addresses: {
              home: 'a-28, sky-street, jaipur, Rajasthan',
              office: '456 Our-Dream-Office Ave, Space Town, near Pluto planet',
            },
            socialMediaLinks: {
              facebook: 'https://www.facebook.com/neelesh',
              linkedin: 'https://www.linkedin.com/in/neelesh',
            },
          };

      dispatch(setPersonProfile(mockProfile));
    };

    fetchData();
  }, [dispatch]);

  if (!personProfile) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName, primaryPhone, primaryEmail, addresses, socialMediaLinks } = personProfile;

  return (
    <div className="profile-container">
      <h1>{`${firstName} ${lastName}`}</h1>
      <p><strong>Phone:</strong> {primaryPhone}</p>
      <p><strong>Email:</strong> {primaryEmail}</p>

      <div className="addresses">
        <h2>Addresses</h2>
        <div>
          <strong>Home:</strong> {addresses.home}
        </div>
        <div>
          <strong>Office:</strong> {addresses.office}
        </div>
      </div>

      <div className="social-media">
        <h2>Social Media Links</h2>
        <div>
          <strong>Facebook Profile:</strong> <a href={socialMediaLinks.facebook}>{socialMediaLinks.facebook}</a>
        </div>
        <div>
          <strong>LinkedIn Profile:</strong> <a href={socialMediaLinks.linkedin}>{socialMediaLinks.linkedin}</a>
        </div>
      </div>
    </div>
  );
};

export default ShowPersonProfile;
