> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/delete(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/delete(_:))

# delete(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the selected content from your interface.

## Declaration

```swift
optional func delete(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Delete command from an editing menu. Your implementation should remove the selected content from your interface.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut(\_:)](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy(\_:)](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste(\_:)](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo(\_:)](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle(\_:)](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch(\_:)](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.

# delete: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the selected content from your interface.

## Declaration

```objectivec
- (void) delete:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Delete command from an editing menu. Your implementation should remove the selected content from your interface.

## See Also

### Handling copy, cut, paste, and delete commands

- [cut:](cut%28__%29.md): Removes the selected content and writes the data for it to the pasteboard.
- [copy:](copy%28__%29.md): Copies the selected content to the pasteboard.
- [paste:](paste%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface.
- [pasteAndGo:](pasteandgo%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and navigates to the entity it references.
- [pasteAndMatchStyle:](pasteandmatchstyle%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface using the text style of the target.
- [pasteAndSearch:](pasteandsearch%28__%29.md): Pastes the current contents of the pasteboard into your app’s interface and performs a search.
