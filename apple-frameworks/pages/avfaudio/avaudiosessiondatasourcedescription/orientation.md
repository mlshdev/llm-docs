> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription/orientation](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/orientation)

# orientation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The orientation of the data source relative to the device’s natural orientation.

## Declaration

```swift
var orientation: AVAudioSession.Orientation? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if the data source’s orientation isn’t known.

## See Also

### Retrieving the Data Source Orientation

- [AVAudioSession.Orientation](../avaudiosession/orientation.md): Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.

# orientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The orientation of the data source relative to the device’s natural orientation.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if the data source’s orientation isn’t known.

## See Also

### Retrieving the Data Source Orientation

- [AVAudioSessionOrientation](../avaudiosession/orientation.md): Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.
