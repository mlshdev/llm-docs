> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/anytemporalsequence/init(_:count:)](https://developer.apple.com/documentation/createmlcomponents/anytemporalsequence/init(_:count:))

# init(\_:count:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
init<S>(_ sequence: S, count: Int?) where S : AsyncSequence, S.Element == TemporalFeature<Feature>
```

## See Also

### Creating a sequence

- [init(\_:)](init%28__%29.md)
