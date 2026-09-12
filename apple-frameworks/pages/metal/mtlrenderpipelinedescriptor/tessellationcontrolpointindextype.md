> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/tessellationcontrolpointindextype](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/tessellationcontrolpointindextype)

# tessellationControlPointIndexType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The size of the control point indices in a control point index buffer.

## Declaration

```swift
var tessellationControlPointIndexType: MTLTessellationControlPointIndexType { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLTessellationControlPointIndexType.none](../mtltessellationcontrolpointindextype/none.md); use this value when drawing patches without a control point index buffer. This value needs to be either [MTLTessellationControlPointIndexType.uint16](../mtltessellationcontrolpointindextype/uint16.md) or [MTLTessellationControlPointIndexType.uint32](../mtltessellationcontrolpointindextype/uint32.md) when drawing patches with indexed control points.

## See Also

### Related Documentation

- [drawIndexedPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:)](../mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.
- [drawIndexedPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](../mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [isTessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.

# tessellationControlPointIndexType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The size of the control point indices in a control point index buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTessellationControlPointIndexType tessellationControlPointIndexType;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLTessellationControlPointIndexTypeNone](../mtltessellationcontrolpointindextype/none.md); use this value when drawing patches without a control point index buffer. This value needs to be either [MTLTessellationControlPointIndexTypeUInt16](../mtltessellationcontrolpointindextype/uint16.md) or [MTLTessellationControlPointIndexTypeUInt32](../mtltessellationcontrolpointindextype/uint32.md) when drawing patches with indexed control points.

## See Also

### Related Documentation

- [drawIndexedPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:](../mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.
- [drawIndexedPatches:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:](../mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

### Specifying tessellation state

- [maxTessellationFactor](maxtessellationfactor.md): The maximum tessellation factor that the tessellator uses when tessellating patches.
- [tessellationFactorScaleEnabled](istessellationfactorscaleenabled.md): A Boolean value that determines whether the pipeline scales the tessellation factor.
- [tessellationFactorFormat](tessellationfactorformat.md): The format of the tessellation factors in the tessellation factor buffer.
- [tessellationFactorStepFunction](tessellationfactorstepfunction.md): The step function for determining the tessellation factors for a patch from the tessellation factor buffer.
- [tessellationOutputWindingOrder](tessellationoutputwindingorder.md): The winding order of triangles from the tessellator.
- [tessellationPartitionMode](tessellationpartitionmode.md): The partitioning mode that the tessellator uses to derive the number and spacing of segments for subdividing a corresponding edge.
- [MTLTessellationFactorFormat](../mtltessellationfactorformat.md): Options for specifying the format of the tessellation factors in a tessellation factor buffer.
- [MTLTessellationControlPointIndexType](../mtltessellationcontrolpointindextype.md): Options for specifying the size of the control point indices in a control point index buffer.
- [MTLTessellationFactorStepFunction](../mtltessellationfactorstepfunction.md): Options for specifying the step function that determines the tessellation factors for a patch from the tessellation factor buffer.
- [MTLTessellationPartitionMode](../mtltessellationpartitionmode.md): Options for choosing the partition mode that the tessellator applies when deriving the number and spacing of segments for subdividing a corresponding edge.
