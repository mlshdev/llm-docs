> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/init(foropening:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/init(foropening:))

# init(forOpening:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initializes and returns a document browser view controller that can open the specified file types.

## Declaration

```swift
init(forOpening contentTypes: [UTType]?)
```

## Parameters

- `contentTypes`: An array of uniform type identifiers. If `nil`, the browser uses the document types that the [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) key specifies in the app’s `Info.plist` file.

  For detailed instructions about setting the `CFBundleDocumentTypes` key, see [Setting up a document browser app](../setting-up-a-document-browser-app.md).

  For more information about type identifiers, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

## See Also

### Creating a document browser

- [Adding a document browser to your app](../adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.

# initForOpeningContentTypes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initializes and returns a document browser view controller that can open the specified file types.

## Declaration

```objectivec
- (instancetype) initForOpeningContentTypes:(NSArray<UTType *> *) contentTypes;
```

## Parameters

- `contentTypes`: An array of uniform type identifiers. If `nil`, the browser uses the document types that the [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) key specifies in the app’s `Info.plist` file.

  For detailed instructions about setting the `CFBundleDocumentTypes` key, see [Setting up a document browser app](../setting-up-a-document-browser-app.md).

  For more information about type identifiers, see [Uniform Type Identifiers](../../uniformtypeidentifiers.md).

## See Also

### Creating a document browser

- [Adding a document browser to your app](../adding-a-document-browser-to-your-app.md): Give people access to their local or remote documents from within your app.
