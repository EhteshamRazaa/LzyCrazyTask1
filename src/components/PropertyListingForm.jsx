import React, { useState } from 'react';

const PropertyListingForm = () => {
  const [formData, setFormData] = useState({
    category: 'Properties / For Sale: Houses & Apartments',
    type: '',
    bhk: '',
    bathrooms: '',
    furnishing: '',
    projectStatus: '',
    listedBy: '',
    superBuiltupArea: '',
    carpetArea: '',
    maintenance: '',
    totalFloors: '',
    floorNo: '',
    carParking: '',
    facing: '',
    projectName: '',
    adTitle: '',
    description: '',
    state: '',
    name: 'OLX User',
    phoneNumber: '+91 XXXXXXXXXX',
    price: '',
    photos: [],
  });

  const [characterCount, setCharacterCount] = useState({
    adTitle: 0,
    description: 0
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'adTitle' || name === 'description') {
      setCharacterCount(prev => ({
        ...prev,
        [name]: value.length
      }));
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.photos.length > 20) {
      alert('You can upload a maximum of 20 photos');
      return;
    }
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowSuccessAlert(true);
    
    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Your post has been submitted successfully!
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6 text-center">POST YOUR AD</h1>
      
      <div className="h-32 border p-4">
        <h2 className="text-lg font-bold mb-6">SELECTED CATEGORY</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-400">{formData.category}</span>
          <button className="text-blue-600 font-medium ml-4 border-b-2 border-blue-500">Change</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='border p-9'>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">INCLUDE SOME DETAILS</h2>
          
          <div className="mb-6">
            <label className="block mb-2">Type *</label>
            <div className="grid grid-cols-2 gap-2 mr-96">
              <button 
                type="button"
                onClick={() => setFormData({...formData, type: 'Flats / Apartments'})}
                className={`p-2 border rounded ${formData.type === 'Flats / Apartments' ? 'bg-blue-100 border-blue-500' : 'border-gray-300 w-44 h-10'}`}
              >
                Flats / Apartments
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, type: 'Independent / Builder Floors'})}
                className={`p-2 border rounded relative -left-6 ${formData.type === 'Independent / Builder Floors' ? 'bg-blue-100 border-blue-500' : 'border-gray-300 w-60 h-10'}`}
              >
                Independent / Builder Floors
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, type: 'Farm House'})}
                className={`p-2 border rounded ${formData.type === 'Farm House' ? 'bg-blue-100 border-blue-500' : 'border-gray-300 w-32 h-10'}`}
              >
                Farm House
              </button>
              <button 
                type="button"
                onClick={() => setFormData({...formData, type: 'House & Villa'})}
                className={`p-2 border rounded relative -left-1/3 ${formData.type === 'House & Villa' ? 'bg-blue-100 border-blue-500' : 'border-gray-300 w-32 h-10'}`}
              >
                House & Villa
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">BHK</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, '4+'].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({...formData, bhk: num})}
                  className={`w-16 h-9 border rounded flex items-center justify-center ${formData.bhk === num ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Bathrooms</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, '4+'].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({...formData, bathrooms: num})}
                  className={`w-16 h-9 border rounded flex items-center justify-center ${formData.bathrooms === num ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-6">
            <label className="block mb-2">Furnishing</label>
            <div className="flex space-x-2">
              {['Furnished', 'Semi-Furnished', 'Unfurnished'].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({...formData, furnishing: option})}
                  className={`p-2 border rounded ${formData.furnishing === option ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Project Status</label>
            <div className="flex space-x-2">
              {['New Launch', 'Ready to Move', 'Under Construction'].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({...formData, projectStatus: option})}
                  className={`p-2 border rounded ${formData.projectStatus === option ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Listed by</label>
            <div className="flex space-x-2">
              {['Builder', 'Dealer', 'Owner'].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({...formData, listedBy: option})}
                  className={`p-2 border rounded ${formData.listedBy === option ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Super Builtup area sqft *</label>
            <input
              type="number"
              name="superBuiltupArea"
              value={formData.superBuiltupArea}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Carpet Area sqft *</label>
            <input
              type="number"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-6">
            <label className="block mb-2">Maintenance (Monthly)</label>
            <input
              type="text"
              name="maintenance"
              value={formData.maintenance}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Total Floors</label>
            <input
              type="number"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Floor No</label>
            <input
              type="number"
              name="floorNo"
              value={formData.floorNo}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Car Parking</label>
            <div className="flex space-x-2">
              {[0, 1, 2, 3, '3+'].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({...formData, carParking: num})}
                  className={`w-16 h-9 border rounded flex items-center justify-center ${formData.carParking === num ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Facing</label>
            <input
              type="text"
              name="facing"
              value={formData.facing}
              onChange={handleChange}
              className="w-3/5 h-12 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
            <label className="block mb-2">Project Name</label>
            <div className="relative">
              <input
                type="text"
                name="adTitle"
                value={formData.adTitle}
                onChange={handleChange}
                className="w-3/5 h-12 p-2 border border-gray-300 rounded mb-6"
                maxLength={70}
                required
              />
          <span className="absolute top-14 right-80 text-xs top-2 text-gray-500">
                {characterCount.projectName} 0 / 70
              </span>       
              </div>
          <div className="mb-4">
            <label className="block mb-2">Ad title *</label>
            <div className="relative">
              <input
                type="text"
                name="adTitle"
                value={formData.adTitle}
                onChange={handleChange}
                className="w-3/5 h-12 p-2 border border-gray-300 rounded"
                maxLength={70}
                required
              />
              <span className="absolute top-14 right-80 text-xs top-2 text-gray-500">
                {characterCount.adTitle} / 70
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Mention the key features of your item (e.g. brand, model, age, type)
            </p>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Description *</label>
            <div className="relative">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-3/5 h-12 p-2 border border-gray-300 rounded h-32"
                maxLength={4096}
                required
              />
              <span className="absolute -bottom-6 right-80 text-xs text-gray-500">
                {characterCount.description} / 4096
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Include condition, features and reason for selling
            </p>
            
          </div>
          <hr />
        </div>
              
        <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">SET A PRICE</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-500 text-sm">
            Price<span className="text-gray-500">*</span>
          </label>
          <div className="flex w-3/5">
            <span className="inline-flex items-center px-4 border border-gray-300 border-r-0 rounded-l-md bg-gray-50 text-gray-500 text-lg gap-1">
              ₹
            </span>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-black-200"
              required
              min="0"
            
              style={{ borderLeft: "none" }}
            />
          </div>
        </div>
        <hr />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UPLOAD UP TO 20 PHOTOS</h2>
        <div className="grid grid-cols-4 gap-2 w-3/5">
          
          <div className="col-span-4">
            <label className="block text-sm font-medium mb-2"></label>
          </div>
          
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="relative">
              {formData.photos[index] ? (
                <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Photo {index + 1}</span>
                </div>
              ) : (
                <label className="block w-full h-24 border-2 border-gray-300 rounded flex items-center justify-center cursor-pointer relative">
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files.length > 0) {
                        const newPhotos = [...formData.photos];
                        newPhotos[index] = e.target.files[0];
                        setFormData({ ...formData, photos: newPhotos });
                      }
                    }}
                    className="hidden"
                    accept="image/*"
                  />
                  
                  <span className="relative inline-block">
                    
                    <svg 
                      className="w-8 h-8 text-gray-500 relative left-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 7h2l2-3h6l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" 
                      />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                    
                    <span className="absolute right-4 top-5 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center border border-gray-300 text-lg font-bold shadow">+</span>
                    <span className='relative top-2'>Add Photo</span>
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-red-500">
           This field is mandatory
        </div>
        <hr className='mt-8'/>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">CONFIRM YOUR LOCATION</h2>
        <div className="flex space-x-2 mb-4">
          <span className='border-b-4 border-blue-800 font-bold px-24'> LIST</span>
          <span className='absolute right-2/4'>CURRENT LOCATION</span>
        </div>
        <hr  className='relative bottom-4'/>
        <div className="mb-4">
          <label className="block mb-2">State *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
        </div>
      </div>
      <hr />

      <div className="mb-8 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">REVIEW YOUR DETAILS</h2>
        <div className="flex items-start mb-6">
          
          <div className="mr-6 flex flex-col items-center">
            <label className="relative cursor-pointer block w-20 h-20">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                {formData.profilePhoto ? (
                  <img
                    src={URL.createObjectURL(formData.profilePhoto)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="40" cy="40" r="40" fill="#FFE066"/>
                    <ellipse cx="40" cy="60" rx="28" ry="14" fill="#2D3A4A"/>
                    <ellipse cx="28" cy="36" rx="7" ry="8" fill="#2D3A4A"/>
                    <ellipse cx="52" cy="36" rx="7" ry="8" fill="#2D3A4A"/>
                    <ellipse cx="40" cy="38" rx="16" ry="16" fill="#F9DBB6"/>
                    <circle cx="32" cy="40" r="2" fill="#2D3A4A"/>
                    <circle cx="48" cy="40" r="2" fill="#2D3A4A"/>
                    <ellipse cx="40" cy="48" rx="5" ry="2" fill="#2D3A4A" fillOpacity=".2"/>
                  </svg>
                )}
                
                <div className="absolute left-1/2 -translate-x-1/2 bottom-1 bg-white rounded-full p-1 border border-gray-300 shadow-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </div>
              </div>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    setFormData({ ...formData, profilePhoto: e.target.files[0] });
                  }
                }}
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-2/4 p-2 border border-gray-300 rounded bg-white"
                maxLength={30}
              />
              <span className="absolute top-12 right-80 text-xs text-gray-500">
                {formData.name.length} / 30
              </span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-40 items-center p-2 border-hide  rounded">
            <span className="text-sm font-medium text-gray-700">Your phone number</span>
            <span className="text-gray-700">{formData.phoneNumber}</span>
          </div>
          <hr />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-gray-200 text-white font-medium rounded-md"
          >
            Post now
          </button>
        </div>
      </div>

      </form>
    </div>
  );
};

export default PropertyListingForm;