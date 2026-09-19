> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/keypredispatch

# keyPreDispatch

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A predispatch handler (an Apple event handler that the Apple Event Manager calls immediately before it dispatches an Apple event). See also [Managing Special Handler Dispatch Tables](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652333).

## Declaration

```swift
var keyPreDispatch: AEKeyword { get }
```
