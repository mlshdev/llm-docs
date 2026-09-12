> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/init(track:)](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/init(track:))

# init(track:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a mutable input parameters object for a given track.

## Declaration

```swift
convenience init(track: AVAssetTrack?)
```

## Parameters

- `track`: The track to associate with the input parameters object.

<a id="return-value"></a>

## Return Value

A mutable input parameters object with no volume ramps and [trackID](trackid.md) set to `track`’s identifier.

# audioMixInputParametersWithTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a mutable input parameters object for a given track.

## Declaration

```objectivec
+ (instancetype) audioMixInputParametersWithTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The track to associate with the input parameters object.

<a id="return-value"></a>

## Return Value

A mutable input parameters object with no volume ramps and [trackID](trackid.md) set to `track`’s identifier.

## See Also

### Creating input parameters

- [audioMixInputParameters](audiomixinputparameters.md): Creates a mutable input parameters object.
