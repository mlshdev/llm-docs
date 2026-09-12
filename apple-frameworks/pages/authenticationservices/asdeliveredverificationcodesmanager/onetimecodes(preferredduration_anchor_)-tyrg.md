> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asdeliveredverificationcodesmanager/onetimecodes(preferredduration:anchor:)-tyrg](https://developer.apple.com/documentation/authenticationservices/asdeliveredverificationcodesmanager/onetimecodes(preferredduration:anchor:)-tyrg)

# oneTimeCodes(preferredDuration:anchor:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Stream one-time codes received by the system.

## Declaration

```swift
func oneTimeCodes(preferredDuration: TimeInterval, anchor: ASPresentationAnchor) async throws -> some AsyncSequence<ASVerificationCode, any Error>

```

## Parameters

- `preferredDuration`: How long the stream should ideally remain connected. This duration is not guaranteed.
- `anchor`: The anchor for which any UI should be presented from.

<a id="discussion"></a>

## Discussion

When requested, the user may decide whether your app may receive one-time codes. This stream will automatically disconnect after a period of time.

> **Throws**

> `ASDeliveredVerificationCodesManager.VerificationError` if one-time codes can not be delivered.

> **Note**

> Only enabled credential providers may call this method.
