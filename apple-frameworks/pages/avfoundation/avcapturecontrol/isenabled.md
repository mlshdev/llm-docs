> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturecontrol/isenabled](https://developer.apple.com/documentation/avfoundation/avcapturecontrol/isenabled)

# isEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether this control supports user interaction.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Controls support user interaction by default. You can temporarily disable user interaction on a control without removing it from a capture session by setting it’s enabled state to `false`.

The default value is `true`.

> **Note**

>  Apps can programmatically change the value of a control while in a disabled state.

# enabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether this control supports user interaction.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Controls support user interaction by default. You can temporarily disable user interaction on a control without removing it from a capture session by setting it’s enabled state to `false`.

The default value is `true`.

> **Note**

>  Apps can programmatically change the value of a control while in a disabled state.
