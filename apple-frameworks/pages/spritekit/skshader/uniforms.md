> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/uniforms](https://developer.apple.com/documentation/spritekit/skshader/uniforms)

# uniforms (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The list of uniforms associated with the shader.

## Declaration

```swift
var uniforms: [SKUniform] { get set }
```

## Mentioned In

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md)

<a id="Discussion"></a>

## Discussion

This property is not read-only, so you can also use it to provide all of the uniforms in a single operation. Each of the uniforms should be uniquely named.

## See Also

### Providing Uniform Data to a Shader

- [addUniform(\_:)](adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed(\_:)](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniformNamed(\_:)](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.

# uniforms (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The list of uniforms associated with the shader.

## Declaration

```objectivec
@property (copy) NSArray<SKUniform *> * uniforms;
```

## Mentioned In

- [Creating a Custom Fragment Shader](../creating-a-custom-fragment-shader.md)

<a id="Discussion"></a>

## Discussion

This property is not read-only, so you can also use it to provide all of the uniforms in a single operation. Each of the uniforms should be uniquely named.

## See Also

### Providing Uniform Data to a Shader

- [addUniform:](adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed:](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniformNamed:](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.
