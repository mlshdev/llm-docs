> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinereflection/vertexbindings](https://developer.apple.com/documentation/metal/mtlrenderpipelinereflection/vertexbindings)

# vertexBindings (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An array of binding instances, each of which represents a parameter of the pipeline state’s vertex shader.

## Declaration

```swift
var vertexBindings: [any MTLBinding] { get }
```

<a id="discussion"></a>

## Discussion

The [MTLBinding](../mtlbinding.md) elements in the array are in the same order as the vertex shader’s declaration signature.

## See Also

### Inspecting a shader’s parameter

- [fragmentBindings](fragmentbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s fragment shader.
- [meshBindings](meshbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s mesh shader.
- [objectBindings](objectbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s object shader.
- [tileBindings](tilebindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s tile shader.

# vertexBindings (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An array of binding instances, each of which represents a parameter of the pipeline state’s vertex shader.

## Declaration

```objectivec
@property (readonly, nonnull) NSArray<id<MTLBinding>> * vertexBindings;
```

<a id="discussion"></a>

## Discussion

The [MTLBinding](../mtlbinding.md) elements in the array are in the same order as the vertex shader’s declaration signature.

## See Also

### Inspecting a shader’s parameter

- [fragmentBindings](fragmentbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s fragment shader.
- [meshBindings](meshbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s mesh shader.
- [objectBindings](objectbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s object shader.
- [tileBindings](tilebindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s tile shader.
