> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/identityproof/publickey](https://developer.apple.com/documentation/sharedwithyoucore/swperson/identityproof/publickey)

# publicKey (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The public key of local device.

## Declaration

```swift
var publicKey: Data { get }
```

## See Also

### Accessing attributes

- [inclusionHashes](inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKeyIndex](publickeyindex.md): The index of the local public key in the Merkle tree.

# publicKey (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The public key of local device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * publicKey;
```

## See Also

### Accessing attributes

- [inclusionHashes](inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKeyIndex](publickeyindex.md): The index of the local public key in the Merkle tree.
