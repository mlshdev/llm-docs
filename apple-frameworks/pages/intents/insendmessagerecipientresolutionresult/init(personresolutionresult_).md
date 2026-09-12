> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessagerecipientresolutionresult/init(personresolutionresult:)](https://developer.apple.com/documentation/intents/insendmessagerecipientresolutionresult/init(personresolutionresult:))

# init(personResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a resolution result object with the specified person resolution result object.

## Declaration

```swift
init(personResolutionResult: INPersonResolutionResult)
```

## Parameters

- `personResolutionResult`: The resolution result that resolves the recipient.

<a id="return-value"></a>

## Return Value

An initialized resolution result object.

<a id="Discussion"></a>

## Discussion

Typically, you do not call this method directly. Instead, you use the existing methods to create a resolution result of the appropriate type.

## See Also

### Creating a Resolution Result Object

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.

# initWithPersonResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a resolution result object with the specified person resolution result object.

## Declaration

```objectivec
- (instancetype) initWithPersonResolutionResult:(INPersonResolutionResult *) personResolutionResult;
```

## Parameters

- `personResolutionResult`: The resolution result that resolves the recipient.

<a id="return-value"></a>

## Return Value

An initialized resolution result object.

<a id="Discussion"></a>

## Discussion

Typically, you do not call this method directly. Instead, you use the existing methods to create a resolution result of the appropriate type.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [INSendMessageRecipientUnsupportedReason](../insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.
