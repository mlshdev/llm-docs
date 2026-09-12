> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audio-channel-coordinates](https://developer.apple.com/documentation/coreaudiotypes/audio-channel-coordinates)

# Audio Channel Coordinates (Swift)

**Framework:** Core Audio Types  
**Kind:** API Collection

Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

## Topics

### Coordinates

- [AudioChannelCoordinateIndex](audiochannelcoordinateindex.md): Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](audiochanneldescription.md) structure.
- [coordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [coordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

### Flags

- [rectangularCoordinates](audiochannelflags/rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.
- [sphericalCoordinates](audiochannelflags/sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.
- [meters](audiochannelflags/meters.md): A flag that indicates that unit values are in meters.

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
- [Audio Channel Labels](audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

# Audio Channel Coordinates (Objective-C)

**Framework:** Core Audio Types  
**Kind:** API Collection

Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

## Topics

### Coordinates

- [AudioChannelCoordinateIndex](audiochannelcoordinateindex.md): Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](audiochanneldescription.md) structure.
- [kAudioChannelCoordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [kAudioChannelCoordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

### Flags

- [kAudioChannelFlags_AllOff](audiochannelflags/kaudiochannelflags_alloff.md): All flags are clear.
- [kAudioChannelFlags_RectangularCoordinates](audiochannelflags/rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.
- [kAudioChannelFlags_SphericalCoordinates](audiochannelflags/sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.
- [kAudioChannelFlags_Meters](audiochannelflags/meters.md): A flag that indicates that unit values are in meters.

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
