> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicatecodableconfiguration/allowkeypathsforpropertiesprovided(by:recursive:)](https://developer.apple.com/documentation/foundation/predicatecodableconfiguration/allowkeypathsforpropertiesprovided(by:recursive:))

# allowKeyPathsForPropertiesProvided(by:recursive:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
mutating func allowKeyPathsForPropertiesProvided<T>(by type: T.Type, recursive: Bool = false) where T : PredicateCodableKeyPathProviding
```

## See Also

### Allowing types and key paths

- [allow(\_:)](allow%28__%29.md)
- [allowPartialType(\_:identifier:)](allowpartialtype%28__identifier_%29.md)
- [allowType(\_:identifier:)](allowtype%28__identifier_%29.md)
