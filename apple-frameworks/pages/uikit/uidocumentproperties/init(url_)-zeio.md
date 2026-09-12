> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentproperties/init(url:)-zeio](https://developer.apple.com/documentation/uikit/uidocumentproperties/init(url:)-zeio)

# init(url:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a document properties object from document data at the URL you specify.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: The URL that points to the document data.

<a id="Discussion"></a>

## Discussion

When you initialize a document properties object with a URL, UIKit automatically finds the corresponding metadata and stores it in the document properties object’s [metadata](metadata.md) property.

## See Also

### Creating a document header

- [init(metadata:)](init%28metadata_%29.md): Creates a document properties object from the metadata object you specify.
- [metadata](metadata.md): The document’s metadata.

# initWithURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a document properties object from document data at the URL you specify.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL that points to the document data.

<a id="Discussion"></a>

## Discussion

When you initialize a document properties object with a URL, UIKit automatically finds the corresponding metadata and stores it in the document properties object’s [metadata](metadata.md) property.

## See Also

### Creating a document header

- [initWithMetadata:](init%28metadata_%29.md): Creates a document properties object from the metadata object you specify.
- [metadata](metadata.md): The document’s metadata.
