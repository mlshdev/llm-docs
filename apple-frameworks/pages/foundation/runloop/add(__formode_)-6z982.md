> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/add(_:formode:)-6z982](https://developer.apple.com/documentation/foundation/runloop/add(_:formode:)-6z982)

# add(\_:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a port as an input source to the specified mode of the run loop.

## Declaration

```swift
func add(_ aPort: Port, forMode mode: RunLoop.Mode)
```

## Parameters

- `aPort`: The port to add to the receiver.
- `mode`: The mode in which to add `aPort`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

This method schedules the port with the receiver. You can add a port to multiple input modes. When the receiver is running in the specified mode, it dispatches messages destined for that port to the port’s designated handler routine.

## See Also

### Managing Ports

- [remove(\_:forMode:)](remove%28__formode_%29.md): Removes a port from the specified input mode of the run loop.

# addPort:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a port as an input source to the specified mode of the run loop.

## Declaration

```objectivec
- (void) addPort:(NSPort *) aPort forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aPort`: The port to add to the receiver.
- `mode`: The mode in which to add `aPort`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

This method schedules the port with the receiver. You can add a port to multiple input modes. When the receiver is running in the specified mode, it dispatches messages destined for that port to the port’s designated handler routine.

## See Also

### Managing Ports

- [removePort:forMode:](remove%28__formode_%29.md): Removes a port from the specified input mode of the run loop.
