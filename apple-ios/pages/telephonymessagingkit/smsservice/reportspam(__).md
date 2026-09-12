> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/reportspam(_:)](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/reportspam(_:))

# reportSpam(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Reports an SMS message as spam to the carrier and to partners.

## Declaration

```swift
final func reportSpam(_ message: SMSMessage) async throws
```

## Parameters

- `message`: [SMSMessage](../smsmessage.md) to report as spam.

<a id="discussion"></a>

## Discussion

> **Throws**

>  A [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md) if the session is no longer valid or an [SMSService.Error.notSupported](error/notsupported.md) if the carrier doesn’t support spam reporting.
