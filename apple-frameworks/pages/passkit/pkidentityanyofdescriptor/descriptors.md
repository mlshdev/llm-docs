> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkidentityanyofdescriptor/descriptors

# descriptors (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Set of requested descriptors for the composite document descriptor.

## Declaration

```swift
var descriptors: [any PKIdentityDocumentDescriptor] { get }
```

# descriptors (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Set of requested descriptors for the composite document descriptor.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<PKIdentityDocumentDescriptor>> * descriptors;
```
