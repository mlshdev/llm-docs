> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/library](https://developer.apple.com/documentation/scenekit/scnprogram/library)

# library (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The Metal shader library containing shader functions to be used by this program.

## Declaration

```swift
var library: (any MTLLibrary)? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is nil (the default), SceneKit loads shader functions from the default Metal library. Change this value if you have compiled a separate `.metallib` file for the shader functions you wish to use.

## See Also

### Related Documentation

- [makeDefaultLibrary()](../../metal/mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.

### Working With Metal Shaders

- [vertexFunctionName](vertexfunctionname.md): The name of the vertex shader function to load from a Metal shader library.
- [fragmentFunctionName](fragmentfunctionname.md): The name of the fragment shader function to load from a Metal shader library.

# library (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The Metal shader library containing shader functions to be used by this program.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLLibrary> library;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is nil (the default), SceneKit loads shader functions from the default Metal library. Change this value if you have compiled a separate `.metallib` file for the shader functions you wish to use.

## See Also

### Related Documentation

- [newDefaultLibrary](../../metal/mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.

### Working With Metal Shaders

- [vertexFunctionName](vertexfunctionname.md): The name of the vertex shader function to load from a Metal shader library.
- [fragmentFunctionName](fragmentfunctionname.md): The name of the fragment shader function to load from a Metal shader library.
