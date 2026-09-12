> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltessellationcontrolpointindextype](https://developer.apple.com/documentation/metal/mtltessellationcontrolpointindextype)

# MTLTessellationControlPointIndexType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Options for specifying the size of the control point indices in a control point index buffer.

## Declaration

```swift
enum MTLTessellationControlPointIndexType
```

## Topics

### Index types

- [MTLTessellationControlPointIndexType.none](mtltessellationcontrolpointindextype/none.md): No size. This value should only be used when drawing patches without a control point index buffer.
- [MTLTessellationControlPointIndexType.uint16](mtltessellationcontrolpointindextype/uint16.md): The size of a 16-bit unsigned integer.
- [MTLTessellationControlPointIndexType.uint32](mtltessellationcontrolpointindextype/uint32.md): The size of a 32-bit unsigned integer.

### Initializers

- [init(rawValue:)](mtltessellationcontrolpointindextype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying tessellation state

- [maxTessellationFactor](mtlrenderpipelinedescriptor/maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [isTessellationFactorScaleEnabled](mtlrenderpipelinedescriptor/istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](mtlrenderpipelinedescriptor/tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](mtlrenderpipelinedescriptor/tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](mtlrenderpipelinedescriptor/tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](mtlrenderpipelinedescriptor/tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](mtlrenderpipelinedescriptor/tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationFactorStepFunction](mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.

# MTLTessellationControlPointIndexType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Options for specifying the size of the control point indices in a control point index buffer.

## Declaration

```objectivec
enum MTLTessellationControlPointIndexType : NSUInteger;
```

## Topics

### Index types

- [MTLTessellationControlPointIndexTypeNone](mtltessellationcontrolpointindextype/none.md): No size. This value should only be used when drawing patches without a control point index buffer.
- [MTLTessellationControlPointIndexTypeUInt16](mtltessellationcontrolpointindextype/uint16.md): The size of a 16-bit unsigned integer.
- [MTLTessellationControlPointIndexTypeUInt32](mtltessellationcontrolpointindextype/uint32.md): The size of a 32-bit unsigned integer.

## See Also

### Specifying tessellation state

- [maxTessellationFactor](mtlrenderpipelinedescriptor/maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [tessellationFactorScaleEnabled](mtlrenderpipelinedescriptor/istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](mtlrenderpipelinedescriptor/tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](mtlrenderpipelinedescriptor/tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](mtlrenderpipelinedescriptor/tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](mtlrenderpipelinedescriptor/tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](mtlrenderpipelinedescriptor/tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationFactorStepFunction](mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.
