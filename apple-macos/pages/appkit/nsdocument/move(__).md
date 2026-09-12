> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/move(_:)](https://developer.apple.com/documentation/appkit/nsdocument/move(_:))

# move(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to a new location in response to the user choosing the Move To… menu item.

## Declaration

```swift
@IBAction func move(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action method of the Move To… menu item in a document-based app. By default, this method invokes the [move(completionHandler:)](move%28completionhandler_%29.md) method, passing `nil` as a parameter value.

## See Also

### Moving the Document

- [move(completionHandler:)](move%28completionhandler_%29.md): Moves the document to a user-selected location.
- [move(to:completionHandler:)](move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.

# moveDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Moves the document to a new location in response to the user choosing the Move To… menu item.

## Declaration

```objectivec
- (void) moveDocument:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action method of the Move To… menu item in a document-based app. By default, this method invokes the [moveDocumentWithCompletionHandler:](move%28completionhandler_%29.md) method, passing `nil` as a parameter value.

## See Also

### Moving the Document

- [moveDocumentWithCompletionHandler:](move%28completionhandler_%29.md): Moves the document to a user-selected location.
- [moveToURL:completionHandler:](move%28to_completionhandler_%29.md): Moves the document’s file to the given URL.
