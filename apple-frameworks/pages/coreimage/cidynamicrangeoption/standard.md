> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidynamicrangeoption/standard](https://developer.apple.com/documentation/coreimage/cidynamicrangeoption/standard)

# standard (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use Standard dynamic range.

## Declaration

```swift
static let standard: CIDynamicRangeOption
```

<a id="discussion"></a>

## Discussion

Images with `contentHeadroom` metadata will be tone mapped to a maximum pixel value of 1.0.

## See Also

### Enumeration Cases

- [constrainedHigh](constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [high](high.md): Use High dynamic range.

# kCIDynamicRangeStandard (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use Standard dynamic range.

## Declaration

```objectivec
extern CIDynamicRangeOption const kCIDynamicRangeStandard;
```

<a id="discussion"></a>

## Discussion

Images with `contentHeadroom` metadata will be tone mapped to a maximum pixel value of 1.0.

## See Also

### Enumeration Cases

- [kCIDynamicRangeConstrainedHigh](constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [kCIDynamicRangeHigh](high.md): Use High dynamic range.
