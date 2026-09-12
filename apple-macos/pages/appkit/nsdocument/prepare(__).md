> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/prepare(_:)](https://developer.apple.com/documentation/appkit/nsdocument/prepare(_:))

# prepare(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Perform any custom setup associated with a sharing service picker.

## Declaration

```swift
func prepare(_ sharingServicePicker: NSSharingServicePicker)
```

## Parameters

- `sharingServicePicker`: The sharing service picker the system is about to display.

<a id="Discussion"></a>

## Discussion

Override this method, as needed, and use it to configure the sharing service picker before AppKit displays it. The default implementation of this method does nothing. You might customize the contents of the share menu or provide a custom delegate for the chosen sharing service. You can get the default sharing menu item by calling [standardShareMenuItem()](../nsdocumentcontroller/standardsharemenuitem%28%29.md) on the current document controller.

## See Also

### Sharing the Document

- [allowsDocumentSharing](allowsdocumentsharing.md): A Boolean value that indicates whether the document is shareable from the standard Share menu.
- [share(with:completionHandler:)](share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.

# prepareSharingServicePicker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Perform any custom setup associated with a sharing service picker.

## Declaration

```objectivec
- (void) prepareSharingServicePicker:(NSSharingServicePicker *) sharingServicePicker;
```

## Parameters

- `sharingServicePicker`: The sharing service picker the system is about to display.

<a id="Discussion"></a>

## Discussion

Override this method, as needed, and use it to configure the sharing service picker before AppKit displays it. The default implementation of this method does nothing. You might customize the contents of the share menu or provide a custom delegate for the chosen sharing service. You can get the default sharing menu item by calling [standardShareMenuItem](../nsdocumentcontroller/standardsharemenuitem%28%29.md) on the current document controller.

## See Also

### Sharing the Document

- [allowsDocumentSharing](allowsdocumentsharing.md): A Boolean value that indicates whether the document is shareable from the standard Share menu.
- [shareDocumentWithSharingService:completionHandler:](share%28with_completionhandler_%29.md): Share the document’s file using the specified sharing service.
