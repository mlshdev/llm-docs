> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequesterror/unknown(message:)

# LiveAssistanceRequestError.unknown(message:)

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

An error that indicates an unexpected failure prevented servicing the request.

## Declaration

```swift
case unknown(message: String)
```

## Parameters

- `message`: An optional description for diagnostics.

## See Also

### Working with errors

- [LiveAssistanceRequestError.cannotFulfill(message:)](cannotfulfill%28message_%29.md): An error that indicates the extension can’t fulfill the request.
