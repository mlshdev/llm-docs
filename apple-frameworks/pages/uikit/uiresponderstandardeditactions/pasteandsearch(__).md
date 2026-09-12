> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/pasteandsearch(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/pasteandsearch(_:))

# pasteAndSearch(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface and performs a search.

## Declaration

```swift
optional func pasteAndSearch(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste and Search command from an editing menu. Your implementation should read the data from the pasteboard and begin a search based on the content.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut(\_:)](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy(\_:)](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste(\_:)](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo(\_:)](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle(\_:)](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [delete(\_:)](delete%28__%29.md): Removes the selected content from your interface.

# pasteAndSearch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Pastes the current contents of the pasteboard into your app’s interface and performs a search.

## Declaration

```objectivec
- (void) pasteAndSearch:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Paste and Search command from an editing menu. Your implementation should read the data from the pasteboard and begin a search based on the content.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut:](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy:](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste:](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo:](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle:](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [delete:](delete%28__%29.md): Removes the selected content from your interface.
