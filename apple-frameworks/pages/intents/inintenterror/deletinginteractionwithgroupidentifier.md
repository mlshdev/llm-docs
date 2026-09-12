> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/deletinginteractionwithgroupidentifier](https://developer.apple.com/documentation/intents/inintenterror/deletinginteractionwithgroupidentifier)

# deletingInteractionWithGroupIdentifier

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The system was unable to delete the [INInteraction](../ininteraction.md) objects using their group identifier.

## Declaration

```swift
static var deletingInteractionWithGroupIdentifier: INIntentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

To determine the low-level cause of the problem, check the value of [NSUnderlyingErrorKey](../../foundation/nsunderlyingerrorkey.md) in the error object’s [userInfo](../../foundation/nserror/userinfo.md) dictionary.

## See Also

### Interaction Errors

- [interactionOperationNotSupported](interactionoperationnotsupported.md): The [INInteraction](../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [donatingInteraction](donatinginteraction.md): The [INInteraction](../ininteraction.md) object could not be donated to the system.
- [deletingAllInteractions](deletingallinteractions.md): The system was unable to delete all donated [INInteraction](../ininteraction.md) objects.
- [deletingInteractionWithIdentifiers](deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of [INInteraction](../ininteraction.md) objects.
