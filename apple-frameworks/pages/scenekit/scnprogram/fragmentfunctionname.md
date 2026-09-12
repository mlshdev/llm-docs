> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/fragmentfunctionname](https://developer.apple.com/documentation/scenekit/scnprogram/fragmentfunctionname)

# fragmentFunctionName (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The name of the fragment shader function to load from a Metal shader library.

## Declaration

```swift
var fragmentFunctionName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A program’s fragment shader (sometimes called a *pixel shader*) executes at least once for each pixel in rendered output. The fragment shader takes as input the values output by the vertex shader (after those values have been interpolated by the GPU), and uses them to compute a final color for each pixel.

By default, SceneKit looks for a fragment shader function by this name in the default Metal library. To use shaders from a separate library file, change the [library](library.md) property.

## See Also

### Working With Metal Shaders

- [vertexFunctionName](vertexfunctionname.md): The name of the vertex shader function to load from a Metal shader library.
- [library](library.md): The Metal shader library containing shader functions to be used by this program.

# fragmentFunctionName (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The name of the fragment shader function to load from a Metal shader library.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * fragmentFunctionName;
```

<a id="Discussion"></a>

## Discussion

A program’s fragment shader (sometimes called a *pixel shader*) executes at least once for each pixel in rendered output. The fragment shader takes as input the values output by the vertex shader (after those values have been interpolated by the GPU), and uses them to compute a final color for each pixel.

By default, SceneKit looks for a fragment shader function by this name in the default Metal library. To use shaders from a separate library file, change the [library](library.md) property.

## See Also

### Working With Metal Shaders

- [vertexFunctionName](vertexfunctionname.md): The name of the vertex shader function to load from a Metal shader library.
- [library](library.md): The Metal shader library containing shader functions to be used by this program.
