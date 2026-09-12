> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisystemtonemap/preferreddynamicrange](https://developer.apple.com/documentation/coreimage/cisystemtonemap/preferreddynamicrange)

# preferredDynamicRange (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies the preferred dynamic range behavior of the tone mapping. The value should be kCIDynamicRangeStandard, kCIDynamicRangeConstrainedHigh, kCIDynamicRangeHigh or nil.  If nil then it will behave as kCIDynamicRangeHigh.

## Declaration

```swift
var preferredDynamicRange: CIDynamicRangeOption? { get set }
```

# preferredDynamicRange (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies the preferred dynamic range behavior of the tone mapping. The value should be kCIDynamicRangeStandard, kCIDynamicRangeConstrainedHigh, kCIDynamicRangeHigh or nil.  If nil then it will behave as kCIDynamicRangeHigh.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIDynamicRangeOption preferredDynamicRange;
```
