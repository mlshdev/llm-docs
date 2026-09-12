> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriber/carriertoken](https://developer.apple.com/documentation/coretelephony/ctsubscriber/carriertoken)

# carrierToken (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+

A data object containing authorization information about the subscriber.

## Declaration

```swift
var carrierToken: Data? { get }
```

<a id="Discussion"></a>

## Discussion

May contain `nil` if no token is available.

The carrier API obtains this token from a carrier-provided server. The token authenticates your app to a server provided by the carrier, to prove that your app is running on a device owned by the subscriber.

## See Also

### Managing the carrier token

- [refreshCarrierToken()](refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.
- [CTSubscriberTokenRefreshed](../ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.

# carrierToken (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+

A data object containing authorization information about the subscriber.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSData * carrierToken;
```

<a id="Discussion"></a>

## Discussion

May contain `nil` if no token is available.

The carrier API obtains this token from a carrier-provided server. The token authenticates your app to a server provided by the carrier, to prove that your app is running on a device owned by the subscriber.

## See Also

### Managing the carrier token

- [refreshCarrierToken](refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.
- [CTSubscriberTokenRefreshed](../ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.
