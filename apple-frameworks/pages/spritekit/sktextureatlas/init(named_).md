> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/init(named:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/init(named:))

# init(named:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a texture atlas from data stored in the app bundle.

## Declaration

```swift
convenience init(named name: String)
```

## Parameters

- `name`: The name of the texture atlas, without the `.atlas` extension.

<a id="return-value"></a>

## Return Value

A new texture atlas object.

<a id="Discussion"></a>

## Discussion

If the texture atlas cannot be found, an exception is thrown.

## See Also

### Creating a Texture Atlas Programmatically

- [init(dictionary:)](init%28dictionary_%29.md): Creates a texture atlas from a set of image files.

# atlasNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a texture atlas from data stored in the app bundle.

## Declaration

```objectivec
+ (instancetype) atlasNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the texture atlas, without the `.atlas` extension.

<a id="return-value"></a>

## Return Value

A new texture atlas object.

<a id="Discussion"></a>

## Discussion

If the texture atlas cannot be found, an exception is thrown.

## See Also

### Creating a Texture Atlas Programmatically

- [atlasWithDictionary:](init%28dictionary_%29.md): Creates a texture atlas from a set of image files.
