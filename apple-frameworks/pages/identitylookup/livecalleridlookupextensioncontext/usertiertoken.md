> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/livecalleridlookupextensioncontext/usertiertoken](https://developer.apple.com/documentation/identitylookup/livecalleridlookupextensioncontext/usertiertoken)

# userTierToken

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An HTTP bearer token that authenticates the person using your app.

## Declaration

```swift
let userTierToken: Data
```

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](../getting-up-to-date-calling-and-blocking-information-for-your-app.md)

<a id="Discussion"></a>

## Discussion

The system sends this token to the Privacy Pass token issuer, which can verify whether it belongs to a valid user of your app. It then issues a Privacy Pass token.

## See Also

### Configuring the system

- [serviceURL](serviceurl.md): The endpoint of the service to fetch identity and blocking information.
- [tokenIssuerURL](tokenissuerurl.md): The URL of the Privacy Pass token issuer.
