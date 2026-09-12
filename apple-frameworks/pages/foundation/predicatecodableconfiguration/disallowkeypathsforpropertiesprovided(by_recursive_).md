> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicatecodableconfiguration/disallowkeypathsforpropertiesprovided(by:recursive:)](https://developer.apple.com/documentation/foundation/predicatecodableconfiguration/disallowkeypathsforpropertiesprovided(by:recursive:))

# disallowKeyPathsForPropertiesProvided(by:recursive:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func disallowKeyPathsForPropertiesProvided<T>(by type: T.Type, recursive: Bool = false) where T : PredicateCodableKeyPathProviding
```

## See Also

### Disallowing types and key paths

- [disallowPartialType(\_:)](disallowpartialtype%28__%29.md)
- [disallowType(\_:)](disallowtype%28__%29.md)
