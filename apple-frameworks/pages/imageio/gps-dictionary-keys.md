> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/gps-dictionary-keys](https://developer.apple.com/documentation/imageio/gps-dictionary-keys)

# GPS Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** Image I/O  
**Kind:** API Collection

Keys for Global Positioning System (GPS) information.

## Topics

### Dictionary

- [kCGImagePropertyGPSDictionary](kcgimagepropertygpsdictionary.md): A dictionary of key-value pairs for an image that has Global Positioning System (GPS) information.

### GPS Coordinate

- [kCGImagePropertyGPSLatitude](kcgimagepropertygpslatitude.md): The latitude.
- [kCGImagePropertyGPSLongitude](kcgimagepropertygpslongitude.md): The longitude.
- [kCGImagePropertyGPSAltitude](kcgimagepropertygpsaltitude.md): The altitude.
- [kCGImagePropertyGPSLatitudeRef](kcgimagepropertygpslatituderef.md): An indication of whether the latitude is north or south.
- [kCGImagePropertyGPSLongitudeRef](kcgimagepropertygpslongituderef.md): An indication of whether the longitude is east or west.
- [kCGImagePropertyGPSAltitudeRef](kcgimagepropertygpsaltituderef.md): The altitude point of reference.
- [kCGImagePropertyGPSHPositioningError](kcgimagepropertygpshpositioningerror.md): The horizontal error in the GPS position.

### Destinations

- [kCGImagePropertyGPSDestLatitude](kcgimagepropertygpsdestlatitude.md): The latitude of the destination point.
- [kCGImagePropertyGPSDestLongitude](kcgimagepropertygpsdestlongitude.md): The longitude of the destination point.
- [kCGImagePropertyGPSDestBearing](kcgimagepropertygpsdestbearing.md): The bearing to the destination point.
- [kCGImagePropertyGPSDestDistance](kcgimagepropertygpsdestdistance.md): The distance to the destination point.
- [kCGImagePropertyGPSDestLatitudeRef](kcgimagepropertygpsdestlatituderef.md): An indication of whether the latitude of the destination point is northern or southern.
- [kCGImagePropertyGPSDestLongitudeRef](kcgimagepropertygpsdestlongituderef.md): An indication of whether the longitude of the destination point is east or west.
- [kCGImagePropertyGPSDestBearingRef](kcgimagepropertygpsdestbearingref.md): The reference for giving the bearing to the destination point.
- [kCGImagePropertyGPSDestDistanceRef](kcgimagepropertygpsdestdistanceref.md): The units for expressing the distance to the destination point.

### Image Orientation

- [kCGImagePropertyGPSImgDirectionRef](kcgimagepropertygpsimgdirectionref.md): The reference for the direction of the image.
- [kCGImagePropertyGPSImgDirection](kcgimagepropertygpsimgdirection.md): The direction of the image.

### Measurement Details

- [kCGImagePropertyGPSStatus](kcgimagepropertygpsstatus.md): The status of the GPS receiver.
- [kCGImagePropertyGPSSatellites](kcgimagepropertygpssatellites.md): The satellites used for GPS measurements.
- [kCGImagePropertyGPSMeasureMode](kcgimagepropertygpsmeasuremode.md): The measurement mode.
- [kCGImagePropertyGPSDOP](kcgimagepropertygpsdop.md): The degree of precision (DOP) of the data.
- [kCGImagePropertyGPSSpeedRef](kcgimagepropertygpsspeedref.md): The unit for expressing the GPS receiver’s speed of movement.
- [kCGImagePropertyGPSSpeed](kcgimagepropertygpsspeed.md): The GPS receiver’s speed of movement.
- [kCGImagePropertyGPSTrackRef](kcgimagepropertygpstrackref.md): The reference for the direction of GPS receiver’s movement.
- [kCGImagePropertyGPSTrack](kcgimagepropertygpstrack.md): The direction of GPS receiver’s movement.
- [kCGImagePropertyGPSMapDatum](kcgimagepropertygpsmapdatum.md): The geodetic survey data used by the GPS receiver.
- [kCGImagePropertyGPSProcessingMethod](kcgimagepropertygpsprocessingmethod.md): The name of the method used to find a location.
- [kCGImagePropertyGPSAreaInformation](kcgimagepropertygpsareainformation.md): The name of the GPS area.
- [kCGImagePropertyGPSDifferental](kcgimagepropertygpsdifferental.md): An indication of whether differential correction is applied to the GPS receiver.

### Timestamp Information

- [kCGImagePropertyGPSTimeStamp](kcgimagepropertygpstimestamp.md): The time in UTC (Coordinated Universal Time).
- [kCGImagePropertyGPSDateStamp](kcgimagepropertygpsdatestamp.md): The date and time information relative to Coordinated Universal Time (UTC).

### GPS Version

- [kCGImagePropertyGPSVersion](kcgimagepropertygpsversion.md): The GPS version information.

## See Also

### Common Image Properties

- [Image Properties](image-properties.md): Properties that apply to the container in general, and not necessarily to an individual image in the container.
- [EXIF Dictionary Keys](exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [IPTC Dictionary Keys](iptc-dictionary-keys.md): Metadata keys for International Press Telecommunications Council (IPTC) data.
- [WebP Data](webp-data.md): Metadata keys for WebP metadata.
