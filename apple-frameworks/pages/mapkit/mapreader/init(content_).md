> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapreader/init(content:)](https://developer.apple.com/documentation/mapkit/mapreader/init(content:))

# init(content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an instance that allows view content to reference information about a contained map.

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder content: @escaping (MapProxy) -> Content)
```

## Parameters

- `content`: The content of the map reader uses to retrieve information about, it uses the first map the `content` contains.

<a id="return-value"></a>

## Return Value

Returns a [MapProxy](../mapproxy.md) that allows you to introspect the content of a map.
