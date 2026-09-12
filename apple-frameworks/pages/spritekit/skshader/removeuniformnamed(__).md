> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/removeuniformnamed(_:)](https://developer.apple.com/documentation/spritekit/skshader/removeuniformnamed(_:))

# removeUniformNamed(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes a uniform from the shader.

## Declaration

```swift
func removeUniformNamed(_ name: String)
```

## Parameters

- `name`: The name of the uniform to remove.

<a id="Discussion"></a>

## Discussion

If a uniform with that name does not exist in the shader, nothing happens.

## See Also

### Providing Uniform Data to a Shader

- [addUniform(\_:)](adduniform%28__%29.md): Adds a uniform to the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed(\_:)](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.

# removeUniformNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes a uniform from the shader.

## Declaration

```objectivec
- (void) removeUniformNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the uniform to remove.

<a id="Discussion"></a>

## Discussion

If a uniform with that name does not exist in the shader, nothing happens.

## See Also

### Providing Uniform Data to a Shader

- [addUniform:](adduniform%28__%29.md): Adds a uniform to the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.
- [uniformNamed:](uniformnamed%28__%29.md): Returns the uniform object corresponding to a particular uniform variable.
