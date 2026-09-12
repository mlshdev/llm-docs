> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbar(_:selectedscopebuttonindexdidchange:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbar(_:selectedscopebuttonindexdidchange:))

# searchBar(\_:selectedScopeButtonIndexDidChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scope button selection changed.

## Declaration

```swift
optional func searchBar(_ searchBar: UISearchBar, selectedScopeButtonIndexDidChange selectedScope: Int)
```

## Parameters

- `searchBar`: The search bar that was tapped.
- `selectedScope`: The index of the selected scope button (see [selectedScopeButtonIndex](../uisearchbar/selectedscopebuttonindex.md)).

# searchBar:selectedScopeButtonIndexDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the scope button selection changed.

## Declaration

```objectivec
- (void) searchBar:(UISearchBar *) searchBar selectedScopeButtonIndexDidChange:(NSInteger) selectedScope;
```

## Parameters

- `searchBar`: The search bar that was tapped.
- `selectedScope`: The index of the selected scope button (see [selectedScopeButtonIndex](../uisearchbar/selectedscopebuttonindex.md)).
