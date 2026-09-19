> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/objectfunctiondescriptor

# objectFunctionDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a function descriptor representing the function this pipeline executes for each *object* in the object shader stage.

## Declaration

```swift
@NSCopying var objectFunctionDescriptor: MTL4FunctionDescriptor? { get set }
```

# objectFunctionDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a function descriptor representing the function this pipeline executes for each *object* in the object shader stage.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) MTL4FunctionDescriptor * objectFunctionDescriptor;
```
