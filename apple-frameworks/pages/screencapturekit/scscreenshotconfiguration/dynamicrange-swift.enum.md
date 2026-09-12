> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration/dynamicrange-swift.enum](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/dynamicrange-swift.enum)

# SCScreenshotConfiguration.DynamicRange (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Specifies the type of images returned to the client; standard dynamic range, high dynamic range, or both.

## Declaration

```swift
enum DynamicRange
```

## Topics

### Enumeration Cases

- [SCScreenshotConfiguration.DynamicRange.bothSDRAndHDR](dynamicrange-swift.enum/bothsdrandhdr.md): Returns both standard dynamic range and high dynamic range image versions to the client.
- [SCScreenshotConfiguration.DynamicRange.hdr](dynamicrange-swift.enum/hdr.md): Returns a high dynamic range image to the client.
- [SCScreenshotConfiguration.DynamicRange.sdr](dynamicrange-swift.enum/sdr.md): Returns a standard dynamic range image to the client.

### Initializers

- [init(rawValue:)](dynamicrange-swift.enum/init%28rawvalue_%29.md): Creates a dynamic range object from the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCScreenshotDynamicRange (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies the type of images returned to the client; standard dynamic range, high dynamic range, or both.

## Declaration

```objectivec
enum SCScreenshotDynamicRange : NSInteger;
```

## Topics

### Enumeration Cases

- [SCScreenshotDynamicRangeSDRAndHDR](dynamicrange-swift.enum/bothsdrandhdr.md): Returns both standard dynamic range and high dynamic range image versions to the client.
- [SCScreenshotDynamicRangeHDR](dynamicrange-swift.enum/hdr.md): Returns a high dynamic range image to the client.
- [SCScreenshotDynamicRangeSDR](dynamicrange-swift.enum/sdr.md): Returns a standard dynamic range image to the client.
