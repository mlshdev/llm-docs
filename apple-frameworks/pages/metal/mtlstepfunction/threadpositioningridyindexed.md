> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstepfunction/threadpositioningridyindexed](https://developer.apple.com/documentation/metal/mtlstepfunction/threadpositioningridyindexed)

# MTLStepFunction.threadPositionInGridYIndexed (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.

## Declaration

```swift
case threadPositionInGridYIndexed
```

<a id="discussion"></a>

## Discussion

This step function uses the `y` coordinate of the thread position in a grid as an index into the `[[stage_in]]` index buffer, which is then used to fetch data. In tessellation compute kernels, you use this step function to identify a control point in a given patch.

## See Also

### Step options

- [MTLStepFunction.constant](constant.md): The function fetches attribute data once.
- [MTLStepFunction.perInstance](perinstance.md): The function fetches data based on the instance index.
- [MTLStepFunction.perPatch](perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunction.perPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunction.perVertex](pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunction.threadPositionInGridX](threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunction.threadPositionInGridY](threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunction.threadPositionInGridXIndexed](threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.

# MTLStepFunctionThreadPositionInGridYIndexed (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.

## Declaration

```objectivec
MTLStepFunctionThreadPositionInGridYIndexed
```

<a id="discussion"></a>

## Discussion

This step function uses the `y` coordinate of the thread position in a grid as an index into the `[[stage_in]]` index buffer, which is then used to fetch data. In tessellation compute kernels, you use this step function to identify a control point in a given patch.

## See Also

### Step options

- [MTLStepFunctionConstant](constant.md): The function fetches attribute data once.
- [MTLStepFunctionPerInstance](perinstance.md): The function fetches data based on the instance index.
- [MTLStepFunctionPerPatch](perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunctionPerPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunctionPerVertex](pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunctionThreadPositionInGridX](threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunctionThreadPositionInGridY](threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunctionThreadPositionInGridXIndexed](threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.
