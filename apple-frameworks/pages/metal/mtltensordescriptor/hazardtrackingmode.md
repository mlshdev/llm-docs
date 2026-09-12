> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/hazardtrackingmode](https://developer.apple.com/documentation/metal/mtltensordescriptor/hazardtrackingmode)

# hazardTrackingMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the hazard tracking of tensors you create with this descriptor.

## Declaration

```swift
var hazardTrackingMode: MTLHazardTrackingMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLHazardTrackingMode.default](../mtlhazardtrackingmode/default.md).

# hazardTrackingMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the hazard tracking of tensors you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLHazardTrackingMode hazardTrackingMode;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLHazardTrackingModeDefault](../mtlhazardtrackingmode/default.md).
