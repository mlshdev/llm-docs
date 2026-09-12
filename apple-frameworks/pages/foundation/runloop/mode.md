> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/mode](https://developer.apple.com/documentation/foundation/runloop/mode)

# RunLoop.Mode (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modes that a run loop operates in.

## Declaration

```swift
struct Mode
```

<a id="Discussion"></a>

## Discussion

[NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) defines additional run loop modes, including the following:

- [modalPanel](mode/modalpanel.md)
- [eventTracking](mode/eventtracking.md)

## Topics

### System Run Loop Modes

- [common](mode/common.md): A pseudo-mode that includes one or more other run loop modes.
- [default](mode/default.md): The mode set to handle input sources other than connection objects.
- [eventTracking](mode/eventtracking.md): The mode set when tracking events modally, such as a mouse-dragging loop.
- [modalPanel](mode/modalpanel.md): The mode set when waiting for input from a modal panel, such as a save or open panel.
- [tracking](mode/tracking.md): The mode set while tracking in controls takes place.

### Run Loop Mode Creation

- [init(\_:)](mode/init%28__%29.md): Creates a run loop mode using the specified string value.
- [init(rawValue:)](mode/init%28rawvalue_%29.md): Creates a run loop mode using the specified raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Run Loops and Modes

- [current](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDate(forMode:)](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [main](main.md): Returns the run loop of the main thread.
- [getCFRunLoop()](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.

# NSRunLoopMode (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modes that a run loop operates in.

## Declaration

```objectivec
typedef NSString * NSRunLoopMode;
```

<a id="Discussion"></a>

## Discussion

[NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) defines additional run loop modes, including the following:

- [modalPanel](mode/modalpanel.md)
- [eventTracking](mode/eventtracking.md)

## Topics

### System Run Loop Modes

- [NSRunLoopCommonModes](mode/common.md): A pseudo-mode that includes one or more other run loop modes.
- [NSDefaultRunLoopMode](mode/default.md): The mode set to handle input sources other than connection objects.

## See Also

### Accessing Run Loops and Modes

- [currentRunLoop](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDateForMode:](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [mainRunLoop](main.md): Returns the run loop of the main thread.
- [getCFRunLoop](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
