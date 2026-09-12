> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagesobel/colortransform](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagesobel/colortransform)

# colorTransform (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The color transform used to initialize the Sobel filter.

## Declaration

```swift
var colorTransform: UnsafePointer<Float> { get }
```

<a id="Discussion"></a>

## Discussion

This property returns a pointer to the array of 3 floats used to convert RGBA, RGB or RG source images to the destination texture format when said destination is monochrome.

# colorTransform (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The color transform used to initialize the Sobel filter.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) const float * colorTransform;
```

<a id="Discussion"></a>

## Discussion

This property returns a pointer to the array of 3 floats used to convert RGBA, RGB or RG source images to the destination texture format when said destination is monochrome.
