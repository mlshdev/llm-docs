> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchcontrollerdelegate/searchcontroller(_:didchangefrom:)

# searchController(\_:didChangeFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Notifies the delegate after the search bar placement changes.

## Declaration

```swift
optional func searchController(_ searchController: UISearchController, didChangeFrom previousPlacement: UINavigationItem.SearchBarPlacement)
```

## Parameters

- `searchController`: The search controller associated with the search bar.
- `previousPlacement`: The previous search bar placement.

<a id="Discussion"></a>

## Discussion

The system calls this method after a search bar placement change occurs. Implement this method if you need to make any custom changes to your search suggestions UI according to the previous search bar placement.

The system calls this method after [searchController(\_:willChangeTo:)](searchcontroller%28__willchangeto_%29.md).

## See Also

### Responding to search bar placement updates

- [searchController(\_:willChangeTo:)](searchcontroller%28__willchangeto_%29.md): Notifies the delegate before the search bar placement changes.

# searchController:didChangeFromSearchBarPlacement: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Notifies the delegate after the search bar placement changes.

## Declaration

```objectivec
- (void) searchController:(UISearchController *) searchController didChangeFromSearchBarPlacement:(UINavigationItemSearchBarPlacement) previousPlacement;
```

## Parameters

- `searchController`: The search controller associated with the search bar.
- `previousPlacement`: The previous search bar placement.

<a id="Discussion"></a>

## Discussion

The system calls this method after a search bar placement change occurs. Implement this method if you need to make any custom changes to your search suggestions UI according to the previous search bar placement.

The system calls this method after [searchController:willChangeToSearchBarPlacement:](searchcontroller%28__willchangeto_%29.md).

## See Also

### Responding to search bar placement updates

- [searchController:willChangeToSearchBarPlacement:](searchcontroller%28__willchangeto_%29.md): Notifies the delegate before the search bar placement changes.
