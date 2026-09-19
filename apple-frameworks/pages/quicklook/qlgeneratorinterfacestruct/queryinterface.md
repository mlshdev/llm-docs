> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct/queryinterface

# QueryInterface (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```swift
var QueryInterface: ((UnsafeMutableRawPointer?, REFIID, UnsafeMutablePointer<LPVOID?>?) -> HRESULT)!
```

## See Also

### Creating a Quick Look Plug-In

- [init()](init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)

# QueryInterface (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```objectivec
int (*)(void *, CFUUIDBytes, void **) QueryInterface;
```

## See Also

### Creating a Quick Look Plug-In

- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)
