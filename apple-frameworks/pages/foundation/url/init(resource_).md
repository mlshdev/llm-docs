> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(resource:)](https://developer.apple.com/documentation/foundation/url/init(resource:))

# init(resource:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a URL from a resource.

## Declaration

```swift
init?(resource: URLResource)
```

## Parameters

- `resource`: A [URLResource](../urlresource.md) that provides a reference to a resource in a given bundle.

<a id="Discussion"></a>

## Discussion

Use this initializer to resolve [URLResource](../urlresource.md) instances, possibly received from other processes, into [URL](../url.md) instances.
