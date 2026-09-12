> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/encode(with:)](https://developer.apple.com/documentation/avfoundation/avcaptionregion/encode(with:))

# encode(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Encodes the region using the specified encoder.

## Declaration

```swift
func encode(with encoder: NSCoder)
```

## Parameters

- `encoder`: An encoder instance to use.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the caption region’s [size](size.md) has different units for [width](../avcaptionsize/width.md) and [height](../avcaptionsize/height.md), or if the units are unrecognizeable.

## See Also

### Processing regions

- [mutableCopy(with:)](mutablecopy%28with_%29.md): Creates a mutable copy of a caption region.
- [isEqual(\_:)](isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.

# encodeWithCoder: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Encodes the region using the specified encoder.

## Declaration

```objectivec
- (void) encodeWithCoder:(NSCoder *) encoder;
```

## Parameters

- `encoder`: An encoder instance to use.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the caption region’s [size](size.md) has different units for [width](../avcaptionsize/width.md) and [height](../avcaptionsize/height.md), or if the units are unrecognizeable.

## See Also

### Processing regions

- [mutableCopyWithZone:](mutablecopy%28with_%29.md): Creates a mutable copy of a caption region.
- [isEqual:](isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.
