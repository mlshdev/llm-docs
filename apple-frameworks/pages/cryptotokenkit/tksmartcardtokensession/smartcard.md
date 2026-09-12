> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokensession/smartcard](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokensession/smartcard)

# smartCard (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · tvOS 11.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

The smart card for the active exclusive session and selected application.

## Declaration

```swift
var smartCard: TKSmartCard { get }
```

<a id="Discussion"></a>

## Discussion

This property can only be accessed in the implementation of a `TKTokenSessionDelegate` protocol delegate method. If the associated token has a value set for the [aid](../tksmartcardtoken/aid.md) property, this property opens an exclusive session to the card, with the application already selected.

You should not call [beginSession(reply:)](../tksmartcard/beginsession%28reply_%29.md) or [endSession()](../tksmartcard/endsession%28%29.md) on the returned value. Instead, the system will take care of beginning the exclusive session and terminating it when the current token request servicing is finished.

You can store any kind of information representing state of the card using the [context](../tksmartcard/context.md) property. This property will be automatically set to `nil` if the card is reset or accessed by different [TKSmartCard](../tksmartcard.md) instance, such as by another process. You can check the [context](../tksmartcard/context.md) property for any previously stored values as a way to avoid costly state restoration before performing an operation.

# smartCard (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · tvOS 11.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

The smart card for the active exclusive session and selected application.

## Declaration

```objectivec
@property (readonly) TKSmartCard * smartCard;
```

<a id="Discussion"></a>

## Discussion

This property can only be accessed in the implementation of a `TKTokenSessionDelegate` protocol delegate method. If the associated token has a value set for the [AID](../tksmartcardtoken/aid.md) property, this property opens an exclusive session to the card, with the application already selected.

You should not call [beginSessionWithReply:](../tksmartcard/beginsession%28reply_%29.md) or [endSession](../tksmartcard/endsession%28%29.md) on the returned value. Instead, the system will take care of beginning the exclusive session and terminating it when the current token request servicing is finished.

You can store any kind of information representing state of the card using the [context](../tksmartcard/context.md) property. This property will be automatically set to `nil` if the card is reset or accessed by different [TKSmartCard](../tksmartcard.md) instance, such as by another process. You can check the [context](../tksmartcard/context.md) property for any previously stored values as a way to avoid costly state restoration before performing an operation.
