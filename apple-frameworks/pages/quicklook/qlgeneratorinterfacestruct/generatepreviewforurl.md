> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct/generatepreviewforurl

# GeneratePreviewForURL (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```swift
var GeneratePreviewForURL: ((UnsafeMutableRawPointer?, QLPreviewRequest?, CFURL?, CFString?, CFDictionary?) -> OSStatus)!
```

## See Also

### Creating a Quick Look Plug-In

- [init()](init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)

# GeneratePreviewForURL (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```objectivec
int (*)(void *, struct __QLPreviewRequest *, const struct __CFURL *, const struct __CFString *, const struct __CFDictionary *) GeneratePreviewForURL;
```

## See Also

### Creating a Quick Look Plug-In

- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)
