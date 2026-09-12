> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chart3d/init(content:)](https://developer.apple.com/documentation/charts/chart3d/init(content:))

# init(content:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@MainActor @preconcurrency init(@Chart3DContentBuilder content: () -> Content)
```

## See Also

### Creating 3D charts

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Content` conforms to `Chart3DContent`. Creates a 3D chart composed of a series of identifiable marks.
- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Content` conforms to `Chart3DContent`. Creates a 3D chart composed of a series of marks.
