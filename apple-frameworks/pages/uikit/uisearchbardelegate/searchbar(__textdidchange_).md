> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbar(_:textdidchange:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbar(_:textdidchange:))

# searchBar(\_:textDidChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the user changed the search text.

## Declaration

```swift
optional func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String)
```

## Parameters

- `searchBar`: The search bar that is being edited.
- `searchText`: The current text in the search text field.

<a id="Discussion"></a>

## Discussion

This method is also invoked when text is cleared from the search text field.

## See Also

### Managing the search text

- [searchBar(\_:shouldChangeTextIn:replacementText:)](searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing(\_:)](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing(\_:)](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing(\_:)](searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing(\_:)](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.

# searchBar:textDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the user changed the search text.

## Declaration

```objectivec
- (void) searchBar:(UISearchBar *) searchBar textDidChange:(NSString *) searchText;
```

## Parameters

- `searchBar`: The search bar that is being edited.
- `searchText`: The current text in the search text field.

<a id="Discussion"></a>

## Discussion

This method is also invoked when text is cleared from the search text field.

## See Also

### Managing the search text

- [searchBar:shouldChangeTextInRange:replacementText:](searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing:](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing:](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing:](searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing:](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.
