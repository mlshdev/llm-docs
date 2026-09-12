> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideooutputspecification/defaultoutputsettings](https://developer.apple.com/documentation/avfoundation/avvideooutputspecification/defaultoutputsettings)

# defaultOutputSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var defaultOutputSettings: [String : any Sendable]? { get set }
```

## See Also

### Configuring the specification

- [setOutputSettings(\_:for:)](setoutputsettings%28__for_%29.md)
- [defaultPixelBufferAttributes](defaultpixelbufferattributes.md): Deprecated.
- [setOutputPixelBufferAttributes(\_:for:)](setoutputpixelbufferattributes%28__for_%29.md): Deprecated.
- [preferredTagCollections](preferredtagcollections-3gdo7.md)

# defaultOutputSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * defaultOutputSettings;
```

## See Also

### Configuring the specification

- [setOutputSettings:forTagCollection:](setoutputsettings_fortagcollection_.md)
- [defaultPixelBufferAttributes](defaultpixelbufferattributes.md): Deprecated.
- [setOutputPixelBufferAttributes:forTagCollection:](setoutputpixelbufferattributes_fortagcollection_.md): Deprecated.
- [preferredTagCollections](preferredtagcollections-2ikbd.md)
