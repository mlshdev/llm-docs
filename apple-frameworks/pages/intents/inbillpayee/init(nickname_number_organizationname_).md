> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayee/init(nickname:number:organizationname:)](https://developer.apple.com/documentation/intents/inbillpayee/init(nickname:number:organizationname:))

# init(nickname:number:organizationName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes a payee object with the specified account details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init?(nickname: INSpeakableString, number: String?, organizationName: INSpeakableString?)
```

## Parameters

- `nickname`: The nickname that the user assigned to this payee. Siri may display this text to the user. Don’t include account numbers or other potentially sensitive user information.
- `number`: A string to help the user differentiate between similar accounts. Typically, you use this parameter to specify the last few digits of the user’s account or an encoded version of the user’s account number. Never specify the user’s full account number.
- `organizationName`: The name of the organization receiving the payment. Siri may display this text to the user. Don’t include account numbers or other potentially sensitive user information.

<a id="return-value"></a>

## Return Value

An initialized payee object.

<a id="Discussion"></a>

## Discussion

When creating an [INBillPayee](../inbillpayee.md) object, specify the information that you need to identify a payee in your app.

# initWithNickname:number:organizationName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes a payee object with the specified account details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithNickname:(INSpeakableString *) nickname number:(NSString *) number organizationName:(INSpeakableString *) organizationName;
```

## Parameters

- `nickname`: The nickname that the user assigned to this payee. Siri may display this text to the user. Don’t include account numbers or other potentially sensitive user information.
- `number`: A string to help the user differentiate between similar accounts. Typically, you use this parameter to specify the last few digits of the user’s account or an encoded version of the user’s account number. Never specify the user’s full account number.
- `organizationName`: The name of the organization receiving the payment. Siri may display this text to the user. Don’t include account numbers or other potentially sensitive user information.

<a id="return-value"></a>

## Return Value

An initialized payee object.

<a id="Discussion"></a>

## Discussion

When creating an [INBillPayee](../inbillpayee.md) object, specify the information that you need to identify a payee in your app.
