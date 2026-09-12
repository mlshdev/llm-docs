> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/expirationdate](https://developer.apple.com/documentation/foundation/nsuseractivity/expirationdate)

# expirationDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The date after which the activity is no longer eligible for Handoff or indexing.

## Declaration

```swift
var expirationDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t set the value of this property, the system automatically expires the activity after a period of time.

## See Also

### Enabling system behaviors

- [isEligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [isEligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [isEligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [isEligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.

# expirationDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The date after which the activity is no longer eligible for Handoff or indexing.

## Declaration

```objectivec
@property (copy, nullable) NSDate * expirationDate;
```

<a id="Discussion"></a>

## Discussion

If you don’t set the value of this property, the system automatically expires the activity after a period of time.

## See Also

### Enabling system behaviors

- [eligibleForHandoff](iseligibleforhandoff.md): A Boolean value that indicates whether the activity can continue on another device using Handoff.
- [eligibleForSearch](iseligibleforsearch.md): A Boolean value that indicates whether to add the activity to the on-device index.
- [eligibleForPublicIndexing](iseligibleforpublicindexing.md): A Boolean value that indicates whether the activity is publicly accessible by all iOS users.
- [eligibleForPrediction](iseligibleforprediction.md): A Boolean value that determines whether Siri can suggest the activity as a shortcut.
