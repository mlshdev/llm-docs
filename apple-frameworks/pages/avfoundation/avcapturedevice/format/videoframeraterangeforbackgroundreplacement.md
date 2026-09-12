> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videoframeraterangeforbackgroundreplacement](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videoframeraterangeforbackgroundreplacement)

# videoFrameRateRangeForBackgroundReplacement (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The minimum and maximum frame rates available when Background Replacement is active.

## Declaration

```swift
var videoFrameRateRangeForBackgroundReplacement: AVFrameRateRange? { get }
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Background Replacement is active. If this device format doesn’t support this feature, the value of this property is `nil`.

## See Also

### Determining background replacement support

- [isBackgroundReplacementSupported](isbackgroundreplacementsupported.md): A Boolean value that indicates whether the format supports background replacement.

# videoFrameRateRangeForBackgroundReplacement (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The minimum and maximum frame rates available when Background Replacement is active.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVFrameRateRange * videoFrameRateRangeForBackgroundReplacement;
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Background Replacement is active. If this device format doesn’t support this feature, the value of this property is `nil`.

## See Also

### Determining background replacement support

- [backgroundReplacementSupported](isbackgroundreplacementsupported.md): A Boolean value that indicates whether the format supports background replacement.
