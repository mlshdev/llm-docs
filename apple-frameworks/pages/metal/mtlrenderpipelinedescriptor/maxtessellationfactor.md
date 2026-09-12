> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/maxtessellationfactor](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/maxtessellationfactor)

# maxTessellationFactor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The maximum tessellation factor that the tessellator uses when tessellating patches.

## Declaration

```swift
var maxTessellationFactor: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `16` and the maximum value is `64`. Any value in between needs to be set according to the partitioning mode specified by the [tessellationPartitionMode](tessellationpartitionmode.md) property:

- For the [MTLTessellationPartitionMode.pow2](../mtltessellationpartitionmode/pow2.md) partitioning mode, the value needs to be a power of two.
- For the [MTLTessellationPartitionMode.integer](../mtltessellationpartitionmode/integer.md) partitioning mode, the value can be an even or odd number.
- For the [MTLTessellationPartitionMode.fractionalOdd](../mtltessellationpartitionmode/fractionalodd.md) or [MTLTessellationPartitionMode.fractionalEven](../mtltessellationpartitionmode/fractionaleven.md) partitioning mode, the value needs to be an even number.

## See Also

### Specifying tessellation state

- [isTessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.

# maxTessellationFactor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The maximum tessellation factor that the tessellator uses when tessellating patches.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxTessellationFactor;
```

<a id="discussion"></a>

## Discussion

The default value is `16` and the maximum value is `64`. Any value in between needs to be set according to the partitioning mode specified by the [tessellationPartitionMode](tessellationpartitionmode.md) property:

- For the [MTLTessellationPartitionModePow2](../mtltessellationpartitionmode/pow2.md) partitioning mode, the value needs to be a power of two.
- For the [MTLTessellationPartitionModeInteger](../mtltessellationpartitionmode/integer.md) partitioning mode, the value can be an even or odd number.
- For the [MTLTessellationPartitionModeFractionalOdd](../mtltessellationpartitionmode/fractionalodd.md) or [MTLTessellationPartitionModeFractionalEven](../mtltessellationpartitionmode/fractionaleven.md) partitioning mode, the value needs to be an even number.

## See Also

### Specifying tessellation state

- [tessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.
