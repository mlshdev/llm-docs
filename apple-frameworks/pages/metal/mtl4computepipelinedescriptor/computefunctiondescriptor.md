> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computepipelinedescriptor/computefunctiondescriptor](https://developer.apple.com/documentation/metal/mtl4computepipelinedescriptor/computefunctiondescriptor)

# computeFunctionDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A descriptor representing the compute pipeline’s function.

## Declaration

```swift
@NSCopying var computeFunctionDescriptor: MTL4FunctionDescriptor? { get set }
```

<a id="discussion"></a>

## Discussion

You don’t assign instances of [MTL4FunctionDescriptor](../mtl4functiondescriptor.md) to this property directly, instead assign an instance of one of its subclasses, such as [MTL4LibraryFunctionDescriptor](../mtl4libraryfunctiondescriptor.md), which represents a function from a Metal library.

# computeFunctionDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A descriptor representing the compute pipeline’s function.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) MTL4FunctionDescriptor * computeFunctionDescriptor;
```

<a id="discussion"></a>

## Discussion

You don’t assign instances of [MTL4FunctionDescriptor](../mtl4functiondescriptor.md) to this property directly, instead assign an instance of one of its subclasses, such as [MTL4LibraryFunctionDescriptor](../mtl4libraryfunctiondescriptor.md), which represents a function from a Metal library.
