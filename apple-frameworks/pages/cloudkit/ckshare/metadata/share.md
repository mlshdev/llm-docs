> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckshare/metadata/share

# share (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share that owns the metadata.

## Declaration

```swift
@NSCopying var share: CKShare { get }
```

## See Also

### Accessing the Share

- [containerIdentifier](containeridentifier.md): The ID of the share’s container.
- [ownerIdentity](owneridentity.md): The identity of the share’s owner.

# share (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share that owns the metadata.

## Declaration

```objectivec
@property (copy, readonly) CKShare * share;
```

## See Also

### Accessing the Share

- [containerIdentifier](containeridentifier.md): The ID of the share’s container.
- [ownerIdentity](owneridentity.md): The identity of the share’s owner.
