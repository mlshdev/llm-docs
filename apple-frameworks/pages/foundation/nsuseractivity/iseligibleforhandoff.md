> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/iseligibleforhandoff](https://developer.apple.com/documentation/foundation/nsuseractivity/iseligibleforhandoff)

# isEligibleForHandoff (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the activity can continue on another device using Handoff.

## Declaration

```swift
var isEligibleForHandoff: Bool { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` for activities you can continue on a person’s other devices; otherwise, set it to `false`. The default value of this property is `true`.

For information about how to support Handoff in your app, see [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md).

## See Also

### Enabling system behaviors

- [isEligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [isEligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [isEligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.

# eligibleForHandoff (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the activity can continue on another device using Handoff.

## Declaration

```objectivec
@property (getter=isEligibleForHandoff) BOOL eligibleForHandoff;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` for activities you can continue on a person’s other devices; otherwise, set it to `false`. The default value of this property is `true`.

For information about how to support Handoff in your app, see [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md).

## See Also

### Enabling system behaviors

- [eligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [eligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [eligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.
