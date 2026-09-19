> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/anytemporalsequence/init(_:)

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

## Declaration

```swift
init<S>(_ sequence: S) where Feature == S.Feature, S : TemporalSequence
```

## See Also

### Creating a sequence

- [init(\_:count:)](init%28__count_%29.md)
