> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/sessionpropertyvalues/subscript(_:)](https://developer.apple.com/documentation/foundationmodels/sessionpropertyvalues/subscript(_:))

# subscript(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
final subscript<K>(key: K.Type) -> K.Value where K : SessionPropertyKey { get set }
```
