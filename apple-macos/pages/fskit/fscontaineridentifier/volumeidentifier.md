> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscontaineridentifier/volumeidentifier

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
