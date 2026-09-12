> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/pasteandmatchstyle(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/pasteandmatchstyle(_:))

# pasteAndMatchStyle(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.

## Declaration

```swift
optional func pasteAndMatchStyle(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste command from an editing menu. Your implementation should read the data from the pasteboard and add the resulting content to your interface using the target’s current text style.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut(\_:)](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy(\_:)](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste(\_:)](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo(\_:)](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndSearch(\_:)](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete(\_:)](delete%28__%29.md): Removes the selected content from your interface.

# pasteAndMatchStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.

## Declaration

```objectivec
- (void) pasteAndMatchStyle:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste command from an editing menu. Your implementation should read the data from the pasteboard and add the resulting content to your interface using the target’s current text style.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut:](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy:](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste:](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo:](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndSearch:](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
- [delete:](delete%28__%29.md): Removes the selected content from your interface.
