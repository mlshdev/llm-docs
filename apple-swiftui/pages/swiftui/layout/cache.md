> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/cache](https://developer.apple.com/documentation/swiftui/layout/cache)

# Cache

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Cached values associated with the layout instance.

## Declaration

```swift
associatedtype Cache = Void
```

<a id="discussion"></a>

## Discussion

If you create a cache for your custom layout, you can use a type alias to define this type as your data storage type. Alternatively, you can refer to the data storage type directly in all the places where you work with the cache.

See [makeCache(subviews:)](makecache%28subviews_%29.md) for more information.

## See Also

### Managing a cache

- [makeCache(subviews:)](makecache%28subviews_%29.md): Creates and initializes a cache for a layout instance.
- [updateCache(\_:subviews:)](updatecache%28__subviews_%29.md): Updates the layout’s cache when something changes.
