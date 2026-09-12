> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/istessellationfactorscaleenabled](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/istessellationfactorscaleenabled)

# isTessellationFactorScaleEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the pipeline scales the tessellation factor.

## Declaration

```swift
var isTessellationFactorScaleEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If this value is [true](https://developer.apple.com/documentation/swift/true), a scale factor is applied to the tessellation factors after the patch cull check is performed but before the tessellation factors are clamped to the value of [maxTessellationFactor](maxtessellationfactor.md). The scale factor is applied only if the patch is not culled.

## See Also

### Related Documentation

- [setTessellationFactorScale(\_:)](../mtlrendercommandencoder/settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.

# tessellationFactorScaleEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the pipeline scales the tessellation factor.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isTessellationFactorScaleEnabled) BOOL tessellationFactorScaleEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If this value is [true](https://developer.apple.com/documentation/swift/true), a scale factor is applied to the tessellation factors after the patch cull check is performed but before the tessellation factors are clamped to the value of [maxTessellationFactor](maxtessellationfactor.md). The scale factor is applied only if the patch is not culled.

## See Also

### Related Documentation

- [setTessellationFactorScale:](../mtlrendercommandencoder/settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationControlPointIndexType](tessellationcontrolpointindextype.md): The size of the control point indices in a control point index buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.
