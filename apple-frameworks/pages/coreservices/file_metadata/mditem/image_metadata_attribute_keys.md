> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mditem/image_metadata_attribute_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mditem/image_metadata_attribute_keys)

# Image Metadata Attribute Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Metadata attribute keys that are common to image files.

## Topics

### Constants

- [kMDItemPixelHeight](../../kmditempixelheight.md): The height, in pixels, of the contents. For example, the image height or the video frame height. A CFNumber.
- [kMDItemPixelWidth](../../kmditempixelwidth.md): The width, in pixels, of the contents. For example, the image width or the video frame width. A CFNumber.
- [kMDItemPixelCount](../../kmditempixelcount.md): The total number of pixels in the contents. Same as [kMDItemPixelWidth](../../kmditempixelwidth.md) x [kMDItemPixelHeight](../../kmditempixelheight.md). A CFNumber.
- [kMDItemColorSpace](../../kmditemcolorspace.md): The color space model used by the document contents. For example, “RGB”, “CMYK”, “YUV”, or “YCbCr”. A CFString.
- [kMDItemBitsPerSample](../../kmditembitspersample.md): The number of bits per sample. For example, the bit depth of an image (8-bit, 16-bit etc...) or the bit depth per audio sample of uncompressed audio data (8, 16, 24, 32, 64, etc..). A CFNumber.
- [kMDItemFlashOnOff](../../kmditemflashonoff.md): Indicates if a camera flash was used. A CFNumber.
- [kMDItemFocalLength](../../kmditemfocallength.md): The actual focal length of the lens, in millimeters. A CFNumber.
- [kMDItemAcquisitionMake](../../kmditemacquisitionmake.md): The manufacturer of the device used to aquire the document contents. A CFString.
- [kMDItemAcquisitionModel](../../kmditemacquisitionmodel.md): The model of the device used to aquire the document contents. For example, 100, 200, 400, etc. A CFString.
- [kMDItemISOSpeed](../../kmditemisospeed.md): The ISO speed used to acquire the document contents. A CFNumber.
- [kMDItemOrientation](../../kmditemorientation.md): The orientation of the document contents. Possible values are 0 (landscape) and 1 (portrait). A CFNumber.
- [kMDItemLayerNames](../../kmditemlayernames.md): The names of the layers in the file. A CFArray of CFStrings.
- [kMDItemWhiteBalance](../../kmditemwhitebalance.md): The white balance setting used to acquire the document contents. Possible values are 0 (auto white balance) and 1 (manual). A CFNumber.
- [kMDItemAperture](../../kmditemaperture.md): The aperture setting used to acquire the document contents. This unit is the APEX value. A CFNumber.
- [kMDItemProfileName](../../kmditemprofilename.md): The name of the color profile used by the document contents. A CFString.
- [kMDItemResolutionWidthDPI](../../kmditemresolutionwidthdpi.md): Resolution width, in DPI, of this image. A CFNumber.
- [kMDItemResolutionHeightDPI](../../kmditemresolutionheightdpi.md): Resolution height, in DPI, of this image. A CFNumber.
- [kMDItemExposureMode](../../kmditemexposuremode.md): The exposure mode used to acquire the document contents. A CFNumber.
- [kMDItemExposureTimeSeconds](../../kmditemexposuretimeseconds.md): The exposure time, in seconds, used to acquire the document contents. A CFNumber.
- [kMDItemEXIFVersion](../../kmditemexifversion.md): The version of the EXIF header used to generate the metadata. A CFString.
- [kMDItemAlbum](../../kmditemalbum.md): The title for a collection of media. This is analagous to a record album, or photo album. A CFString.
- [kMDItemHasAlphaChannel](../../kmditemhasalphachannel.md): Indicates if this image file has an alpha channel. A CFBoolean.
- [kMDItemRedEyeOnOff](../../kmditemredeyeonoff.md): Indicates if red-eye reduction was used to take the picture. A CFBoolean.
- [kMDItemMeteringMode](../../kmditemmeteringmode.md): The metering mode used to take the image. A CFString.
- [kMDItemMaxAperture](../../kmditemmaxaperture.md): The smallest f-number of the lens. Ordinarily it is given in the range of 00.00 to 99.99. A CFNumber.
- [kMDItemFNumber](../../kmditemfnumber.md): The diameter of the diaphragm aperture in terms of the effective focal length of the lens.
- [kMDItemExposureProgram](../../kmditemexposureprogram.md): The class of the exposure program used by the camera to set exposure when the image is taken. Possible values include: Manual, Normal, and Aperture priority. A CFString.
- [kMDItemExposureTimeString](../../kmditemexposuretimestring.md): The time of the exposure. A CFString.
- [kMDItemEXIFGPSVersion](../../kmditemexifgpsversion.md): The version of GPSInfoIFD in EXIF used to generate the metadata. A CFString.
- [kMDItemAltitude](../../kmditemaltitude.md): The altitude of the item in meters above sea level, expressed using the WGS84 datum. Negative values lie below sea level. A CFString.
- [kMDItemLatitude](../../kmditemlatitude.md): The latitude of the item in degrees north of the equator, expressed using the WGS84 datum. Negative values lie south of the equator. A CFString.
- [kMDItemLongitude](../../kmditemlongitude.md): The longitude of the item in degrees east of the prime meridian, expressed using the WGS84 datum. Negative values lie west of the prime meridian. A CFString.
- [kMDItemTimestamp](../../kmditemtimestamp.md): The timestamp on the item. This generally is used to indicate the time at which the event captured by the item took place. A CFString.
- [kMDItemSpeed](../../kmditemspeed.md): The speed of the item, in kilometers per hour. A CFString.
- [kMDItemGPSTrack](../../kmditemgpstrack.md): The direction of travel of the item, in degrees from true north. A CFString.
- [kMDItemImageDirection](../../kmditemimagedirection.md): The direction of the item's image, in degrees from true north. A CFString.
- [kMDItemNamedLocation](../../kmditemnamedlocation.md): The name of the location or point of interest associated with the item. The name may be user provided. A CFString.
