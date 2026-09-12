> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/identityproof/publickeyindex](https://developer.apple.com/documentation/sharedwithyoucore/swperson/identityproof/publickeyindex)

# publicKeyIndex (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The index of the local public key in the Merkle tree.

## Declaration

```swift
var publicKeyIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

This data can be used to determine if the node is the left or the right child in the tree.

## See Also

### Accessing attributes

- [inclusionHashes](inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKey](publickey.md): The public key of local device.

# publicKeyIndex (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The index of the local public key in the Merkle tree.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSUInteger publicKeyIndex;
```

<a id="Discussion"></a>

## Discussion

This data can be used to determine if the node is the left or the right child in the tree.

## See Also

### Accessing attributes

- [inclusionHashes](inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKey](publickey.md): The public key of local device.
