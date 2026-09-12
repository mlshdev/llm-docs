> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlgeneratorinterfacestruct/cancelthumbnailgeneration](https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct/cancelthumbnailgeneration)

# CancelThumbnailGeneration (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```swift
var CancelThumbnailGeneration: ((UnsafeMutableRawPointer?, QLThumbnailRequest?) -> Void)!
```

## See Also

### Creating a Quick Look Plug-In

- [init()](init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)

# CancelThumbnailGeneration (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```objectivec
void (*)(void *, struct __QLThumbnailRequest *) CancelThumbnailGeneration;
```

## See Also

### Creating a Quick Look Plug-In

- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [Release](release.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)
