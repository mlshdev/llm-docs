> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexstepfunction/perpatch](https://developer.apple.com/documentation/metal/mtlvertexstepfunction/perpatch)

# MTLVertexStepFunction.perPatch (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The post-tessellation vertex function fetches data based on the patch index of the patch.

## Declaration

```swift
case perPatch
```

## See Also

### Step functions

- [MTLVertexStepFunction.constant](constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunction.perVertex](pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunction.perInstance](perinstance.md): The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.
- [MTLVertexStepFunction.perPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.

# MTLVertexStepFunctionPerPatch (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The post-tessellation vertex function fetches data based on the patch index of the patch.

## Declaration

```objectivec
MTLVertexStepFunctionPerPatch
```

## See Also

### Step functions

- [MTLVertexStepFunctionConstant](constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunctionPerVertex](pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunctionPerInstance](perinstance.md): The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.
- [MTLVertexStepFunctionPerPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.
