> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/launchtaskid](https://developer.apple.com/documentation/metrickit/launchtaskid)

# LaunchTaskID

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

An identifier for a task measured as part of an extended app launch.

## Declaration

```swift
struct LaunchTaskID
```

<a id="Discussion"></a>

## Discussion

`LaunchTaskID` is `RawRepresentable` and `ExpressibleByStringLiteral`. You can pass a string literal directly as the `id` argument to [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-48k2s.md) or [trackLaunchTask(id:onTrackingError:\_:)](metricmanager/tracklaunchtask%28id_ontrackingerror___%29-jnu1.md):

```swift
await manager.trackLaunchTask(id: "initial-data-load") {
    await loadInitialData()
}
```

Choose unique, descriptive names for each task you track. The system uses the ID to associate measurements with the specific work you perform during launch.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App state reporting

- [StateReportingDomain](statereportingdomain.md): A value that identifies a reporting scope for segmenting metric data.
