> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlgeneratorinterfacestruct/release](https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct/release)

# Release (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```swift
var Release: ((UnsafeMutableRawPointer?) -> ULONG)!
```

## See Also

### Creating a Quick Look Plug-In

- [init()](init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)

# Release (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

## Declaration

```objectivec
unsigned int (*)(void *) Release;
```

## See Also

### Creating a Quick Look Plug-In

- [QueryInterface](queryinterface.md)
- [AddRef](addref.md)
- [GenerateThumbnailForURL](generatethumbnailforurl.md)
- [CancelThumbnailGeneration](cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](generatepreviewforurl.md)
- [CancelPreviewGeneration](cancelpreviewgeneration.md)
