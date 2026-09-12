> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontaineridentifier/volumeidentifier](https://developer.apple.com/documentation/fskit/fscontaineridentifier/volumeidentifier)

# volumeIdentifier (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The volume identifier associated with the container.

## Declaration

```swift
@NSCopying var volumeIdentifier: FSVolume.Identifier { get }
```

<a id="discussion"></a>

## Discussion

For unary file systems, the volume identifier is the same as the container identifier.

# volumeIdentifier (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The volume identifier associated with the container.

## Declaration

```objectivec
@property (copy, readonly) FSVolumeIdentifier * volumeIdentifier;
```

<a id="discussion"></a>

## Discussion

For unary file systems, the volume identifier is the same as the container identifier.
