> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerwillendsearch(_:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerwillendsearch(_:))

# searchDisplayControllerWillEndSearch(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to end searching.

## Declaration

```swift
optional func searchDisplayControllerWillEndSearch(_ controller: UISearchDisplayController)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerWillBeginSearch(\_:)](searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerDidBeginSearch(\_:)](searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerDidEndSearch(\_:)](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.

# searchDisplayControllerWillEndSearch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to end searching.

## Declaration

```objectivec
- (void) searchDisplayControllerWillEndSearch:(UISearchDisplayController *) controller;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerWillBeginSearch:](searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerDidBeginSearch:](searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerDidEndSearch:](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.
