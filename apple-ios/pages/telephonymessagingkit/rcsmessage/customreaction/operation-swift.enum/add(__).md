> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/customreaction/operation-swift.enum/add(_:)

# RCSMessage.CustomReaction.Operation.add(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 27.0+

An operation type for adding a custom reaction.

## Declaration

```swift
case add(RCSFileTransferMetadata)
```

<a id="discussion"></a>

## Discussion

The associated value is an instance of [RCSFileTransferMetadata](../../../rcsfiletransfermetadata.md) that you obtain as the result of calling [upload(\_:)](../../../rcsservice/upload%28__%29.md).
