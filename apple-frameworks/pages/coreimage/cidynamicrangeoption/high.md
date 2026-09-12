> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidynamicrangeoption/high](https://developer.apple.com/documentation/coreimage/cidynamicrangeoption/high)

# high (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use High dynamic range.

## Declaration

```swift
static let high: CIDynamicRangeOption
```

<a id="discussion"></a>

## Discussion

The provides the best HDR quality and needs to be reserved for situations where the user is focused on the media, such as larger views in an image editing/viewing app, or annotating/drawing with HDR colors

## See Also

### Enumeration Cases

- [standard](standard.md): Use Standard dynamic range.
- [constrainedHigh](constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.

# kCIDynamicRangeHigh (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Use High dynamic range.

## Declaration

```objectivec
extern CIDynamicRangeOption const kCIDynamicRangeHigh;
```

<a id="discussion"></a>

## Discussion

The provides the best HDR quality and needs to be reserved for situations where the user is focused on the media, such as larger views in an image editing/viewing app, or annotating/drawing with HDR colors

## See Also

### Enumeration Cases

- [kCIDynamicRangeStandard](standard.md): Use Standard dynamic range.
- [kCIDynamicRangeConstrainedHigh](constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
