> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureenvmode](https://developer.apple.com/documentation/glkit/glktextureenvmode)

# GLKTextureEnvMode (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The mode used to combine the texture with other color components.

## Declaration

```swift
enum GLKTextureEnvMode
```

## Topics

### Constants

- [GLKTextureEnvMode.replace](glktextureenvmode/replace.md): The output color is set to the color fetched from the texture. The input color is ignored.
- [GLKTextureEnvMode.modulate](glktextureenvmode/modulate.md): The output color is calculated by multiplying the texture’s color by the input color.
- [GLKTextureEnvMode.decal](glktextureenvmode/decal.md): The output color is calculated by using the texture’s alpha component to blend the texture’s color with the input color.

### Initializers

- [init(rawValue:)](glktextureenvmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [GLKTextureTarget](glktexturetarget.md): The kind of texture pointed to by the property.

# GLKTextureEnvMode (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The mode used to combine the texture with other color components.

## Declaration

```objectivec
enum GLKTextureEnvMode : GLint;
```

## Topics

### Constants

- [GLKTextureEnvModeReplace](glktextureenvmode/replace.md): The output color is set to the color fetched from the texture. The input color is ignored.
- [GLKTextureEnvModeModulate](glktextureenvmode/modulate.md): The output color is calculated by multiplying the texture’s color by the input color.
- [GLKTextureEnvModeDecal](glktextureenvmode/decal.md): The output color is calculated by using the texture’s alpha component to blend the texture’s color with the input color.

## See Also

### Constants

- [GLKTextureTarget](glktexturetarget.md): The kind of texture pointed to by the property.
