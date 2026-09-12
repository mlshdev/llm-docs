> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits/knownhandles(in:)](https://developer.apple.com/documentation/permissionkit/communicationlimits/knownhandles(in:))

# knownHandles(in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Checks which handles in a given set are known to the system.

## Declaration

```swift
final func knownHandles(in handles: Set<CommunicationHandle>) async -> Set<CommunicationHandle>
```

## Parameters

- `handles`: A set of communication handles, such as email addresses, phone numbers, user names, or any other set of personal identifiers.

<a id="return-value"></a>

## Return Value

A subset of the given handles known to the system.

## Mentioned In

- [Creating a communication experience](../creating-a-communication-experience.md)

<a id="discussion"></a>

## Discussion

> **Note**

> This method requires that the calling app have a non-nil, nonempty bundle identifier.

## See Also

### Checking known handles

- [isKnownHandle(\_:)](isknownhandle%28__%29.md): A Boolean that checks if the system knows the given handle.
