> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate](https://developer.apple.com/documentation/uikit/uisearchbardelegate)

# UISearchBarDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A collection of optional methods that you implement to make a search bar control functional.

## Declaration

```swift
@MainActor protocol UISearchBarDelegate : UIBarPositioningDelegate
```

<a id="overview"></a>

## Overview

A [UISearchBar](uisearchbar.md) object provides the user interface for a search field on a bar, but it’s the application’s responsibility to implement the actions when buttons are tapped. At a minimum, the delegate needs to perform the actual search when text is entered in the text field.

## Topics

### Managing the search text

- [searchBar(\_:textDidChange:)](uisearchbardelegate/searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBar(\_:shouldChangeTextIn:replacementText:)](uisearchbardelegate/searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing(\_:)](uisearchbardelegate/searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing(\_:)](uisearchbardelegate/searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing(\_:)](uisearchbardelegate/searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing(\_:)](uisearchbardelegate/searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked(\_:)](uisearchbardelegate/searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarCancelButtonClicked(\_:)](uisearchbardelegate/searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarSearchButtonClicked(\_:)](uisearchbardelegate/searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked(\_:)](uisearchbardelegate/searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.

### Responding to scope button changes

- [searchBar(\_:selectedScopeButtonIndexDidChange:)](uisearchbardelegate/searchbar%28__selectedscopebuttonindexdidchange_%29.md): Tells the delegate that the scope button selection changed.

### Instance Methods

- [searchBar(\_:shouldChangeTextInRanges:replacementText:)](uisearchbardelegate/searchbar%28__shouldchangetextinranges_replacementtext_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Handling search bar interactions

- [delegate](uisearchbar/delegate.md): The search bar’s delegate object.

# UISearchBarDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A collection of optional methods that you implement to make a search bar control functional.

## Declaration

```objectivec
@protocol UISearchBarDelegate <UIBarPositioningDelegate>
```

<a id="overview"></a>

## Overview

A [UISearchBar](uisearchbar.md) object provides the user interface for a search field on a bar, but it’s the application’s responsibility to implement the actions when buttons are tapped. At a minimum, the delegate needs to perform the actual search when text is entered in the text field.

## Topics

### Managing the search text

- [searchBar:textDidChange:](uisearchbardelegate/searchbar%28__textdidchange_%29.md): Tells the delegate that the user changed the search text.
- [searchBar:shouldChangeTextInRange:replacementText:](uisearchbardelegate/searchbar%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Ask the delegate if text in a specified range should be replaced with given text.
- [searchBarShouldBeginEditing:](uisearchbardelegate/searchbarshouldbeginediting%28__%29.md): Asks the delegate if editing should begin in the specified search bar.
- [searchBarTextDidBeginEditing:](uisearchbardelegate/searchbartextdidbeginediting%28__%29.md): Tells the delegate when the user begins editing the search text.
- [searchBarShouldEndEditing:](uisearchbardelegate/searchbarshouldendediting%28__%29.md): Asks the delegate if editing should stop in the specified search bar.
- [searchBarTextDidEndEditing:](uisearchbardelegate/searchbartextdidendediting%28__%29.md): Tells the delegate that the user finished editing the search text.

### Responding to clicks in search controls

- [searchBarBookmarkButtonClicked:](uisearchbardelegate/searchbarbookmarkbuttonclicked%28__%29.md): Tells the delegate that the bookmark button was tapped.
- [searchBarCancelButtonClicked:](uisearchbardelegate/searchbarcancelbuttonclicked%28__%29.md): Tells the delegate that the cancel button was tapped.
- [searchBarSearchButtonClicked:](uisearchbardelegate/searchbarsearchbuttonclicked%28__%29.md): Tells the delegate that the search button was tapped.
- [searchBarResultsListButtonClicked:](uisearchbardelegate/searchbarresultslistbuttonclicked%28__%29.md): Tells the delegate that the search results list button was tapped.

### Responding to scope button changes

- [searchBar:selectedScopeButtonIndexDidChange:](uisearchbardelegate/searchbar%28__selectedscopebuttonindexdidchange_%29.md): Tells the delegate that the scope button selection changed.

### Instance Methods

- [searchBar:shouldChangeTextInRanges:replacementText:](uisearchbardelegate/searchbar%28__shouldchangetextinranges_replacementtext_%29.md)

## Relationships

### Inherits From

- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Handling search bar interactions

- [delegate](uisearchbar/delegate.md): The search bar’s delegate object.
