> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swperson/identity/init(roothash:)

# init(rootHash:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes the hash.

## Declaration

```swift
init(rootHash: Data)
```

## Parameters

- `rootHash`: The root hash of the tree that represents the individual’s identity.

# initWithRootHash: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes the hash.

## Declaration

```objectivec
- (instancetype) initWithRootHash:(NSData *) rootHash;
```

## Parameters

- `rootHash`: The root hash of the tree that represents the individual’s identity.
