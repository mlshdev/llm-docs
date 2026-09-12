> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/paste(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/paste(_:))

# paste(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface.

## Declaration

```swift
optional func paste(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste command from an editing menu. Your implementation should read the data from the pasteboard and add the resulting content to your interface.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut(\_:)](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy(\_:)](copy%28__%29.md): Copies the selected content to the pasteboard.
- [pasteAndGo(\_:)](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle(\_:)](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch(\_:)](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete(\_:)](delete%28__%29.md): Removes the selected content from your interface.

# paste: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface.

## Declaration

```objectivec
- (void) paste:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste command from an editing menu. Your implementation should read the data from the pasteboard and add the resulting content to your interface.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut:](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy:](copy%28__%29.md): Copies the selected content to the pasteboard.
- [pasteAndGo:](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle:](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch:](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete:](delete%28__%29.md): Removes the selected content from your interface.
