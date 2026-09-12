> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/reportspam(_:)](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/reportspam(_:))

# reportSpam(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Reports an MMS message as spam to the carrier and to partners.

## Declaration

```swift
final func reportSpam(_ message: MMSMessage) async throws
```

## Parameters

- `message`: `MMSMessage` that needs to be reported as spam.

<a id="discussion"></a>

## Discussion

> **Throws**

> - `TelephonyMessagingSession.SessionError.invalidSession` when session has been invalidated.
> - `MMSService.Error.notSupported` when spam reporting is not supported by carrier.
