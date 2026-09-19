> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutecontroller-18ns8/removeobserver(_:)

# removeObserver(\_:)

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Removes a previously registered observer from the system routing controller.

## Declaration

```swift
final func removeObserver(_ observer: any AVSystemRouteControllerObserver)
```

## Parameters

- `observer`: The observer object to remove. If the observer is not currently registered, this function has no effect.

<a id="discussion"></a>

## Discussion

Call this function to unregister an observer when it no longer needs to receive routing event notifications. This is typically done in the observer’s deallocation or when the observer is no longer relevant to avoid memory leaks and unnecessary callbacks.
