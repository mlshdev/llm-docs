> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avdisplaydynamicrange](https://developer.apple.com/documentation/avkit/avdisplaydynamicrange)

# AVDisplayDynamicRange (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Describes how High Dynamic Range (HDR) video content renders.

## Declaration

```swift
enum AVDisplayDynamicRange
```

## Topics

### Creating a dynamic range

- [init(rawValue:)](avdisplaydynamicrange/init%28rawvalue_%29.md)

### Dynamic Ranges

- [AVDisplayDynamicRange.automatic](avdisplaydynamicrange/automatic.md): Defines an automatic dynamic range. Indicates that the dynamic range will be set automatically.
- [AVDisplayDynamicRange.standard](avdisplaydynamicrange/standard.md): Defines a standard dynamic range. Restricts the video content dynamic range to the standard range regardless of the actual range of the video content.
- [AVDisplayDynamicRange.constrainedHigh](avdisplaydynamicrange/constrainedhigh.md): Defines a constrained high dynamic range. Allows for constrained High Dynamic Range (HDR) video content which is useful for mixing HDR and Standard Dynamic Range (SDR) content.
- [AVDisplayDynamicRange.high](avdisplaydynamicrange/high.md): Defines a high dynamic range. Allows video content to use extended dynamic range if it has dynamic range content.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### High dynamic range

- [preferredDisplayDynamicRange](avplayerview/preferreddisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.

# AVDisplayDynamicRange (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Describes how High Dynamic Range (HDR) video content renders.

## Declaration

```objectivec
enum AVDisplayDynamicRange : NSInteger;
```

## Topics

### Dynamic Ranges

- [AVDisplayDynamicRangeAutomatic](avdisplaydynamicrange/automatic.md): Defines an automatic dynamic range. Indicates that the dynamic range will be set automatically.
- [AVDisplayDynamicRangeStandard](avdisplaydynamicrange/standard.md): Defines a standard dynamic range. Restricts the video content dynamic range to the standard range regardless of the actual range of the video content.
- [AVDisplayDynamicRangeConstrainedHigh](avdisplaydynamicrange/constrainedhigh.md): Defines a constrained high dynamic range. Allows for constrained High Dynamic Range (HDR) video content which is useful for mixing HDR and Standard Dynamic Range (SDR) content.
- [AVDisplayDynamicRangeHigh](avdisplaydynamicrange/high.md): Defines a high dynamic range. Allows video content to use extended dynamic range if it has dynamic range content.

## See Also

### High dynamic range

- [preferredDisplayDynamicRange](avplayerview/preferreddisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.
