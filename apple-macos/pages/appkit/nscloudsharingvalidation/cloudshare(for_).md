> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscloudsharingvalidation/cloudshare(for:)

# cloudShare(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the Cloud share object that corresponds to the specified item, if one exists.

## Declaration

```swift
@MainActor func cloudShare(for item: any NSValidatedUserInterfaceItem) -> CKShare?
```

# cloudShareForUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the Cloud share object that corresponds to the specified item, if one exists.

## Declaration

```objectivec
- (CKShare *) cloudShareForUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```
