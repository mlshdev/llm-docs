> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshader/uniformnamed(_:)](https://developer.apple.com/documentation/spritekit/skshader/uniformnamed(_:))

# uniformNamed(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the uniform object corresponding to a particular uniform variable.

## Declaration

```swift
func uniformNamed(_ name: String) -> SKUniform?
```

## Parameters

- `name`: The name of the uniform to search for.

<a id="return-value"></a>

## Return Value

The uniform object corresponding to the name, or `nil` if that uniform cannot be found.

## See Also

### Providing Uniform Data to a Shader

- [addUniform(\_:)](adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed(\_:)](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.

# uniformNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the uniform object corresponding to a particular uniform variable.

## Declaration

```objectivec
- (SKUniform *) uniformNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the uniform to search for.

<a id="return-value"></a>

## Return Value

The uniform object corresponding to the name, or `nil` if that uniform cannot be found.

## See Also

### Providing Uniform Data to a Shader

- [addUniform:](adduniform%28__%29.md): Adds a uniform to the shader.
- [removeUniformNamed:](removeuniformnamed%28__%29.md): Removes a uniform from the shader.
- [uniforms](uniforms.md): The list of uniforms associated with the shader.
