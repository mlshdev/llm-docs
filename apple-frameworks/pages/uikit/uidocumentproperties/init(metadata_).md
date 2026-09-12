> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentproperties/init(metadata:)](https://developer.apple.com/documentation/uikit/uidocumentproperties/init(metadata:))

# init(metadata:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a document properties object from the metadata object you specify.

## Declaration

```swift
init(metadata: LPLinkMetadata)
```

## Parameters

- `metadata`: Metadata about a document.

<a id="Discussion"></a>

## Discussion

If you don’t have a URL backing your document, create a metadata object manually to initialize a document properties object.

## See Also

### Creating a document header

- [init(url:)](init%28url_%29-zeio.md): Creates a document properties object from document data at the URL you specify.
- [metadata](metadata.md): The document’s metadata.

# initWithMetadata: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a document properties object from the metadata object you specify.

## Declaration

```objectivec
- (instancetype) initWithMetadata:(LPLinkMetadata *) metadata;
```

## Parameters

- `metadata`: Metadata about a document.

<a id="Discussion"></a>

## Discussion

If you don’t have a URL backing your document, create a metadata object manually to initialize a document properties object.

## See Also

### Creating a document header

- [initWithURL:](init%28url_%29-zeio.md): Creates a document properties object from document data at the URL you specify.
- [metadata](metadata.md): The document’s metadata.
