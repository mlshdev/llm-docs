> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintent/searchterms](https://developer.apple.com/documentation/intents/instartphotoplaybackintent/searchterms)

# searchTerms (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

An array of terms to look for in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var searchTerms: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only photos whose tags, keywords, descriptions, or other attributes contain one of the specified strings. Use the value of the [searchTermsOperator](searchtermsoperator.md) property to determine whether the search should be for all, some, or none of the specified terms.

## See Also

### Getting the Search Terms

- [searchTermsOperator](searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.

# searchTerms (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

An array of terms to look for in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * searchTerms;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * searchTerms;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only photos whose tags, keywords, descriptions, or other attributes contain one of the specified strings. Use the value of the [searchTermsOperator](searchtermsoperator.md) property to determine whether the search should be for all, some, or none of the specified terms.

## See Also

### Getting the Search Terms

- [searchTermsOperator](searchtermsoperator.md): Deprecated. The operator that defines how to incorporate the search terms when performing the search.
