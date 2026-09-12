> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/vertexfunctionname](https://developer.apple.com/documentation/scenekit/scnprogram/vertexfunctionname)

# vertexFunctionName (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The name of the vertex shader function to load from a Metal shader library.

## Declaration

```swift
var vertexFunctionName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s vertex shader executes once for each vertex in the geometry it renders. It takes as input the attributes of each vertex (such as position in model space, normal vectors, and texture coordinates). The vertex shader then outputs a clip-space position for the vertex, as well as values that the GPU interpolates across a surface and sends to the fragment shader.

By default, SceneKit looks for a fragment shader function by this name in the default Metal library. To use shaders from a separate library file, change the [library](library.md) property.

## See Also

### Working With Metal Shaders

- [fragmentFunctionName](fragmentfunctionname.md): The name of the fragment shader function to load from a Metal shader library.
- [library](library.md): The Metal shader library containing shader functions to be used by this program.

# vertexFunctionName (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The name of the vertex shader function to load from a Metal shader library.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * vertexFunctionName;
```

<a id="Discussion"></a>

## Discussion

A program’s vertex shader executes once for each vertex in the geometry it renders. It takes as input the attributes of each vertex (such as position in model space, normal vectors, and texture coordinates). The vertex shader then outputs a clip-space position for the vertex, as well as values that the GPU interpolates across a surface and sends to the fragment shader.

By default, SceneKit looks for a fragment shader function by this name in the default Metal library. To use shaders from a separate library file, change the [library](library.md) property.

## See Also

### Working With Metal Shaders

- [fragmentFunctionName](fragmentfunctionname.md): The name of the fragment shader function to load from a Metal shader library.
- [library](library.md): The Metal shader library containing shader functions to be used by this program.
