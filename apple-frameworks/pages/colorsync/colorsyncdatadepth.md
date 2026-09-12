> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncdatadepth](https://developer.apple.com/documentation/colorsync/colorsyncdatadepth)

# ColorSyncDataDepth (Swift)

**Framework:** ColorSync  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The bit depth and numeric type of a color component in a pixel.

## Declaration

```swift
struct ColorSyncDataDepth
```

## Topics

### Initializers

- [init(\_:)](colorsyncdatadepth/init%28__%29.md)
- [init(rawValue:)](colorsyncdatadepth/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](colorsyncdatadepth/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataLayout](colorsyncdatalayout.md): A bit field describing the alpha information and byte order of a pixel layout.

# ColorSyncDataDepth (Objective-C)

**Framework:** ColorSync  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The bit depth and numeric type of a color component in a pixel.

## Declaration

```objectivec
enum ColorSyncDataDepth : unsigned int;
```

## See Also

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataLayout](colorsyncdatalayout.md): A bit field describing the alpha information and byte order of a pixel layout.
