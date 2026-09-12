> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/identityproof/inclusionhashes](https://developer.apple.com/documentation/sharedwithyoucore/swperson/identityproof/inclusionhashes)

# inclusionHashes (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The hashes of missing Merkle tree nodes that can provide proof of inclusion.

## Declaration

```swift
var inclusionHashes: [Data] { get }
```

<a id="Discussion"></a>

## Discussion

The data contains an array of SHA256 hash of the user’s combined public identities.

## See Also

### Accessing attributes

- [publicKey](publickey.md): The public key of local device.
- [publicKeyIndex](publickeyindex.md): The index of the local public key in the Merkle tree.

# inclusionHashes (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The hashes of missing Merkle tree nodes that can provide proof of inclusion.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSData *> * inclusionHashes;
```

<a id="Discussion"></a>

## Discussion

The data contains an array of SHA256 hash of the user’s combined public identities.

## See Also

### Accessing attributes

- [publicKey](publickey.md): The public key of local device.
- [publicKeyIndex](publickeyindex.md): The index of the local public key in the Merkle tree.
