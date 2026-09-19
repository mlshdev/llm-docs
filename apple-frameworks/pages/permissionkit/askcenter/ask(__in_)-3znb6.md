> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/askcenter/ask(_:in:)-3znb6

# ask(\_:in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** macOS 26.2+

Tells the system to request that the person send the communication permission question to the person’s parent or guardian.

## Declaration

```swift
final func ask(_ question: PermissionQuestion<CommunicationTopic>, in window: NSWindow) async throws
```

## Parameters

- `question`: The question that the system requests the person send.
- `window`: The window to which you anchor and present system UI.

<a id="Overview"></a>

## Overview

Throws an error if the system is unable to request to send the question.

## See Also

### Making permission requests

- [ask(\_:in:)](ask%28__in_%29-39vi7.md): Tells the system to request that the person send the communication permission question to the person’s parent or guardian.
- [ask(\_:in:)](ask%28__in_%29-6xupo.md): Tells the system to request that a person send the communication permission question to the person’s parent or guardian.
- [ask(\_:in:)](ask%28__in_%29-8ks48.md): Tells the system to request that a person send the the significant app update permission question to their parent or guardian.
