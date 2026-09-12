> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/statereportingdomain](https://developer.apple.com/documentation/metrickit/statereportingdomain)

# StateReportingDomain

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A value that identifies a reporting scope for segmenting metric data.

## Declaration

```swift
struct StateReportingDomain
```

## Mentioned In

- [Monitoring app performance with MetricKit](monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`StateReportingDomain` is `RawRepresentable` and `ExpressibleByStringLiteral`, so create values using string literals. Use reverse DNS notation to avoid naming collisions:

```swift
let manager = MetricManager(
    enabledStateReportingDomains: ["com.example.app.session"]
)
```

Pass a set of `StateReportingDomain` values to [init(enabledStateReportingDomains:)](metricmanager/init%28enabledstatereportingdomains_%29.md) to receive metrics segmented by each domain’s recorded states. Use `StateReporter.reporter(for:stableMetadata:)` from the `StateReporting` framework to obtain a `StateReporter`. Call `reportTransition(to:stableMetadata:)` on it to emit state transitions for MetricKit to aggregate.

## Relationships

### Conforms To

- [CodingKeyRepresentable](https://developer.apple.com/documentation/swift/codingkeyrepresentable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App state reporting

- [LaunchTaskID](launchtaskid.md): An identifier for a task measured as part of an extended app launch.
