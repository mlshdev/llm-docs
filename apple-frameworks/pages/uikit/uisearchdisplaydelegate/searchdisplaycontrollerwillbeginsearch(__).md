> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerwillbeginsearch(_:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerwillbeginsearch(_:))

# searchDisplayControllerWillBeginSearch(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to begin searching.

## Declaration

```swift
optional func searchDisplayControllerWillBeginSearch(_ controller: UISearchDisplayController)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerDidBeginSearch(\_:)](searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerWillEndSearch(\_:)](searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch(\_:)](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.

# searchDisplayControllerWillBeginSearch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller is about to begin searching.

## Declaration

```objectivec
- (void) searchDisplayControllerWillBeginSearch:(UISearchDisplayController *) controller;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerDidBeginSearch:](searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerWillEndSearch:](searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch:](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.
