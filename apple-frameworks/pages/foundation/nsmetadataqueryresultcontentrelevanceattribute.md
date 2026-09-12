> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryresultcontentrelevanceattribute](https://developer.apple.com/documentation/foundation/nsmetadataqueryresultcontentrelevanceattribute)

# NSMetadataQueryResultContentRelevanceAttribute (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
let NSMetadataQueryResultContentRelevanceAttribute: String
```

<a id="Discussion"></a>

## Discussion

The key used to retrieve an `NSNumber` object with a floating point value between 0.0 and 1.0 inclusive. The relevance value indicates the relevance of the content of a result object. The relevance is computed based on the value of the result itself, not on its relevance to the other results returned by the query. If the value is not computed, it is treated as an attribute on the item that does not exist.

# NSMetadataQueryResultContentRelevanceAttribute (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSString * const NSMetadataQueryResultContentRelevanceAttribute;
```

<a id="Discussion"></a>

## Discussion

The key used to retrieve an `NSNumber` object with a floating point value between 0.0 and 1.0 inclusive. The relevance value indicates the relevance of the content of a result object. The relevance is computed based on the value of the result itself, not on its relevance to the other results returned by the query. If the value is not computed, it is treated as an attribute on the item that does not exist.
