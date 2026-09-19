> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swperson/identity/roothash

# rootHash (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The root hash of the tree that represents the individual’s identity.

## Declaration

```swift
var rootHash: Data { get }
```

## Mentioned In

- [Adding custom collaboration to your app](../../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="Discussion"></a>

## Discussion

The data contains a SHA256 hash of the user’s combined public identities.

# rootHash (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The root hash of the tree that represents the individual’s identity.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * rootHash;
```

## Mentioned In

- [Adding custom collaboration to your app](../../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="Discussion"></a>

## Discussion

The data contains a SHA256 hash of the user’s combined public identities.
