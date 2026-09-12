> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/panorama_sample_atom/flags](https://developer.apple.com/documentation/quicktime-file-format/panorama_sample_atom/flags)

# flags

**Framework:** QuickTime File Format  
**Kind:** Data field

A set of panorama flags.

<a id="Overview"></a>

## Overview

`kQTVRPanoFlagHorizontal` has been superseded by the `panoType` field. It is used only when the `panoType` field is `nil` to indicate a horizontally-oriented cylindrical panorama. `kQTVRPanoFlagAlwaysWrap` is set if the panorama should wrap horizontally, regardless of whether or not the pan range is 360 degrees. Note that these flags are currently supported only under OS X.

## See Also

### Data fields

- [majorVersion](majorversion.md): The major version number of the file format.
- [minorVersion](minorversion.md): The minor version number of the file format.
- [imageRefTrackIndex](imagereftrackindex.md): The index of the image track reference.
- [hotSpotRefTrackIndex](hotspotreftrackindex.md): The index of the hot spot track reference.
- [minPan](minpan.md): The minimum pan angle, in degrees.
- [maxPan](maxpan.md): The maximum pan angle, in degrees.
- [minTilt](mintilt.md): The minimum tilt angle, in degrees.
- [maxTilt](maxtilt.md): The maximum tilt angle, in degrees.
- [minFieldOfView](minfieldofview.md): The minimum vertical field of view, in degrees.
- [maxFieldOfView](maxfieldofview.md): The maximum vertical field of view, in degrees.
- [defaultPan](defaultpan.md): The default pan angle, in degrees.
- [defaultTilt](defaulttilt.md): The default tilt angle, in degrees.
- [defaultFieldOfView](defaultfieldofview.md): The default vertical field of view, in degrees.
- [imageSizeX](imagesizex.md): The width, in pixels, of the panorama stored in the highest resolution image track.
- [imageSizeY](imagesizey.md): The height, in pixels, of the panorama stored in the highest resolution image track.
