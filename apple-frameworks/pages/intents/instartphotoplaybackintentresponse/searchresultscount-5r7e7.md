> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponse/searchresultscount-5r7e7](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse/searchresultscount-5r7e7)

# searchResultsCount

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0) · watchOS 3.2+ (deprecated in 8.0)

The number of photos that match the search parameters.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var searchResultsCount: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the number of photos found during the search. Typically, you assign a value to this property only after handling the intent. During the confirmation phase, you can set the value of this property set to `0`.
