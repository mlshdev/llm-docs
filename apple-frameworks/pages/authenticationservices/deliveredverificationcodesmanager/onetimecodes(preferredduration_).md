> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/deliveredverificationcodesmanager/onetimecodes(preferredduration:)

# oneTimeCodes(preferredDuration:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Stream one-time codes received by the system.

## Declaration

```swift
@MainActor func oneTimeCodes(preferredDuration: TimeInterval) async throws -> some AsyncSequence<ASVerificationCode, any Error>

```

## Parameters

- `preferredDuration`: How long the stream should ideally remain connected. This duration is not guaranteed.

<a id="discussion"></a>

## Discussion

When requested, the user may decide whether your app may receive one-time codes. This stream will automatically disconnect after a period of time.

> **Throws**

> `DeliveredVerificationCodesManager.VerificationError` if one-time codes can not be delivered.

> **Note**

> Only enabled credential providers may call this method.
