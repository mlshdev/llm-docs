> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbarsearchbuttonclicked(_:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbarsearchbuttonclicked(_:))

# searchBarSearchButtonClicked(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the search button was tapped.

## Declaration

```swift
optional func searchBarSearchButtonClicked(_ searchBar: UISearchBar)
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

You should implement this method to begin the search. Use the [text](../uisearchbar/text.md) property of the search bar to get the text. You can also send [becomeFirstResponder()](../uiresponder/becomefirstresponder%28%29.md) to the search bar to begin editing programmatically.

## See Also

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked(\_:)](searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarCancelButtonClicked(\_:)](searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarResultsListButtonClicked(\_:)](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.

# searchBarSearchButtonClicked: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the search button was tapped.

## Declaration

```objectivec
- (void) searchBarSearchButtonClicked:(UISearchBar *) searchBar;
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

You should implement this method to begin the search. Use the [text](../uisearchbar/text.md) property of the search bar to get the text. You can also send [becomeFirstResponder](../uiresponder/becomefirstresponder%28%29.md) to the search bar to begin editing programmatically.

## See Also

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked:](searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarCancelButtonClicked:](searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarResultsListButtonClicked:](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.
