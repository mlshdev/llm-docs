> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollviewproxy/scrollto(_:anchor:)](https://developer.apple.com/documentation/swiftui/scrollviewproxy/scrollto(_:anchor:))

# scrollTo(\_:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Scans all scroll views contained by the proxy for the first with a child view with identifier `id`, and then scrolls to that view.

## Declaration

```swift
func scrollTo<ID>(_ id: ID, anchor: UnitPoint? = nil) where ID : Hashable
```

## Parameters

- `id`: The identifier of a child view to scroll to.
- `anchor`: The alignment behavior of the scroll action.

<a id="discussion"></a>

## Discussion

If `anchor` is `nil`, this method finds the container of the identified view, and scrolls the minimum amount to make the identified view wholly visible.

If `anchor` is non-`nil`, it defines the points in the identified view and the scroll view to align. For example, setting `anchor` to [top](../unitpoint/top.md) aligns the top of the identified view to the top of the scroll view. Similarly, setting `anchor` to [bottom](../unitpoint/bottom.md) aligns the bottom of the identified view to the bottom of the scroll view, and so on.
