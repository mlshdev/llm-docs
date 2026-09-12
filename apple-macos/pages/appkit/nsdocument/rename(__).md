> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/rename(_:)](https://developer.apple.com/documentation/appkit/nsdocument/rename(_:))

# rename(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Renames the current document in response to the user choosing the Rename menu item.

## Declaration

```swift
@IBAction func rename(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action method of the Rename menu item in a document-based app. The default implementation of this method initiates a renaming session in a window created by the `[self windowForSheet]` message.

# renameDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Renames the current document in response to the user choosing the Rename menu item.

## Declaration

```objectivec
- (void) renameDocument:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action method of the Rename menu item in a document-based app. The default implementation of this method initiates a renaming session in a window created by the `[self windowForSheet]` message.
