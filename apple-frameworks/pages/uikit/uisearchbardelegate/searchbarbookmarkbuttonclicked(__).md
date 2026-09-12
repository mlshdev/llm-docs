> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbarbookmarkbuttonclicked(_:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbarbookmarkbuttonclicked(_:))

# searchBarBookmarkButtonClicked(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the bookmark button was tapped.

## Declaration

```swift
optional func searchBarBookmarkButtonClicked(_ searchBar: UISearchBar)
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

There is no automatic bookmark support provided by the search bar. It’s the application’s responsibility to implement this method to perform some action if the bookmark button is tapped by the user.

## See Also

### Related Documentation

- [showsBookmarkButton](../uisearchbar/showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.

### Responding to clicks in search controls

- [searchBarCancelButtonClicked(\_:)](searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarSearchButtonClicked(\_:)](searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked(\_:)](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.

# searchBarBookmarkButtonClicked: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the bookmark button was tapped.

## Declaration

```objectivec
- (void) searchBarBookmarkButtonClicked:(UISearchBar *) searchBar;
```

## Parameters

- `searchBar`: The search bar that was tapped.

<a id="Discussion"></a>

## Discussion

There is no automatic bookmark support provided by the search bar. It’s the application’s responsibility to implement this method to perform some action if the bookmark button is tapped by the user.

## See Also

### Related Documentation

- [showsBookmarkButton](../uisearchbar/showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.

### Responding to clicks in search controls

- [searchBarCancelButtonClicked:](searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarSearchButtonClicked:](searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked:](searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.
