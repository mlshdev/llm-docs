> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/movetoubiquitycontainer(_:)](https://developer.apple.com/documentation/appkit/nsdocument/movetoubiquitycontainer(_:))

# moveToUbiquityContainer(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to the user’s iCloud storage.

## Declaration

```swift
@IBAction func moveToUbiquityContainer(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

AppKit calls this method automatically in response to the user selecting the Move to iCloud… menu item in a document-based app. The default implementation presents the user with an alert asking to confirm the move before invoking the [move(to:completionHandler:)](move%28to_completionhandler_%29.md) method with a URL in the app’s default ubiquity container.

See Moving the Document for descriptions of methods for moving a document to a local path.

## See Also

### Storing Documents in iCloud

- [usesUbiquitousStorage](usesubiquitousstorage.md): Returns whether the document object stores its contents in the user’s iCloud document storage.

# moveDocumentToUbiquityContainer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to the user’s iCloud storage.

## Declaration

```objectivec
- (void) moveDocumentToUbiquityContainer:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

AppKit calls this method automatically in response to the user selecting the Move to iCloud… menu item in a document-based app. The default implementation presents the user with an alert asking to confirm the move before invoking the [moveToURL:completionHandler:](move%28to_completionhandler_%29.md) method with a URL in the app’s default ubiquity container.

See Moving the Document for descriptions of methods for moving a document to a local path.

## See Also

### Storing Documents in iCloud

- [usesUbiquitousStorage](usesubiquitousstorage.md): Returns whether the document object stores its contents in the user’s iCloud document storage.
