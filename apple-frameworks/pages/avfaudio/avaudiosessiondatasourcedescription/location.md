> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/location

# location (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The location of the data source on the device.

## Declaration

```swift
var location: AVAudioSession.Location? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if the data source’s location isn’t known.

## See Also

### Retrieving the Data Source Location

- [AVAudioSession.Location](../avaudiosession/location.md): Constants that describe the location of the data source on device.

# location (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The location of the data source on the device.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionLocation location;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if the data source’s location isn’t known.

## See Also

### Retrieving the Data Source Location

- [AVAudioSessionLocation](../avaudiosession/location.md): Constants that describe the location of the data source on device.
