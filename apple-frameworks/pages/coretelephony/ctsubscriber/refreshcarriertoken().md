> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriber/refreshcarriertoken()](https://developer.apple.com/documentation/coretelephony/ctsubscriber/refreshcarriertoken())

# refreshCarrierToken() (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+

Attempts to refresh the carrier token.

## Declaration

```swift
func refreshCarrierToken() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the system performs a token refresh in response to this call; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

Call this method to update the [carrierToken](carriertoken.md) when the token exists but the server rejects it.

> **Note**

>  Retrieve and attempt to use `carrierToken` first. Only call this method when you know the token is invalid.

Inspect the return value to determine whether this call results in an actual refresh. If the return value is `true`, the system attempts the refresh and calls the delegate method [subscriberTokenRefreshed(\_:)](../ctsubscriberdelegate/subscribertokenrefreshed%28__%29.md). A return value of `false` indicates an invalid argument (such as bad carrier descriptors or service descriptor) or that the subscriber doesn’t support the authentication action.

## See Also

### Managing the carrier token

- [carrierToken](carriertoken.md): A data object containing authorization information about the subscriber.
- [CTSubscriberTokenRefreshed](../ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.

# refreshCarrierToken (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+

Attempts to refresh the carrier token.

## Declaration

```objectivec
- (BOOL) refreshCarrierToken;
```

<a id="return-value"></a>

## Return Value

`true` if the system performs a token refresh in response to this call; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

Call this method to update the [carrierToken](carriertoken.md) when the token exists but the server rejects it.

> **Note**

>  Retrieve and attempt to use `carrierToken` first. Only call this method when you know the token is invalid.

Inspect the return value to determine whether this call results in an actual refresh. If the return value is `true`, the system attempts the refresh and calls the delegate method [subscriberTokenRefreshed:](../ctsubscriberdelegate/subscribertokenrefreshed%28__%29.md). A return value of `false` indicates an invalid argument (such as bad carrier descriptors or service descriptor) or that the subscriber doesn’t support the authentication action.

## See Also

### Managing the carrier token

- [carrierToken](carriertoken.md): A data object containing authorization information about the subscriber.
- [CTSubscriberTokenRefreshed](../ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.
