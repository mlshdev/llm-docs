> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct/generatethumbnailforurl

# GenerateThumbnailForURL (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```swift
var GenerateThumbnailForURL: ((UnsafeMutableRawPointer?, QLThumbnailRequest?, CFURL?, CFString?, CFDictionary?, CGSize) -> OSStatus)!
```

## See Also

### Creating a Quick Look Plug-In

- [init()](init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)

# GenerateThumbnailForURL (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```objectivec
int (*)(void *, struct __QLThumbnailRequest *, const struct __CFURL *, const struct __CFString *, const struct __CFDictionary *, struct CGSize) GenerateThumbnailForURL;
```

## See Also

### Creating a Quick Look Plug-In

- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)
