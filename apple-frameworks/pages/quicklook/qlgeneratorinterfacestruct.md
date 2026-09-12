> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlgeneratorinterfacestruct](https://developer.apple.com/documentation/quicklook/qlgeneratorinterfacestruct)

# QLGeneratorInterfaceStruct (Swift)

**Framework:** Quick Look  
**Kind:** Structure  
**Availability:** macOS 10.5+

An opaque reference that provides callbacks that the platform uses to interface with a Quick Look plug-in.

## Declaration

```swift
struct QLGeneratorInterfaceStruct
```

## Topics

### Creating a Quick Look Plug-In

- [init()](qlgeneratorinterfacestruct/init%28%29.md): Creates the interface structure that the platform uses to interface with a Quick Look plug-in.
- [QueryInterface](qlgeneratorinterfacestruct/queryinterface.md)
- [AddRef](qlgeneratorinterfacestruct/addref.md)
- [Release](qlgeneratorinterfacestruct/release.md)
- [GenerateThumbnailForURL](qlgeneratorinterfacestruct/generatethumbnailforurl.md)
- [CancelThumbnailGeneration](qlgeneratorinterfacestruct/cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](qlgeneratorinterfacestruct/generatepreviewforurl.md)
- [CancelPreviewGeneration](qlgeneratorinterfacestruct/cancelpreviewgeneration.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# QLGeneratorInterfaceStruct (Objective-C)

**Framework:** Quick Look  
**Kind:** Structure  
**Availability:** macOS 10.5+

An opaque reference that provides callbacks that the platform uses to interface with a Quick Look plug-in.

## Declaration

```objectivec
typedef struct { ... } QLGeneratorInterfaceStruct;
```

## Topics

### Creating a Quick Look Plug-In

- [QueryInterface](qlgeneratorinterfacestruct/queryinterface.md)
- [AddRef](qlgeneratorinterfacestruct/addref.md)
- [Release](qlgeneratorinterfacestruct/release.md)
- [GenerateThumbnailForURL](qlgeneratorinterfacestruct/generatethumbnailforurl.md)
- [CancelThumbnailGeneration](qlgeneratorinterfacestruct/cancelthumbnailgeneration.md)
- [GeneratePreviewForURL](qlgeneratorinterfacestruct/generatepreviewforurl.md)
- [CancelPreviewGeneration](qlgeneratorinterfacestruct/cancelpreviewgeneration.md)
