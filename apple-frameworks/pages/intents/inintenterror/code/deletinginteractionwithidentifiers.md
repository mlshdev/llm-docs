> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/code/deletinginteractionwithidentifiers](https://developer.apple.com/documentation/intents/inintenterror/code/deletinginteractionwithidentifiers)

# INIntentError.Code.deletingInteractionWithIdentifiers (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The system was unable to delete the specified set of INInteraction objects.

## Declaration

```swift
case deletingInteractionWithIdentifiers
```

<a id="discussion"></a>

## Discussion

To determine the low-level cause of the problem, check the value of [NSUnderlyingErrorKey](../../../foundation/nsunderlyingerrorkey.md) in the error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.

## See Also

### Interaction Errors

- [INIntentError.Code.interactionOperationNotSupported](interactionoperationnotsupported.md): The [INInteraction](../../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentError.Code.donatingInteraction](donatinginteraction.md): The INInteraction object could not be donated to the system.
- [INIntentError.Code.deletingAllInteractions](deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentError.Code.deletingInteractionWithGroupIdentifier](deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.

# INIntentErrorDeletingInteractionWithIdentifiers (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The system was unable to delete the specified set of INInteraction objects.

## Declaration

```objectivec
INIntentErrorDeletingInteractionWithIdentifiers
```

<a id="discussion"></a>

## Discussion

To determine the low-level cause of the problem, check the value of [NSUnderlyingErrorKey](../../../foundation/nsunderlyingerrorkey.md) in the error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.

## See Also

### Interaction Errors

- [INIntentErrorInteractionOperationNotSupported](interactionoperationnotsupported.md): The [INInteraction](../../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentErrorDonatingInteraction](donatinginteraction.md): The INInteraction object could not be donated to the system.
- [INIntentErrorDeletingAllInteractions](deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentErrorDeletingInteractionWithGroupIdentifier](deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.
