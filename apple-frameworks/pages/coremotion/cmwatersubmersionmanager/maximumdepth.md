> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanager/maximumdepth](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanager/maximumdepth)

# maximumDepth (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The maximum depth supported by the water submersion manager.

## Declaration

```swift
var maximumDepth: Measurement<UnitLength>? { get }
```

<a id="Discussion"></a>

## Discussion

To access data for dives with a maximum depth of 6 m, add the Shallow Depth and Pressure capability to your app. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

To enable a maximum depth of 40 m, you must apply for the full Submerged Depth and Pressure entitlement. For more information, see [Express interest in the Submerged Depth and Pressure API](https://developer.apple.com/contact/request/submerged-depth-pressure-api/).

# maximumDepth (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The maximum depth supported by the water submersion manager.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMeasurement<NSUnitLength *> * maximumDepth;
```

<a id="Discussion"></a>

## Discussion

To access data for dives with a maximum depth of 6 m, add the Shallow Depth and Pressure capability to your app. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

To enable a maximum depth of 40 m, you must apply for the full Submerged Depth and Pressure entitlement. For more information, see [Express interest in the Submerged Depth and Pressure API](https://developer.apple.com/contact/request/submerged-depth-pressure-api/).
