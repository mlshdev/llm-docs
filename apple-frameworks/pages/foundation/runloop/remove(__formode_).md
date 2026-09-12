> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/remove(_:formode:)](https://developer.apple.com/documentation/foundation/runloop/remove(_:formode:))

# remove(\_:forMode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a port from the specified input mode of the run loop.

## Declaration

```swift
func remove(_ aPort: Port, forMode mode: RunLoop.Mode)
```

## Parameters

- `aPort`: The port to remove from the receiver.
- `mode`: The mode from which to remove `aPort`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

If you added the port to multiple input modes, you must remove it from each mode separately.

## See Also

### Managing Ports

- [add(\_:forMode:)](add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.

# removePort:forMode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a port from the specified input mode of the run loop.

## Declaration

```objectivec
- (void) removePort:(NSPort *) aPort forMode:(NSRunLoopMode) mode;
```

## Parameters

- `aPort`: The port to remove from the receiver.
- `mode`: The mode from which to remove `aPort`. You may specify a custom mode or use one of the modes listed in `Run Loop Modes`.

<a id="Discussion"></a>

## Discussion

If you added the port to multiple input modes, you must remove it from each mode separately.

## See Also

### Managing Ports

- [addPort:forMode:](add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.
