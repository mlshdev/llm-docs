> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/terminationreason-swift.struct](https://developer.apple.com/documentation/metrickit/crashdiagnostic/terminationreason-swift.struct)

# CrashDiagnostic.TerminationReason

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A value that describes the reason the app terminated.

## Declaration

```swift
struct TerminationReason
```

<a id="Discussion"></a>

## Discussion

`TerminationReason` is [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable) and [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible). Use `rawValue` to access the underlying string value, or rely on the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) conformance to print the termination reason or interpolate it into a string:

```swift
if let reason = diagnostic.terminationReason {
    print("Termination reason: \(reason)")
}
```

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
