> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/mode/common](https://developer.apple.com/documentation/foundation/runloop/mode/common)

# common (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pseudo-mode that includes one or more other run loop modes.

## Declaration

```swift
static let common: RunLoop.Mode
```

<a id="Discussion"></a>

## Discussion

When you add an object to a run loop using this mode, the runloop monitors the object when running in any of the common modes. For details about adding a runloop mode to the set of common modes, see [CFRunLoopAddCommonMode(\_:\_:)](../../../corefoundation/cfrunloopaddcommonmode%28____%29.md).

## See Also

### System Run Loop Modes

- [default](default.md): The mode set to handle input sources other than connection objects.
- [eventTracking](eventtracking.md): The mode set when tracking events modally, such as a mouse-dragging loop.
- [modalPanel](modalpanel.md): The mode set when waiting for input from a modal panel, such as a save or open panel.
- [tracking](tracking.md): The mode set while tracking in controls takes place.

# NSRunLoopCommonModes (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pseudo-mode that includes one or more other run loop modes.

## Declaration

```objectivec
extern NSRunLoopMode const NSRunLoopCommonModes;
```

<a id="Discussion"></a>

## Discussion

When you add an object to a run loop using this mode, the runloop monitors the object when running in any of the common modes. For details about adding a runloop mode to the set of common modes, see [CFRunLoopAddCommonMode](../../../corefoundation/cfrunloopaddcommonmode%28____%29.md).

## See Also

### System Run Loop Modes

- [NSDefaultRunLoopMode](default.md): The mode set to handle input sources other than connection objects.
