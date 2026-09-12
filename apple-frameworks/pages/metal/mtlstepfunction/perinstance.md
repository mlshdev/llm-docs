> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstepfunction/perinstance](https://developer.apple.com/documentation/metal/mtlstepfunction/perinstance)

# MTLStepFunction.perInstance (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The function fetches data based on the instance index.

## Declaration

```swift
case perInstance
```

## See Also

### Step options

- [MTLStepFunction.constant](constant.md): The function fetches attribute data once.
- [MTLStepFunction.perPatch](perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunction.perPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunction.perVertex](pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunction.threadPositionInGridX](threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunction.threadPositionInGridY](threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunction.threadPositionInGridXIndexed](threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.
- [MTLStepFunction.threadPositionInGridYIndexed](threadpositioningridyindexed.md): The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.

# MTLStepFunctionPerInstance (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The function fetches data based on the instance index.

## Declaration

```objectivec
MTLStepFunctionPerInstance
```

## See Also

### Step options

- [MTLStepFunctionConstant](constant.md): The function fetches attribute data once.
- [MTLStepFunctionPerPatch](perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunctionPerPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunctionPerVertex](pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunctionThreadPositionInGridX](threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunctionThreadPositionInGridY](threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunctionThreadPositionInGridXIndexed](threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.
- [MTLStepFunctionThreadPositionInGridYIndexed](threadpositioningridyindexed.md): The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.
