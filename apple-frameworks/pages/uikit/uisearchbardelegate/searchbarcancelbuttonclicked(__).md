> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbarcancelbuttonclicked(_:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbarcancelbuttonclicked(_:))

# searchBarCancelButtonClicked(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the cancel button was tapped.

## Declaration

```swift
optional func searchBarCancelButtonClicked(_ searchBar: UISearchBar)
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

Typically, you implement this method to dismiss the search bar.

## See Also

### Related Documentation

- [showsCancelButton](../uisearchbar/showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked(\_:)](searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarSearchButtonClicked(\_:)](searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked(\_:)](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.

# searchBarCancelButtonClicked: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the cancel button was tapped.

## Declaration

```objectivec
- (void) searchBarCancelButtonClicked:(UISearchBar *) searchBar;
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

Typically, you implement this method to dismiss the search bar.

## See Also

### Related Documentation

- [showsCancelButton](../uisearchbar/showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked:](searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarSearchButtonClicked:](searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked:](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.
