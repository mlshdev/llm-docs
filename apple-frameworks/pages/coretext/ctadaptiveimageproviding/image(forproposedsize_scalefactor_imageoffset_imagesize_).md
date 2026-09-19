> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretext/ctadaptiveimageproviding/image(forproposedsize:scalefactor:imageoffset:imagesize:)

# image(forProposedSize:scaleFactor:imageOffset:imageSize:) (Swift)

**Framework:** Core Text  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

## Declaration

```swift
func image(forProposedSize proposedSize: CGSize, scaleFactor: CGFloat, imageOffset outImageOffset: UnsafeMutablePointer<CGPoint>, imageSize outImageSize: UnsafeMutablePointer<CGSize>) -> CGImage?
```

# imageForProposedSize:scaleFactor:imageOffset:imageSize: (Objective-C)

**Framework:** Core Text  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
- (CGImageRef) imageForProposedSize:(CGSize) proposedSize scaleFactor:(CGFloat) scaleFactor imageOffset:(CGPoint *) outImageOffset imageSize:(CGSize *) outImageSize;
```
