> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/init(source:uniforms:)](https://developer.apple.com/documentation/spritekit/skshader/init(source:uniforms:))

# init(source:uniforms:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new shader object using the specified source and uniform data.

## Declaration

```swift
init(source: String, uniforms: [SKUniform])
```

## Parameters

- `source`: A string that holds the initial source for the shader.
- `uniforms`: A list of uniforms to add to the shader object.

<a id="return-value"></a>

## Return Value

An initialized shader object.

## See Also

### Creating a Shader

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md): Write a fragment shader using the set of SpriteKit-exposed symbols, and supply it with custom data.
- [init(fileNamed:)](init%28filenamed_%29.md): Creates a new shader object by loading the source for a fragment shader from a file stored in the app’s bundle.
- [init(source:)](init%28source_%29.md): Initializes a new shader object using the specified source code.

# initWithSource:uniforms: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new shader object using the specified source and uniform data.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSString *) source uniforms:(NSArray<SKUniform *> *) uniforms;
```

## Parameters

- `source`: A string that holds the initial source for the shader.
- `uniforms`: A list of uniforms to add to the shader object.

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
- [initWithSource:](init%28source_%29.md): Initializes a new shader object using the specified source code.
