> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionkit/appextensionsceneconfiguration/accept(connection:)

# accept(connection:)

**Framework:** ExtensionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A closure the framework calls when a host tries to connect to this extension.

## Declaration

```swift
nonisolated func accept(connection: NSXPCConnection) -> Bool
```

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the extension accepts the connection.

<a id="discussion"></a>

## Discussion

- connection: The incoming XPC connection object.
