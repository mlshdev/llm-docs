> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(coder:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized object from data in a specified unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

## See Also

### Creating a document picker

- [init(forExporting:)](init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [init(forExporting:asCopy:)](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [init(forOpeningContentTypes:)](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [init(forOpeningContentTypes:asCopy:)](init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized object from data in a specified unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

## See Also

### Creating a document picker

- [initForExportingURLs:](init%28forexporting_%29.md): Creates and returns a document picker that can export the types of documents you specify.
- [initForExportingURLs:asCopy:](init%28forexporting_ascopy_%29.md): Creates and returns a document picker that can export or copy the types of documents you specify.
- [initForOpeningContentTypes:](init%28foropeningcontenttypes_%29.md): Creates and returns a document picker that can open the types of documents you specify.
- [initForOpeningContentTypes:asCopy:](init%28foropeningcontenttypes_ascopy_%29.md): Creates and returns a document picker that can open or copy the types of documents you specify.
