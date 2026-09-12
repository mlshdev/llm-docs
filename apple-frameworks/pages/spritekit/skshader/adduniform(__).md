> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/adduniform(_:)](https://developer.apple.com/documentation/spritekit/skshader/adduniform(_:))

# addUniform(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a uniform to the shader.

## Declaration

```swift
func addUniform(_ uniform: SKUniform)
```

## Parameters

- `uniform`: The new uniform object to add. The uniform object’s name must not already be in use by another uniform attached to the shader.

<a id="Discussion"></a>

## Discussion

The uniform variable is automatically accessible inside your shader; do not add a declaration for it in your shader’s source code. The uniform *must* be accessed in the fragment shader.

## See Also

### Providing Uniform Data to a Shader

- [removeUniformNamed(\_:)](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed(\_:)](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.

# addUniform: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds a uniform to the shader.

## Declaration

```objectivec
- (void) addUniform:(SKUniform *) uniform;
```

## Parameters

- `uniform`: The new uniform object to add. The uniform object’s name must not already be in use by another uniform attached to the shader.

<a id="Discussion"></a>

## Discussion

The uniform variable is automatically accessible inside your shader; do not add a declaration for it in your shader’s source code. The uniform *must* be accessed in the fragment shader.

## See Also

### Providing Uniform Data to a Shader

- [removeUniformNamed:](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed:](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.
