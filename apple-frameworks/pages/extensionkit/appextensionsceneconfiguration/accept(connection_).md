> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionsceneconfiguration/accept(connection:)](https://developer.apple.com/documentation/extensionkit/appextensionsceneconfiguration/accept(connection:))

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
