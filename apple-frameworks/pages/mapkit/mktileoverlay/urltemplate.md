> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mktileoverlay/urltemplate

# urlTemplate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The template for generating tile image URLs.

## Declaration

```swift
var urlTemplate: String? { get }
```

<a id="Discussion"></a>

## Discussion

You specify this string at initialization time.

## See Also

### Related Documentation

- [init(urlTemplate:)](init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Customizing the loading of tiles

- [url(forTilePath:)](url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTile(at:result:)](loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

# URLTemplate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The template for generating tile image URLs.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSString * URLTemplate;
```

<a id="Discussion"></a>

## Discussion

You specify this string at initialization time.

## See Also

### Related Documentation

- [initWithURLTemplate:](init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Customizing the loading of tiles

- [URLForTilePath:](url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTileAtPath:result:](loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.
