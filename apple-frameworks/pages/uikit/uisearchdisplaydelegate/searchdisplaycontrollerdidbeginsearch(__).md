> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerdidbeginsearch(_:)](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate/searchdisplaycontrollerdidbeginsearch(_:))

# searchDisplayControllerDidBeginSearch(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller has started searching.

## Declaration

```swift
optional func searchDisplayControllerDidBeginSearch(_ controller: UISearchDisplayController)
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerWillBeginSearch(\_:)](searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerWillEndSearch(\_:)](searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch(\_:)](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.

# searchDisplayControllerDidBeginSearch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the controller has started searching.

## Declaration

```objectivec
- (void) searchDisplayControllerDidBeginSearch:(UISearchDisplayController *) controller;
```

## Parameters

- `controller`: The search display controller for which the receiver is the delegate.

## See Also

### Responding to search state change

- [searchDisplayControllerWillBeginSearch:](searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerWillEndSearch:](searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch:](searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.
