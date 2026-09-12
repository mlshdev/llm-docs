> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession/configuration/iscoachingenabled](https://developer.apple.com/documentation/roomplan/roomcapturesession/configuration/iscoachingenabled)

# isCoachingEnabled

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An option that indicates that the session periodically provides user instructions.

## Declaration

```swift
var isCoachingEnabled: Bool
```

<a id="discussion"></a>

## Discussion

When you enable this option and the framework determines the device needs a particular movement or perspective, it calls your delegate’s [captureSession(\_:didProvide:)](../../roomcapturesessiondelegate/capturesession%28__didprovide_%29.md) and provides a particular [RoomCaptureSession.Instruction](../instruction.md) that you can display to the user.

The default value is `true`.
