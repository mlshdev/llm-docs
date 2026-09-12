> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/code/donatinginteraction](https://developer.apple.com/documentation/intents/inintenterror/code/donatinginteraction)

# INIntentError.Code.donatingInteraction (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The INInteraction object could not be donated to the system.

## Declaration

```swift
case donatingInteraction
```

<a id="discussion"></a>

## Discussion

To determine the low-level cause of the problem, check the value of [NSUnderlyingErrorKey](../../../foundation/nsunderlyingerrorkey.md) in the error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.

## See Also

### Interaction Errors

- [INIntentError.Code.interactionOperationNotSupported](interactionoperationnotsupported.md): The [INInteraction](../../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentError.Code.deletingAllInteractions](deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentError.Code.deletingInteractionWithIdentifiers](deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of INInteraction objects.
- [INIntentError.Code.deletingInteractionWithGroupIdentifier](deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.

# INIntentErrorDonatingInteraction (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The INInteraction object could not be donated to the system.

## Declaration

```objectivec
INIntentErrorDonatingInteraction
```

<a id="discussion"></a>

## Discussion

To determine the low-level cause of the problem, check the value of [NSUnderlyingErrorKey](../../../foundation/nsunderlyingerrorkey.md) in the error object’s [userInfo](../../../foundation/nserror/userinfo.md) dictionary.

## See Also

### Interaction Errors

- [INIntentErrorInteractionOperationNotSupported](interactionoperationnotsupported.md): The [INInteraction](../../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentErrorDeletingAllInteractions](deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentErrorDeletingInteractionWithIdentifiers](deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of INInteraction objects.
- [INIntentErrorDeletingInteractionWithGroupIdentifier](deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.
