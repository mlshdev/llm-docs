> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtllogicaltophysicalcolorattachmentmap/setphysicalindex:forlogicalindex:

# setPhysicalIndex:forLogicalIndex:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Maps a physical color attachment index to a logical index.

## Declaration

```objectivec
- (void) setPhysicalIndex:(NSUInteger) physicalIndex forLogicalIndex:(NSUInteger) logicalIndex;
```

## Parameters

- `physicalIndex`: Index of the color attachment’s physical mapping.
- `logicalIndex`: Index of the color attachment’s logical mapping.
