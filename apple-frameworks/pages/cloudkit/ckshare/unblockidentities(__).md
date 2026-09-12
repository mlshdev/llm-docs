> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/unblockidentities(_:)](https://developer.apple.com/documentation/cloudkit/ckshare/unblockidentities(_:))

# unblockIdentities(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unblocks previously blocked users, allowing them to request access again.

## Declaration

```swift
func unblockIdentities(_ blockedIdentities: [CKShare.BlockedIdentity])
```

## Parameters

- `blockedIdentities`: An array of [CKShare.BlockedIdentity](blockedidentity.md) objects to unblock.

<a id="discussion"></a>

## Discussion

Use this method to remove specified identities from the [blockedIdentities](blockedidentities.md) array. Unblocked identities can request access again if the [allowsAccessRequests](allowsaccessrequests.md) is enabled.

To persist this change, save the share to the server after calling this method.

Only the share owner or an administrator can invoke this method. Attempts by other participants result in an exception.

# unblockIdentities: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unblocks previously blocked users, allowing them to request access again.

## Declaration

```objectivec
- (void) unblockIdentities:(NSArray<CKShareBlockedIdentity *> *) blockedIdentities;
```

## Parameters

- `blockedIdentities`: An array of [CKShareBlockedIdentity](blockedidentity.md) objects to unblock.

<a id="discussion"></a>

## Discussion

Use this method to remove specified identities from the [blockedIdentities](blockedidentities.md) array. Unblocked identities can request access again if the [allowsAccessRequests](allowsaccessrequests.md) is enabled.

To persist this change, save the share to the server after calling this method.

Only the share owner or an administrator can invoke this method. Attempts by other participants result in an exception.
