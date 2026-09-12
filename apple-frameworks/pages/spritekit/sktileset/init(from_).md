> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset/init(from:)](https://developer.apple.com/documentation/spritekit/sktileset/init(from:))

# init(from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a tile set from a URL to an archived .sks file.

## Declaration

```swift
convenience init?(from url: URL)
```

## Parameters

- `url`: The URL of a tile set file.

<a id="return-value"></a>

## Return Value

A new tile set or `nil` if the URL doesn’t point to a valid tile set file.

## See Also

### Creating a Tile Set from a File

- [init(named:)](init%28named_%29.md): Initializes a tile set by searching the app bundle for an archived `.sks` file by name.

# tileSetFromURL: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a tile set from a URL to an archived .sks file.

## Declaration

```objectivec
+ (instancetype) tileSetFromURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of a tile set file.

<a id="return-value"></a>

## Return Value

A new tile set or `nil` if the URL doesn’t point to a valid tile set file.

## See Also

### Creating a Tile Set from a File

- [tileSetNamed:](init%28named_%29.md): Initializes a tile set by searching the app bundle for an archived `.sks` file by name.
