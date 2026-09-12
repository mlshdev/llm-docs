> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(foropeningcontenttypes:ascopy:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(foropeningcontenttypes:ascopy:))

# init(forOpeningContentTypes:asCopy:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates and returns a document picker that can open or copy the types of documents you specify.

## Declaration

```swift
init(forOpeningContentTypes contentTypes: [UTType], asCopy: Bool)
```

## Parameters

- `contentTypes`: An array of uniform type identifiers for the document picker to display. For more information, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).
- `asCopy`: A Boolean value that indicates whether the document picker copies the selected document.

## See Also

### Creating a document picker

- [init(coder:)](init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [init(forExporting:)](init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [init(forExporting:asCopy:)](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [init(forOpeningContentTypes:)](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.

# initForOpeningContentTypes:asCopy: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates and returns a document picker that can open or copy the types of documents you specify.

## Declaration

```objectivec
- (instancetype) initForOpeningContentTypes:(NSArray<UTType *> *) contentTypes asCopy:(BOOL) asCopy;
```

## Parameters

- `contentTypes`: An array of uniform type identifiers for the document picker to display. For more information, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).
- `asCopy`: A Boolean value that indicates whether the document picker copies the selected document.

## See Also

### Creating a document picker

- [initWithCoder:](init%28coder_%29.md): Returns an initialized object from data in a specified unarchiver.
- [initForExportingURLs:](init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [initForExportingURLs:asCopy:](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [initForOpeningContentTypes:](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
