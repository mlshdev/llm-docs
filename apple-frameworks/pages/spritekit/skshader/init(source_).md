> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/init(source:)](https://developer.apple.com/documentation/spritekit/skshader/init(source:))

# init(source:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new shader object using the specified source code.

## Declaration

```swift
init(source: String)
```

## Parameters

- `source`: A string that holds the initial source for the shader.

<a id="return-value"></a>

## Return Value

An initialized shader object.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [init(fileNamed:)](init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [init(source:uniforms:)](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.

# initWithSource: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new shader object using the specified source code.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSString *) source;
```

## Parameters

- `source`: A string that holds the initial source for the shader.

<a id="return-value"></a>

## Return Value

An initialized shader object.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [shaderWithFileNamed:](init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [shaderWithSource:uniforms:](shaderwithsource_uniforms_.md): Creates a new shader object using the specified source and uniform data.
- [shaderWithSource:](shaderwithsource_.md): Creates a new shader object using the specified source code.
- [shader](shader.md): Creates a new empty shader object.
- [initWithSource:uniforms:](init%28source_uniforms_%29.md): Initializes a new shader object using the specified source and uniform data.
