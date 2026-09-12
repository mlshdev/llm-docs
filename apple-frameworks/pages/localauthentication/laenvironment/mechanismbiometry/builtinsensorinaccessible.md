> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanismbiometry/builtinsensorinaccessible](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismbiometry/builtinsensorinaccessible)

# builtInSensorInaccessible (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var builtInSensorInaccessible: Bool { get }
```

<a id="discussion"></a>

## Discussion

Whether the built in biometric sensor is inaccessible in the current configuration, preventing the use of biometry.

Currently, the only example of this is a Clamshell Mode on macOS. The user will be not able to use Touch ID if the MacBook lid is closed while connected to external monitor and keyboard, unless the external keyboard has Touch ID.

# builtInSensorInaccessible (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL builtInSensorInaccessible;
```

<a id="discussion"></a>

## Discussion

Whether the built in biometric sensor is inaccessible in the current configuration, preventing the use of biometry.

Currently, the only example of this is a Clamshell Mode on macOS. The user will be not able to use Touch ID if the MacBook lid is closed while connected to external monitor and keyboard, unless the external keyboard has Touch ID.
