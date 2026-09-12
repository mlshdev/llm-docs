> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/blockrequesters(_:)](https://developer.apple.com/documentation/cloudkit/ckshare/blockrequesters(_:))

# blockRequesters(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Blocks specified users from requesting access to this share.

## Declaration

```swift
func blockRequesters(_ requesters: [CKShare.AccessRequester])
```

## Parameters

- `requesters`: An array of [CKShare.AccessRequester](accessrequester.md) objects to block.

<a id="discussion"></a>

## Discussion

Blocking prevents users from submitting future access requests and removes existing participants from the share. Blocked requesters appear in the [blockedIdentities](blockedidentities.md) array.

To persist this change, save the share to the server after calling this method.

Only the share owner or an administrator can invoke this method. Attempts by other participants result in an exception.

# blockRequesters: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Blocks specified users from requesting access to this share.

## Declaration

```objectivec
- (void) blockRequesters:(NSArray<CKShareAccessRequester *> *) requesters;
```

## Parameters

- `requesters`: An array of [CKShareAccessRequester](accessrequester.md) objects to block.

<a id="discussion"></a>

## Discussion

Blocking prevents users from submitting future access requests and removes existing participants from the share. Blocked requesters appear in the [blockedIdentities](blockedidentities.md) array.

To persist this change, save the share to the server after calling this method.

Only the share owner or an administrator can invoke this method. Attempts by other participants result in an exception.
