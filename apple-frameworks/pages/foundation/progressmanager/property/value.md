> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/property/value](https://developer.apple.com/documentation/foundation/progressmanager/property/value)

# Value

**Framework:** Foundation  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type used for individual values of this property.

## Declaration

```swift
associatedtype Value : Equatable, Sendable
```

<a id="discussion"></a>

## Discussion

This associated type represents the type of property values that can be set on progress managers. Must be `Sendable` and `Equatable`. The currently allowed types are `Int`, `Double`, `String?`, `URL?` or `UInt64`.
