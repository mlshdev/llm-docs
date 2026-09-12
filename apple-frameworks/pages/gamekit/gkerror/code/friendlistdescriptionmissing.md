> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/code/friendlistdescriptionmissing](https://developer.apple.com/documentation/gamekit/gkerror/code/friendlistdescriptionmissing)

# GKError.Code.friendListDescriptionMissing (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Access to the local player’s list of friends denied for lack of a reason.

## Declaration

```swift
case friendListDescriptionMissing
```

<a id="Discussion"></a>

## Discussion

If your game wants access to the player’s friends, provide a reason by adding the [NSGKFriendListUsageDescription](../../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key to the information property list.

## See Also

### Friend List Errors

- [GKError.Code.friendListRestricted](friendlistrestricted.md): Access to the local player’s list of friends restricted.
- [GKError.Code.friendListDenied](friendlistdenied.md): Access to the local player’s list of friends denied.
- [GKError.Code.friendRequestNotAvailable](friendrequestnotavailable.md): The player can’t send a friend request at this time from this device.

# GKErrorFriendListDescriptionMissing (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Access to the local player’s list of friends denied for lack of a reason.

## Declaration

```objectivec
GKErrorFriendListDescriptionMissing
```

<a id="Discussion"></a>

## Discussion

If your game wants access to the player’s friends, provide a reason by adding the [NSGKFriendListUsageDescription](../../../bundleresources/information-property-list/nsgkfriendlistusagedescription.md) key to the information property list.

## See Also

### Friend List Errors

- [GKErrorFriendListRestricted](friendlistrestricted.md): Access to the local player’s list of friends restricted.
- [GKErrorFriendListDenied](friendlistdenied.md): Access to the local player’s list of friends denied.
- [GKErrorFriendRequestNotAvailable](friendrequestnotavailable.md): The player can’t send a friend request at this time from this device.
