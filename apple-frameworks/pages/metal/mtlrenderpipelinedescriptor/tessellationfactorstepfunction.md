> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/tessellationfactorstepfunction](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/tessellationfactorstepfunction)

# tessellationFactorStepFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The step function for determining the tessellation factors for a patch from the tessellation factor buffer.

## Declaration

```swift
var tessellationFactorStepFunction: MTLTessellationFactorStepFunction { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLTessellationFactorStepFunction.constant](../mtltessellationfactorstepfunction/constant.md).

## See Also

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [isTessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.

# tessellationFactorStepFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The step function for determining the tessellation factors for a patch from the tessellation factor buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTessellationFactorStepFunction tessellationFactorStepFunction;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLTessellationFactorStepFunctionConstant](../mtltessellationfactorstepfunction/constant.md).

## See Also

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [tessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.
