> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkconnection/trynextendpoint()

# tryNextEndpoint()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Cancel the currently connected endpoint, causing the connection to fall through to the next endpoint if available, or to go to the waiting state if no more endpoints are available.

## Declaration

```swift
final func tryNextEndpoint()
```
