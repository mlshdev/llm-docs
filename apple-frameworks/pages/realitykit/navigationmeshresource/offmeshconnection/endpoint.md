> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/offmeshconnection/endpoint](https://developer.apple.com/documentation/realitykit/navigationmeshresource/offmeshconnection/endpoint)

# endPoint

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The end point of the off-mesh connection.

## Declaration

```swift
var endPoint: SIMD3<Float>
```

## See Also

### Defining the path

- [startPoint](startpoint.md): The start point of the off-mesh connection.
- [isBidirectional](isbidirectional.md): Whether the connection is bidirectional. If false, pathfinds will only allow going from startPoint to endPoint. If true, pathfinds will allow going in both directions.
