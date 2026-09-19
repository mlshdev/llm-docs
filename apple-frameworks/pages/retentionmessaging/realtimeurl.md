> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/retentionmessaging/realtimeurl

# realtimeURL

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.4+

A string that contains the URL you provide for your Get Retention Message endpoint.

## Declaration

```
string realtimeURL
```

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

> **Important**

> The `realtimeURL` must begin with `https://` and be a maximum of 256 characters. Otherwise, the call to [Configure Realtime URL](configure-realtime-url.md) fails.
