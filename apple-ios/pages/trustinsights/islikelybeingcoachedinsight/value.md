> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/islikelybeingcoachedinsight/value](https://developer.apple.com/documentation/trustinsights/islikelybeingcoachedinsight/value)

# IsLikelyBeingCoachedInsight.Value

**Framework:** Trust Insights  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The levels of trust the framework returns for the “is likely being coached” insight.

## Declaration

```swift
@nonexhaustive enum Value
```

<a id="Discussion"></a>

## Discussion

The framework only returns additional result values when requesting a schema version that introduced a new value.

## Topics

### Enumeration Cases - generated

- [IsLikelyBeingCoachedInsight.Value.high](value/high.md): A result that indicates there’s a high risk that a third party is coaching a person in some form.
- [IsLikelyBeingCoachedInsight.Value.medium](value/medium.md): A result that indicates there’s a medium chance that a third party is coaching a person in some form.
- [IsLikelyBeingCoachedInsight.Value.unknown](value/unknown.md): A result that indicates a lack of evidence as to whether or not coaching is occurring.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations - generated

- [IsLikelyBeingCoachedInsight.SchemaVersion](schemaversion.md): An enumeration of insight values present in the available schema versions.
