> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/getcfrunloop()](https://developer.apple.com/documentation/foundation/runloop/getcfrunloop())

# getCFRunLoop() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s underlying run loop object.

## Declaration

```swift
func getCFRunLoop() -> CFRunLoop
```

<a id="return-value"></a>

## Return Value

The receiver’s underlying [CFRunLoop](../../corefoundation/cfrunloop.md) object.

<a id="Discussion"></a>

## Discussion

You can use the returned run loop to configure the current run loop using Core Foundation function calls. For example, you might use this function to set up a run loop observer.

## See Also

### Accessing Run Loops and Modes

- [current](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDate(forMode:)](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [main](main.md): Returns the run loop of the main thread.
- [RunLoop.Mode](mode.md): Modes that a run loop operates in.

# getCFRunLoop (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s underlying run loop object.

## Declaration

```objectivec
- (CFRunLoopRef) getCFRunLoop;
```

<a id="return-value"></a>

## Return Value

The receiver’s underlying [CFRunLoopRef](../../corefoundation/cfrunloop.md) object.

<a id="Discussion"></a>

## Discussion

You can use the returned run loop to configure the current run loop using Core Foundation function calls. For example, you might use this function to set up a run loop observer.

## See Also

### Accessing Run Loops and Modes

- [currentRunLoop](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDateForMode:](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [mainRunLoop](main.md): Returns the run loop of the main thread.
- [NSRunLoopMode](mode.md): Modes that a run loop operates in.
