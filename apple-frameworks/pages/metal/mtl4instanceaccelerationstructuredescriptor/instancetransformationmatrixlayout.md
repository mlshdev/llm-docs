> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancetransformationmatrixlayout](https://developer.apple.com/documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancetransformationmatrixlayout)

# instanceTransformationMatrixLayout (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the layout for the transformation matrices in the instance descriptor buffer and the motion transformation matrix buffer.

## Declaration

```swift
var instanceTransformationMatrixLayout: MTLMatrixLayout { get set }
```

<a id="discussion"></a>

## Discussion

Metal interprets the value of this property as the layout for the buffers that both [instanceDescriptorBuffer](instancedescriptorbuffer.md) and [motionTransformBuffer](motiontransformbuffer.md) reference.

Defaults to `MTLMatrixLayoutColumnMajor`.

# instanceTransformationMatrixLayout (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the layout for the transformation matrices in the instance descriptor buffer and the motion transformation matrix buffer.

## Declaration

```objectivec
@property (nonatomic) MTLMatrixLayout instanceTransformationMatrixLayout;
```

<a id="discussion"></a>

## Discussion

Metal interprets the value of this property as the layout for the buffers that both [instanceDescriptorBuffer](instancedescriptorbuffer.md) and [motionTransformBuffer](motiontransformbuffer.md) reference.

Defaults to `MTLMatrixLayoutColumnMajor`.
