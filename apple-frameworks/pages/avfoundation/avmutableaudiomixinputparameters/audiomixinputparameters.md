> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/audiomixinputparameters](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/audiomixinputparameters)

# audioMixInputParameters

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a mutable input parameters object.

## Declaration

```objectivec
+ (instancetype) audioMixInputParameters;
```

<a id="return-value"></a>

## Return Value

A mutable input parameters object with no volume ramps and [trackID](trackid.md) initialized to [kCMPersistentTrackID_Invalid](../../coremedia/kcmpersistenttrackid_invalid.md).

## See Also

### Creating input parameters

- [audioMixInputParametersWithTrack:](init%28track_%29.md): Creates a mutable input parameters object for a given track.
