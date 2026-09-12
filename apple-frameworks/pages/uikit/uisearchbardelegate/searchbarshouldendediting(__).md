> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbarshouldendediting(_:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbarshouldendediting(_:))

# searchBarShouldEndEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate if editing should stop in the specified search bar.

## Declaration

```swift
optional func searchBarShouldEndEditing(_ searchBar: UISearchBar) -> Bool
```

## Parameters

- `searchBar`: The search bar that is being edited.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search text

- [searchBar(\_:textDidChange:)](searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBar(\_:shouldChangeTextIn:replacementText:)](searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing(\_:)](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing(\_:)](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarTextDidEndEditing(\_:)](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.

# searchBarShouldEndEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate if editing should stop in the specified search bar.

## Declaration

```objectivec
- (BOOL) searchBarShouldEndEditing:(UISearchBar *) searchBar;
```

## Parameters

- `searchBar`: The search bar that is being edited.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search text

- [searchBar:textDidChange:](searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBar:shouldChangeTextInRange:replacementText:](searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing:](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing:](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarTextDidEndEditing:](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.
