> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uidocumentproperties/metadata

# metadata (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The document’s metadata.

## Declaration

```swift
@NSCopying var metadata: LPLinkMetadata { get set }
```

<a id="Discussion"></a>

## Discussion

If you initialize the document properties object using [init(url:)](init%28url_%29-zeio.md), UIKit generates this metadata automatically. Typically, you don’t need to access the value of this property directly because UIKit updates the metadata asynchronously to display the latest information in the document header.

If you initialize the document properties object using [init(metadata:)](init%28metadata_%29.md), you can use this property to manually set metadata if it requires an update.

## See Also

### Creating a document header

- [init(url:)](init%28url_%29-zeio.md): Creates a document properties object from document data at the URL you specify.
- [init(metadata:)](init%28metadata_%29.md): Creates a document properties object from the metadata object you specify.

# metadata (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The document’s metadata.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) LPLinkMetadata * metadata;
```

<a id="Discussion"></a>

## Discussion

If you initialize the document properties object using [initWithURL:](init%28url_%29-zeio.md), UIKit generates this metadata automatically. Typically, you don’t need to access the value of this property directly because UIKit updates the metadata asynchronously to display the latest information in the document header.

If you initialize the document properties object using [initWithMetadata:](init%28metadata_%29.md), you can use this property to manually set metadata if it requires an update.

## See Also

### Creating a document header

- [initWithURL:](init%28url_%29-zeio.md): Creates a document properties object from document data at the URL you specify.
- [initWithMetadata:](init%28metadata_%29.md): Creates a document properties object from the metadata object you specify.
