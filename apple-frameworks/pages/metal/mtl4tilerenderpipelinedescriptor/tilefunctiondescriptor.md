> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4tilerenderpipelinedescriptor/tilefunctiondescriptor

# tileFunctionDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the tile function that the render pipeline executes for each tile in the tile shader stage.

## Declaration

```swift
@NSCopying var tileFunctionDescriptor: MTL4FunctionDescriptor? { get set }
```

# tileFunctionDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the tile function that the render pipeline executes for each tile in the tile shader stage.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) MTL4FunctionDescriptor * tileFunctionDescriptor;
```
