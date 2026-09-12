> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:shouldreloadtableforsearchscope:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontroller(_:shouldreloadtableforsearchscope:))

# searchDisplayController(\_:shouldReloadTableForSearchScope:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate if the table view should be reloaded for a given scope.

## Declaration

```swift
optional func searchDisplayController(_ controller: UISearchDisplayController, shouldReloadTableForSearchScope searchOption: Int) -> Bool
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `searchOption`: The index of the selected scope button in the search bar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the display controller should reload the data in its table view, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, then the results table is reloaded as soon as the scope button selection changes.

You might implement this method if you want to perform an asynchronous search: you would initiate the search in this method, then return [false](https://developer.apple.com/documentation/swift/false), and reload the table when you have results.

## See Also

### Related Documentation

- [selectedScopeButtonIndex](../uisearchbar/selectedscopebuttonindex.md): The index of the selected scope button.

### Responding to changes in search criteria

- [searchDisplayController(\_:shouldReloadTableForSearch:)](searchdisplaycontroller%28__shouldreloadtableforsearch_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given search string.

# searchDisplayController:shouldReloadTableForSearchScope: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate if the table view should be reloaded for a given scope.

## Declaration

```objectivec
- (BOOL) searchDisplayController:(UISearchDisplayController *) controller shouldReloadTableForSearchScope:(NSInteger) searchOption;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.
- `searchOption`: The index of the selected scope button in the search bar.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the display controller should reload the data in its table view, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, then the results table is reloaded as soon as the scope button selection changes.

You might implement this method if you want to perform an asynchronous search: you would initiate the search in this method, then return [false](https://developer.apple.com/documentation/swift/false), and reload the table when you have results.

## See Also

### Related Documentation

- [selectedScopeButtonIndex](../uisearchbar/selectedscopebuttonindex.md): The index of the selected scope button.

### Responding to changes in search criteria

- [searchDisplayController:shouldReloadTableForSearchString:](searchdisplaycontroller%28__shouldreloadtableforsearch_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given search string.
