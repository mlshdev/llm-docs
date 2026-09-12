> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexstepfunction/perinstance](https://developer.apple.com/documentation/metal/mtlvertexstepfunction/perinstance)

# MTLVertexStepFunction.perInstance (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.

## Declaration

```swift
case perInstance
```

## See Also

### Step functions

- [MTLVertexStepFunction.constant](constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunction.perVertex](pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunction.perPatch](perpatch.md): The post-tessellation vertex function fetches data based on the patch index of the patch.
- [MTLVertexStepFunction.perPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.

# MTLVertexStepFunctionPerInstance (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.

## Declaration

```objectivec
MTLVertexStepFunctionPerInstance
```

## See Also

### Step functions

- [MTLVertexStepFunctionConstant](constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunctionPerVertex](pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunctionPerPatch](perpatch.md): The post-tessellation vertex function fetches data based on the patch index of the patch.
- [MTLVertexStepFunctionPerPatchControlPoint](perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.
