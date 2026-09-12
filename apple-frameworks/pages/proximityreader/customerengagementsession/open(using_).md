> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/open(using:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/open(using:))

# open(using:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Opens the engagement session.

## Declaration

```swift
final func open(using token: CustomerEngagement.Token? = nil) async throws
```

## Parameters

- `token`: \`The Customer Engagement token used to authenticate your credentials. If you omit the token, you must have already created a valid [PaymentCardReaderSession](../paymentcardreadersession.md) before calling this method.

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the open request fails. This method can also throw `Foundation/URLError`.

## See Also

### Configuring a session

- [CustomerEngagementSession.Configuration](configuration-swift.struct.md): A set of configuration options for a customer engagement session.
- [configuration](configuration-swift.property.md): Configuration for this session.
- [close()](close%28%29.md): Closes the engagement session.
- [CustomerEngagementSession.Token](token-swift.struct.md): A session token.
