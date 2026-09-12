> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/init(filenamed:)](https://developer.apple.com/documentation/spritekit/skshader/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.

## Declaration

```swift
convenience init(fileNamed name: String)
```

## Parameters

- `name`: The name of the fragment shader to load. The file must be present in your app bundle with the same name and a `.fsh` file extension.

<a id="return-value"></a>

## Return Value

A newly initialized shader object whose initial source is loaded from the shader file.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [init(source:uniforms:)](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [init(source:)](init%28source_%29.md): Initializes a new shader object using the specified source code.

# shaderWithFileNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.

## Declaration

```objectivec
+ (instancetype) shaderWithFileNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the fragment shader to load. The file must be present in your app bundle with the same name and a `.fsh` file extension.

<a id="return-value"></a>

## Return Value

A newly initialized shader object whose initial source is loaded from the shader file.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [shaderWithSource:uniforms:](shaderwithsource_uniforms_.md): Creates a new shader object using the specified source and uniform data.
- [shaderWithSource:](shaderwithsource_.md): Creates a new shader object using the specified source code.
- [shader](shader.md): Creates a new empty shader object.
- [initWithSource:uniforms:](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
- [initWithSource:](init%28source_%29.md): Initializes a new shader object using the specified source code.
