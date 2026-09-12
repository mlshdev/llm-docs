> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/iseligibleforprediction](https://developer.apple.com/documentation/foundation/nsuseractivity/iseligibleforprediction)

# isEligibleForPrediction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that determines whether Siri can suggest the activity as a shortcut.

## Declaration

```swift
var isEligibleForPrediction: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If you aren’t yet using App Intents, set the value of this property to `true` if you want the system to suggest the activity as a shortcut. When the activity object is current, or associated with a view or responder in your app’s interface, the system includes the shortcut in places like Spotlight search and the Lock Screen. Set this property to `false` if you’re already donating App Intents to the system or want to prevent the generation of shortcuts for the activity. The default value of this property is `false`.

For information on how to generate shortcuts using SiriKit and activity objects, see [Donating Shortcuts](../../sirikit/donating-shortcuts.md).

## See Also

### Enabling system behaviors

- [isEligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [isEligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [isEligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.

# eligibleForPrediction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value that determines whether Siri can suggest the activity as a shortcut.

## Declaration

```objectivec
@property (getter=isEligibleForPrediction) BOOL eligibleForPrediction;
```

<a id="discussion"></a>

## Discussion

If you aren’t yet using App Intents, set the value of this property to `true` if you want the system to suggest the activity as a shortcut. When the activity object is current, or associated with a view or responder in your app’s interface, the system includes the shortcut in places like Spotlight search and the Lock Screen. Set this property to `false` if you’re already donating App Intents to the system or want to prevent the generation of shortcuts for the activity. The default value of this property is `false`.

For information on how to generate shortcuts using SiriKit and activity objects, see [Donating Shortcuts](../../sirikit/donating-shortcuts.md).

## See Also

### Enabling system behaviors

- [eligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [eligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [eligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [expirationDate](expirationdate.md): The date after which the activity is no longer eligible for Handoff or indexing.
