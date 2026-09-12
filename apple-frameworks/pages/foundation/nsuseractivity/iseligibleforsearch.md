> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/iseligibleforsearch](https://developer.apple.com/documentation/foundation/nsuseractivity/iseligibleforsearch)

# isEligibleForSearch (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to add the activity to the on-device index.

## Declaration

```swift
var isEligibleForSearch: Bool { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

If you aren’t yet using App Intents and want to add your user activity objects to the Spotlight indexes, set the value in this property to `true`. When this property is `true` and the user activity object is current, Spotlight indexes the activity so it can appear in search results. Set this property to `false` if you are already indexing [AppEntity](../../appintents/appentity.md) types or don’t want Spotlight to include someone’s activity-related information in search results. The default value of this property is `false`.

Add an activity object to the search index if it contains information a person might reasonably search for later. For example, a restaurant finder app might index activity objects for each restaurant the person views. Subsequent searches for restaurants using Spotlight can then include the restaurants from your activity objects in the results. Index activity objects only to reflect the content that people touch in your app, not as a substitute for indexing your app’s content using Spotlight.

> **Important**

> Your app must maintain a strong reference to any activity objects you make eligible for search.

## See Also

### Enabling system behaviors

- [isEligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [isEligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [isEligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.

# eligibleForSearch (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to add the activity to the on-device index.

## Declaration

```objectivec
@property (getter=isEligibleForSearch) BOOL eligibleForSearch;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

If you aren’t yet using App Intents and want to add your user activity objects to the Spotlight indexes, set the value in this property to `true`. When this property is `true` and the user activity object is current, Spotlight indexes the activity so it can appear in search results. Set this property to `false` if you are already indexing [AppEntity](../../appintents/appentity.md) types or don’t want Spotlight to include someone’s activity-related information in search results. The default value of this property is `false`.

Add an activity object to the search index if it contains information a person might reasonably search for later. For example, a restaurant finder app might index activity objects for each restaurant the person views. Subsequent searches for restaurants using Spotlight can then include the restaurants from your activity objects in the results. Index activity objects only to reflect the content that people touch in your app, not as a substitute for indexing your app’s content using Spotlight.

> **Important**

> Your app must maintain a strong reference to any activity objects you make eligible for search.

## See Also

### Enabling system behaviors

- [eligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [eligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [eligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.
