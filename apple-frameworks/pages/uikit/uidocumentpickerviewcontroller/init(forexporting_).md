> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(forexporting:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(forexporting:))

# init(forExporting:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates and returns a document picker that can export the types of documents you specify.

## Declaration

```swift
convenience init(forExporting urls: [URL])
```

## Parameters

- `urls`: An array of documents that the document picker exports.

## See Also

### Creating a document picker

- [init(coder:)](init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [init(forExporting:asCopy:)](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [init(forOpeningContentTypes:)](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [init(forOpeningContentTypes:asCopy:)](init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.

# initForExportingURLs: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates and returns a document picker that can export the types of documents you specify.

## Declaration

```objectivec
- (instancetype) initForExportingURLs:(NSArray<NSURL *> *) urls;
```

## Parameters

- `urls`: An array of documents that the document picker exports.

## See Also

### Creating a document picker

- [initWithCoder:](init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [initForExportingURLs:asCopy:](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [initForOpeningContentTypes:](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [initForOpeningContentTypes:asCopy:](init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.
