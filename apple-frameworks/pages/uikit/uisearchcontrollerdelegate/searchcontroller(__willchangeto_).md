> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate/searchcontroller(_:willchangeto:)

# searchController(\_:willChangeTo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Notifies the delegate before the search bar placement changes.

## Declaration

```swift
optional func searchController(_ searchController: UISearchController, willChangeTo newPlacement: UINavigationItem.SearchBarPlacement)
```

## Parameters

- `searchController`: The search controller associated with the search bar.
- `newPlacement`: The new search bar placement.

<a id="Discussion"></a>

## Discussion

The system calls this method before a search bar placement change occurs, such as in response to a layout change that alters the amount of available space in the navigation bar. Implement this method if you need to make any custom changes to your search suggestions UI according to the new search bar placement.

The system calls this method before [searchController(\_:didChangeFrom:)](searchcontroller%28__didchangefrom_%29.md).

## See Also

### Responding to search bar placement updates

- [searchController(\_:didChangeFrom:)](searchcontroller%28__didchangefrom_%29.md): Notifies the delegate after the search bar placement changes.

# searchController:willChangeToSearchBarPlacement: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Notifies the delegate before the search bar placement changes.

## Declaration

```objectivec
- (void) searchController:(UISearchController *) searchController willChangeToSearchBarPlacement:(UINavigationItemSearchBarPlacement) newPlacement;
```

## Parameters

- `searchController`: The search controller associated with the search bar.
- `newPlacement`: The new search bar placement.

<a id="Discussion"></a>

## Discussion

The system calls this method before a search bar placement change occurs, such as in response to a layout change that alters the amount of available space in the navigation bar. Implement this method if you need to make any custom changes to your search suggestions UI according to the new search bar placement.

The system calls this method before [searchController:didChangeFromSearchBarPlacement:](searchcontroller%28__didchangefrom_%29.md).

## See Also

### Responding to search bar placement updates

- [searchController:didChangeFromSearchBarPlacement:](searchcontroller%28__didchangefrom_%29.md): Notifies the delegate after the search bar placement changes.
