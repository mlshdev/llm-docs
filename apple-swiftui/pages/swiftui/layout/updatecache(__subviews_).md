> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/updatecache(_:subviews:)](https://developer.apple.com/documentation/swiftui/layout/updatecache(_:subviews:))

# updateCache(\_:subviews:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Updates the layout’s cache when something changes.

## Declaration

```swift
func updateCache(_ cache: inout Self.Cache, subviews: Self.Subviews)
```

## Parameters

- `cache`: Storage for calculated data that you share among the methods of your custom layout container.
- `subviews`: A collection of proxy instances that represent the views arranged by the container. You can use the proxies in the collection to get information about the subviews as you calculate values to store in the cache.

<a id="discussion"></a>

## Discussion

If your custom layout container creates a cache by implementing the [makeCache(subviews:)](makecache%28subviews_%29.md) method, SwiftUI calls the update method when your layout or its subviews change, giving you an opportunity to modify or invalidate the contents of the cache. The method’s default implementation recreates the cache by calling the [makeCache(subviews:)](makecache%28subviews_%29.md) method, but you can provide your own implementation to take an incremental approach, if appropriate.

## Default Implementations

### Layout Implementations

- [updateCache(\_:subviews:)](updatecache%28__subviews_%29-75zac.md): Reinitializes a cache to a new value.

## See Also

### Managing a cache

- [makeCache(subviews:)](makecache%28subviews_%29.md): Creates and initializes a cache for a layout instance.
- [Cache](cache.md): Cached values associated with the layout instance.
