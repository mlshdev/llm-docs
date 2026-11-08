> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcuiautomation/xcuihinge/angle

# angle (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The hinge’s current angle, in radians.

## Declaration

```swift
var angle: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property can cause the device to switch between displays. Reading the angle alone does not tell you which layout your app uses.

> **Note**

> On physical devices, programmatically opening the hinge while the device is closed is not supported and results in a test failure.

# angle (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The hinge’s current angle, in radians.

## Declaration

```objectivec
@property (nonatomic) CGFloat angle;
```

<a id="discussion"></a>

## Discussion

Setting this property can cause the device to switch between displays. Reading the angle alone does not tell you which layout your app uses.

> **Note**

> On physical devices, programmatically opening the hinge while the device is closed is not supported and results in a test failure.
