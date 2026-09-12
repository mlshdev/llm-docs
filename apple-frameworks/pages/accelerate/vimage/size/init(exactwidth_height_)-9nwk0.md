> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/size/init(exactwidth:height:)-9nwk0](https://developer.apple.com/documentation/accelerate/vimage/size/init(exactwidth:height:)-9nwk0)

# init(exactWidth:height:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a size with dimensions specified as floating-point values.

## Declaration

```swift
init?<T>(exactWidth: T, height: T) where T : BinaryFloatingPoint
```

## Parameters

- `exactWidth`: The width.
- `height`: The height.

<a id="Discussion"></a>

## Discussion

The height and width must be greater than `0` and exactly representable as an `Int` value.

## See Also

### Initializers

- [init(cvPixelBuffer:)](init%28cvpixelbuffer_%29.md): Creates a size with dimensions specified by a Core Video pixel buffer.
- [init(exactWidth:height:)](init%28exactwidth_height_%29-4ygbk.md): Creates a size with dimensions specified as integer values.
- [init(exactly:)](init%28exactly_%29.md): Creates a size with dimensions specified as a Core Graphics size value.
- [init(width:height:)](init%28width_height_%29-fzcb.md): Creates a size with dimensions specified as integer values.
- [init(width:height:)](init%28width_height_%29-8ly3k.md): Creates a size with dimensions specified as unsigned integer values.
