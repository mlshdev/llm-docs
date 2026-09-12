> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/iseligibleforpublicindexing](https://developer.apple.com/documentation/foundation/nsuseractivity/iseligibleforpublicindexing)

# isEligibleForPublicIndexing (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the activity is publicly accessible by all iOS users.

## Declaration

```swift
var isEligibleForPublicIndexing: Bool { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to add the activity object to the global Spotlight search indexes. Set the value of this property to `false` if the activity object contains private or sensitive information or if the activity isn’t useful outside your app. The default value of this property is `false`.

If you set this property to `true`, the system indexes the values in the [webpageURL](webpageurl.md) and [requiredUserInfoKeys](requireduserinfokeys.md) properties, and you must provide a value for one of those properties. If you provide a URL, make sure it reflects the same content in both your app and your company’s website. When someone chooses one of your app’s public activities from search results, it tells Apple that your website’s public information is popular, which can increase the ranking of that content in future searches.

> **Important**

> Your app must maintain a strong reference to any activity objects you make eligible for search.

## See Also

### Enabling system behaviors

- [isEligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [isEligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [isEligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.

# eligibleForPublicIndexing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the activity is publicly accessible by all iOS users.

## Declaration

```objectivec
@property (getter=isEligibleForPublicIndexing) BOOL eligibleForPublicIndexing;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to add the activity object to the global Spotlight search indexes. Set the value of this property to `false` if the activity object contains private or sensitive information or if the activity isn’t useful outside your app. The default value of this property is `false`.

If you set this property to `true`, the system indexes the values in the [webpageURL](webpageurl.md) and [requiredUserInfoKeys](requireduserinfokeys.md) properties, and you must provide a value for one of those properties. If you provide a URL, make sure it reflects the same content in both your app and your company’s website. When someone chooses one of your app’s public activities from search results, it tells Apple that your website’s public information is popular, which can increase the ranking of that content in future searches.

> **Important**

> Your app must maintain a strong reference to any activity objects you make eligible for search.

## See Also

### Enabling system behaviors

- [eligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [eligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [eligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.
