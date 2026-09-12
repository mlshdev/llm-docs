> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset/init(named:)](https://developer.apple.com/documentation/spritekit/sktileset/init(named:))

# init(named:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a tile set by searching the app bundle for an archived `.sks` file by name.

## Declaration

```swift
convenience init?(named name: String)
```

## Parameters

- `name`: The name of the tile set to search for.

<a id="return-value"></a>

## Return Value

A new tile set or `nil` if a tile set with a matching name cannot be found.

## See Also

### Creating a Tile Set from a File

- [init(from:)](init%28from_%29.md): Initializes a tile set from a URL to an archived .sks file.

# tileSetNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a tile set by searching the app bundle for an archived `.sks` file by name.

## Declaration

```objectivec
+ (instancetype) tileSetNamed:(NSString *) name;
```

## Parameters

- `name`: The name of the tile set to search for.

<a id="return-value"></a>

## Return Value

A new tile set or `nil` if a tile set with a matching name cannot be found.

## See Also

### Creating a Tile Set from a File

- [tileSetFromURL:](init%28from_%29.md): Initializes a tile set from a URL to an archived .sks file.
