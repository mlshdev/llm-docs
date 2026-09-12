> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/apdu/respond(response:)](https://developer.apple.com/documentation/corenfc/cardsession/apdu/respond(response:))

# respond(response:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Respond to the session after receiving and processing an APDU.

## Declaration

```swift
final func respond(response: Data) async throws
```

## Parameters

- `response`: The APDU data to send as a response.

<a id="Discussion"></a>

## Discussion

Your client must respond to each APDU it receives. Failing to respond throws an error. If your client disposes an APDU object without responding, the card emulation ends.

> **Warning**

>  Only respond to a given APDU once. Calling this method more than once raises [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29). The exception to this is if the call throws [CardSession.Error.transmissionError](../error/transmissionerror.md). In this case, you can retry the response by calling [respond(response:)](respond%28response_%29.md) again.
