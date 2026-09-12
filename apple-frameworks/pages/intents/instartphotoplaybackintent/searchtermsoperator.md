> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintent/searchtermsoperator](https://developer.apple.com/documentation/intents/instartphotoplaybackintent/searchtermsoperator)

# searchTermsOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The operator that defines how to incorporate the search terms when performing the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var searchTermsOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether photos must contain all, some, or none of the terms listed in the [searchTerms](searchterms.md) property.

## See Also

### Getting the Search Terms

- [searchTerms](searchterms.md): Deprecated. An array of terms to look for in the photos.

# searchTermsOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The operator that defines how to incorporate the search terms when performing the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator searchTermsOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator searchTermsOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether photos must contain all, some, or none of the terms listed in the [searchTerms](searchterms.md) property.

## See Also

### Getting the Search Terms

- [searchTerms](searchterms.md): Deprecated. An array of terms to look for in the photos.
