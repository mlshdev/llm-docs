> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/isactivityupdatereduced

# isActivityUpdateReduced

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean value that indicates whether the Live Activity update synchronization rate is reduced.

## Declaration

```swift
var isActivityUpdateReduced: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When rendering an activity on a remote device such as Apple Watch, content updates may sometimes be limited to only alerting updates, depending on system conditions. When a Live Activity is visible and the system synchronizes only alerting updates with a remote device, the value of `isActivityUpdateReduced` is `true`.

For example, `isActivityUpdateReduced` may be `true` for Live Activities on an Apple Watch that’s out of range of the paired iPhone.
