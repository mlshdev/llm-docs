> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/reportspam(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/reportspam(_:))

# reportSpam(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Reports an RCS message as spam to the carrier and to partners.

## Declaration

```swift
final func reportSpam(_ request: RCSService.ReportSpamRequest) async throws
```

## Parameters

- `request`: A request that provides details about the spam message.

<a id="discussion"></a>

## Discussion

> **Throws**

>  If the session is no longer valid, this method throws [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md). If the carrier doesn’t support spam reporting, the method throws [RCSService.Error.notSupported](error/notsupported.md).

## See Also

### Reporting spam

- [RCSService.ReportSpamRequest](reportspamrequest.md): A structure that contains information about a spam reporting request for an RCS message.
