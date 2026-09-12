> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessagerecipientresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/insendmessagerecipientresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.

## Declaration

```swift
class func unsupported(forReason reason: INSendMessageRecipientUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason why the recipient is not supported. For a list of possible values, see [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when a problem with the recipient’s account would prevent you from sending the message. When you return a resolution of this type, Siri prompts the user to provide a new recipient, which you must then resolve. The cycle of prompting the user and asking you to resolve the parameter continues until you resolve the parameter successfully.

## See Also

### Creating a Resolution Result Object

- [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.
- [init(personResolutionResult:)](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INSendMessageRecipientUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason why the recipient is not supported. For a list of possible values, see [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when a problem with the recipient’s account would prevent you from sending the message. When you return a resolution of this type, Siri prompts the user to provide a new recipient, which you must then resolve. The cycle of prompting the user and asking you to resolve the parameter continues until you resolve the parameter successfully.

## See Also

### Creating a Resolution Result Object

- [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.
- [initWithPersonResolutionResult:](init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
