> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/islikelybeingcoachedinsight](https://developer.apple.com/documentation/trustinsights/islikelybeingcoachedinsight)

# IsLikelyBeingCoachedInsight

**Framework:** Trust Insights  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An insight to request to examine indications that someone may be actively coaching a person to perform actions.

## Declaration

```swift
struct IsLikelyBeingCoachedInsight
```

<a id="Discussion"></a>

## Discussion

It could be useful to consider this in operations where it’s possible that someone may be in the process of being defrauded (such as transfers to new counterparties) and whether additional security checks — often called “step ups” or “blocks” — may be appropriate.

> **Note**

> It’s important to be aware that coaching may not necessarily be malicious.

## Topics

### Instance Properties - generated

- [insightID](islikelybeingcoachedinsight/insightid.md): The identifier for this particular result.
- [modelVersion](islikelybeingcoachedinsight/modelversion.md): The model version used for this particular insight.
- [newestModelVersion](islikelybeingcoachedinsight/newestmodelversion.md): The newest model that could be requested.
- [outcome](islikelybeingcoachedinsight/outcome.md): Result value from a request for this insight.

### Enumerations - generated

- [IsLikelyBeingCoachedInsight.SchemaVersion](islikelybeingcoachedinsight/schemaversion.md): An enumeration of insight values present in the available schema versions.
- [IsLikelyBeingCoachedInsight.Value](islikelybeingcoachedinsight/value.md): The levels of trust the framework returns for the “is likely being coached” insight.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TrustInsight](trustinsight.md)
