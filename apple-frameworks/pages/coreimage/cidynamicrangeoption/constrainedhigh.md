> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cidynamicrangeoption/constrainedhigh

# constrainedHigh (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.

## Declaration

```swift
static let constrainedHigh: CIDynamicRangeOption
```

<a id="discussion"></a>

## Discussion

For best results, images should contain `contentAverageLightLevel` metadata.

## See Also

### Enumeration Cases

- [standard](standard.md): Use Standard dynamic range.
- [high](high.md): Use High dynamic range.

# kCIDynamicRangeConstrainedHigh (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.

## Declaration

```objectivec
extern CIDynamicRangeOption const kCIDynamicRangeConstrainedHigh;
```

<a id="discussion"></a>

## Discussion

For best results, images should contain `contentAverageLightLevel` metadata.

## See Also

### Enumeration Cases

- [kCIDynamicRangeStandard](standard.md): Use Standard dynamic range.
- [kCIDynamicRangeHigh](high.md): Use High dynamic range.
