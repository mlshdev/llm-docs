> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/edgemode/truncatekernel

# vImage.EdgeMode.truncateKernel

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An edge mode that uses only the part of the kernel that overlaps the image.

## Declaration

```swift
case truncateKernel
```

## See Also

### Enumeration Cases

- [vImage.EdgeMode.copyInPlace](copyinplace.md): An edge mode that copies the value of the edge pixel in the source to the destination.
- [vImage.EdgeMode.extend](extend.md): An edge mode that extends the edges of the image infinitely.
- [vImage.EdgeMode.fill(backgroundColor:)](fill%28backgroundcolor_%29.md): An edge mode that uses the background color for missing pixels.
