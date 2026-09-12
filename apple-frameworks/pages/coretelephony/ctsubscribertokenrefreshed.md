> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscribertokenrefreshed](https://developer.apple.com/documentation/coretelephony/ctsubscribertokenrefreshed)

# CTSubscriberTokenRefreshed (Swift)

**Framework:** Core Telephony  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 12.1) · iPadOS 7.0+ (deprecated in 12.1) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the notification indicating that the carrier token is available.

> Use the [CTSubscriberDelegate](ctsubscriberdelegate.md) method [subscriberTokenRefreshed(\_:)](ctsubscriberdelegate/subscribertokenrefreshed%28__%29.md) instead.

## Declaration

```swift
let CTSubscriberTokenRefreshed: String
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../foundation/nsnotification/object.md) property is the [CTSubscriber](ctsubscriber.md) instance whose subscriber token refreshed.

## See Also

### Managing the carrier token

- [carrierToken](ctsubscriber/carriertoken.md): A data object containing authorization information about the subscriber.
- [refreshCarrierToken()](ctsubscriber/refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.

# CTSubscriberTokenRefreshed (Objective-C)

**Framework:** Core Telephony  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 12.1) · iPadOS 7.0+ (deprecated in 12.1) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the notification indicating that the carrier token is available.

> Use the [CTSubscriberDelegate](ctsubscriberdelegate.md) method [subscriberTokenRefreshed:](ctsubscriberdelegate/subscribertokenrefreshed%28__%29.md) instead.

## Declaration

```objectivec
extern NSString * const CTSubscriberTokenRefreshed;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../foundation/nsnotification/object.md) property is the [CTSubscriber](ctsubscriber.md) instance whose subscriber token refreshed.

## See Also

### Managing the carrier token

- [carrierToken](ctsubscriber/carriertoken.md): A data object containing authorization information about the subscriber.
- [refreshCarrierToken](ctsubscriber/refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.
