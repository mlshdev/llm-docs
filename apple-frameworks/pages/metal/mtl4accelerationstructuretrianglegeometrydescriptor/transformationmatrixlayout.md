> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/transformationmatrixlayout](https://developer.apple.com/documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/transformationmatrixlayout)

# transformationMatrixLayout (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the layout for the transformation matrix in the transformation matrix buffer.

## Declaration

```swift
var transformationMatrixLayout: MTLMatrixLayout { get set }
```

<a id="discussion"></a>

## Discussion

You can provide matrices in column-major or row-major form, and this property allows you to control how Metal interprets them.

Defaults to `MTLMatrixLayoutColumnMajor`.

# transformationMatrixLayout (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the layout for the transformation matrix in the transformation matrix buffer.

## Declaration

```objectivec
@property (nonatomic) MTLMatrixLayout transformationMatrixLayout;
```

<a id="discussion"></a>

## Discussion

You can provide matrices in column-major or row-major form, and this property allows you to control how Metal interprets them.

Defaults to `MTLMatrixLayoutColumnMajor`.
