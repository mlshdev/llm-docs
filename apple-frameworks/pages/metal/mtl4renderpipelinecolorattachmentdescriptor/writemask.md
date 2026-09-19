> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptor/writemask

# writeMask (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the color write mask.

## Declaration

```swift
var writeMask: MTLColorWriteMask { get set }
```

<a id="discussion"></a>

## Discussion

This property defaults to [all](../mtlcolorwritemask/all.md).

# writeMask (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the color write mask.

## Declaration

```objectivec
@property (nonatomic) MTLColorWriteMask writeMask;
```

<a id="discussion"></a>

## Discussion

This property defaults to [MTLColorWriteMaskAll](../mtlcolorwritemask/all.md).
