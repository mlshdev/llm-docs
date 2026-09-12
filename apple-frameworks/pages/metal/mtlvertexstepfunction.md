> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexstepfunction](https://developer.apple.com/documentation/metal/mtlvertexstepfunction)

# MTLVertexStepFunction (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

## Declaration

```swift
enum MTLVertexStepFunction
```

## Topics

### Step functions

- [MTLVertexStepFunction.constant](mtlvertexstepfunction/constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunction.perVertex](mtlvertexstepfunction/pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunction.perInstance](mtlvertexstepfunction/perinstance.md): The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.
- [MTLVertexStepFunction.perPatch](mtlvertexstepfunction/perpatch.md): The post-tessellation vertex function fetches data based on the patch index of the patch.
- [MTLVertexStepFunction.perPatchControlPoint](mtlvertexstepfunction/perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.

### Initializers

- [init(rawValue:)](mtlvertexstepfunction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Organizing the vertex buffer layout

- [stepFunction](mtlvertexbufferlayoutdescriptor/stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](mtlvertexbufferlayoutdescriptor/steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](mtlvertexbufferlayoutdescriptor/stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.

# MTLVertexStepFunction (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

## Declaration

```objectivec
enum MTLVertexStepFunction : NSUInteger;
```

## Topics

### Step functions

- [MTLVertexStepFunctionConstant](mtlvertexstepfunction/constant.md): The vertex function fetches attribute data once and uses that data for every vertex.
- [MTLVertexStepFunctionPerVertex](mtlvertexstepfunction/pervertex.md): The vertex function fetches and uses new attribute data for every vertex.
- [MTLVertexStepFunctionPerInstance](mtlvertexstepfunction/perinstance.md): The vertex function regularly fetches new attribute data for a number of instances that is determined by `stepRate`.
- [MTLVertexStepFunctionPerPatch](mtlvertexstepfunction/perpatch.md): The post-tessellation vertex function fetches data based on the patch index of the patch.
- [MTLVertexStepFunctionPerPatchControlPoint](mtlvertexstepfunction/perpatchcontrolpoint.md): The post-tessellation vertex function fetches data based on the control-point indices associated with the patch.

## See Also

### Organizing the vertex buffer layout

- [stepFunction](mtlvertexbufferlayoutdescriptor/stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](mtlvertexbufferlayoutdescriptor/steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](mtlvertexbufferlayoutdescriptor/stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
