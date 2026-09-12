> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue/dictionarytype/init(uniquekeyswithvalues:)](https://developer.apple.com/documentation/createml/mldatavalue/dictionarytype/init(uniquekeyswithvalues:))

# init(uniqueKeysWithValues:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
init<S>(uniqueKeysWithValues keysAndValues: S) where S : Sequence, S.Element == (MLDataValue, MLDataValue)
```

## See Also

### Creating a dictionary type

- [init(\_:)](init%28__%29.md)
- [MLDataValue.DictionaryType.Key](key.md)
- [MLDataValue.DictionaryType.Value](value.md)
