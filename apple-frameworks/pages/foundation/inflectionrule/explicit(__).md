> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inflectionrule/explicit(_:)](https://developer.apple.com/documentation/foundation/inflectionrule/explicit(_:))

# InflectionRule.explicit(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An inflection rule that uses a morphology instance to determine how to inflect attribued strings.

## Declaration

```swift
case explicit(Morphology)
```

## Parameters

- `Morphology`: The [Morphology](../morphology.md) instance to use when applying this rule.

## See Also

### Inflection Rule Behaviors

- [InflectionRule.automatic](automatic.md): An inflection rule that performs automatic grammar agreement with default transformations.
