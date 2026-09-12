> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/update()](https://developer.apple.com/documentation/modelio/mdlskycubetexture/update())

# update() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates new texel data matching the current sky parameters.

## Declaration

```swift
func update()
```

<a id="Discussion"></a>

## Discussion

After you first create a sky cube texture, Model I/O does not generate texture data until you use one of the [MDLTexture](../mdltexture.md) methods listed inAccessing Texture Data. If you then change the sky simulation or rendering parameters, call this method to generate new texture data.

# updateTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates new texel data matching the current sky parameters.

## Declaration

```objectivec
- (void) updateTexture;
```

<a id="Discussion"></a>

## Discussion

After you first create a sky cube texture, Model I/O does not generate texture data until you use one of the [MDLTexture](../mdltexture.md) methods listed inAccessing Texture Data. If you then change the sky simulation or rendering parameters, call this method to generate new texture data.
