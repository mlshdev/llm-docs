> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits/isknownhandle(_:)](https://developer.apple.com/documentation/permissionkit/communicationlimits/isknownhandle(_:))

# isKnownHandle(\_:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A Boolean that checks if the system knows the given handle.

## Declaration

```swift
final func isKnownHandle(_ handle: CommunicationHandle) async -> Bool
```

## Parameters

- `handle`: A communication handle. This could be an email, phone number, username, or any other person identifier.

<a id="return-value"></a>

## Return Value

Whether or not the given handle is known by the system.

## See Also

### Checking known handles

- [knownHandles(in:)](knownhandles%28in_%29.md): Checks which handles in a given set are known to the system.
