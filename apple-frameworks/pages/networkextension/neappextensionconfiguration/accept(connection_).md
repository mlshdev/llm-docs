> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neappextensionconfiguration/accept(connection:)

# accept(connection:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Accepts incoming XPC connections from the host process.

## Declaration

```swift
nonisolated func accept(connection: NSXPCConnection) -> Bool
```

## Parameters

- `connection`: The incoming XPC connection.

<a id="discussion"></a>

## Discussion

The framework calls this method. You don’t need to call it in your app extension.
