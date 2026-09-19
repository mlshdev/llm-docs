> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/walletorders/receive-log-messages

# Receive log messages

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Web Service Endpoint  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

Records log messages on your server.

## URL

```http
POST https://your-web-service.com/v1/log
```

## HTTP Body

Content type: `application/json`

Type: `LogEntries`

An array of log messages.

## Response Codes

- `200` OK: The request was successful.

## See Also

### Message logs

- [LogEntries](logentries.md): An array of log messages.
