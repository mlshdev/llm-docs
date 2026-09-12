> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/blockedidentities](https://developer.apple.com/documentation/cloudkit/ckshare/blockedidentities)

# blockedIdentities (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A list of users blocked from requesting access to this share.

## Declaration

```swift
var blockedIdentities: [CKShare.BlockedIdentity] { get }
```

<a id="discussion"></a>

## Discussion

Identities remain in this list until an owner or administrator calls [unblockIdentities(\_:)](unblockidentities%28__%29.md).

# blockedIdentities (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A list of users blocked from requesting access to this share.

## Declaration

```objectivec
@property (copy, readonly) NSArray<CKShareBlockedIdentity *> * blockedIdentities;
```

<a id="discussion"></a>

## Discussion

Identities remain in this list until an owner or administrator calls [unblockIdentities:](unblockidentities%28__%29.md).
