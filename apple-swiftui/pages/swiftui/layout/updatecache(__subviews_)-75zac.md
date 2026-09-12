> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/updatecache(_:subviews:)-75zac](https://developer.apple.com/documentation/swiftui/layout/updatecache(_:subviews:)-75zac)

# updateCache(\_:subviews:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Reinitializes a cache to a new value.

## Declaration

```swift
func updateCache(_ cache: inout Self.Cache, subviews: Self.Subviews)
```

<a id="discussion"></a>

## Discussion

If you don’t implement the [updateCache(\_:subviews:)](updatecache%28__subviews_%29-75zac.md) method in your custom layout, the protocol uses this default implementation instead, which calls [makeCache(subviews:)](makecache%28subviews_%29.md).
