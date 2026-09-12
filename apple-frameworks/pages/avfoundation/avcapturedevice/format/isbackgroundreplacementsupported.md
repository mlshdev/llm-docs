> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isbackgroundreplacementsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isbackgroundreplacementsupported)

# isBackgroundReplacementSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the format supports background replacement.

## Declaration

```swift
var isBackgroundReplacementSupported: Bool { get }
```

## See Also

### Determining background replacement support

- [videoFrameRateRangeForBackgroundReplacement](videoframeraterangeforbackgroundreplacement.md): The minimum and maximum frame rates available when Background Replacement is active.

# backgroundReplacementSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the format supports background replacement.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBackgroundReplacementSupported) BOOL backgroundReplacementSupported;
```

## See Also

### Determining background replacement support

- [videoFrameRateRangeForBackgroundReplacement](videoframeraterangeforbackgroundreplacement.md): The minimum and maximum frame rates available when Background Replacement is active.
