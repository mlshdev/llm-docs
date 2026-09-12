> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/frictionslip](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/frictionslip)

# frictionSlip (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The traction between the wheel and any surface in contact with it.

## Declaration

```swift
var frictionSlip: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`. Lower values result in better traction, and higher values make the wheel more likely to slip (causing it to spin freely instead of moving the vehicle).

# frictionSlip (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The traction between the wheel and any surface in contact with it.

## Declaration

```objectivec
@property CGFloat frictionSlip;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`. Lower values result in better traction, and higher values make the wheel more likely to slip (causing it to spin freely instead of moving the vehicle).
