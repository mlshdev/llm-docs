> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbar(_:shouldchangetextin:replacementtext:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbar(_:shouldchangetextin:replacementtext:))

# searchBar(\_:shouldChangeTextIn:replacementText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Ask the delegate if text in a specified range should be replaced with given text.

## Declaration

```swift
optional func searchBar(_ searchBar: UISearchBar, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool
```

## Parameters

- `searchBar`: The search bar that is being edited.
- `range`: The range of the text to be changed.
- `text`: The text to replace existing text in `range`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if text in `range` should be replaced by `text`, otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search text

- [searchBar(\_:textDidChange:)](searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBarShouldBeginEditing(\_:)](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing(\_:)](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing(\_:)](searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing(\_:)](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.

# searchBar:shouldChangeTextInRange:replacementText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Ask the delegate if text in a specified range should be replaced with given text.

## Declaration

```objectivec
- (BOOL) searchBar:(UISearchBar *) searchBar shouldChangeTextInRange:(NSRange) range replacementText:(NSString *) text;
```

## Parameters

- `searchBar`: The search bar that is being edited.
- `range`: The range of the text to be changed.
- `text`: The text to replace existing text in `range`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if text in `range` should be replaced by `text`, otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search text

- [searchBar:textDidChange:](searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBarShouldBeginEditing:](searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing:](searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing:](searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing:](searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.
