> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:diddisconnectfromremotedevicewitherror:)](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate/workoutsession(_:diddisconnectfromremotedevicewitherror:))

# workoutSession(\_:didDisconnectFromRemoteDeviceWithError:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

Tells the delegate that the mirrored workout session disconnected from the primary session.

## Declaration

```swift
optional func workoutSession(_ workoutSession: HKWorkoutSession, didDisconnectFromRemoteDeviceWithError error: (any Error)?)
```

## Parameters

- `workoutSession`: The mirrored workout session that disconnected.
- `error`: If an error caused the disconnection, then this parameter contains the error value. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

After the system calls this method, the provided workout session is no longer valid, and you can no longer use it.

```swift
func clearWorkoutSession() {
    state = .notRunning
    session = nil
}

nonisolated func workoutSession(_ workoutSession: HKWorkoutSession, didDisconnectFromRemoteDeviceWithError error: Error?) {
    Task {
        // Clear the old session.
        await clearWorkoutSession()
    }

    logger.debug("*** Remote workout session disconnected. ***")
    if let error {
        fatalError("*** Disconnected with an error: \(error.localizedDescription) ***")
    }
}
```

If the primary workout session is still running, it automatically tries to reconnect. If successful, the companion iOS device calls the [workoutSessionMirroringStartHandler](../hkhealthstore/workoutsessionmirroringstarthandler.md) block again, passing in a new, valid [HKWorkoutSession](../hkworkoutsession.md) instance.

## See Also

### Working with mirrored sessions

- [workoutSession(\_:didReceiveDataFromRemoteWorkoutSession:)](workoutsession%28__didreceivedatafromremoteworkoutsession_%29.md): Passes data from the remote workout session to the session delegate.

# workoutSession:didDisconnectFromRemoteDeviceWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

Tells the delegate that the mirrored workout session disconnected from the primary session.

## Declaration

```objectivec
- (void) workoutSession:(HKWorkoutSession *) workoutSession didDisconnectFromRemoteDeviceWithError:(NSError *) error;
```

## Parameters

- `workoutSession`: The mirrored workout session that disconnected.
- `error`: If an error caused the disconnection, then this parameter contains the error value. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

After the system calls this method, the provided workout session is no longer valid, and you can no longer use it.

```swift
func clearWorkoutSession() {
    state = .notRunning
    session = nil
}

nonisolated func workoutSession(_ workoutSession: HKWorkoutSession, didDisconnectFromRemoteDeviceWithError error: Error?) {
    Task {
        // Clear the old session.
        await clearWorkoutSession()
    }

    logger.debug("*** Remote workout session disconnected. ***")
    if let error {
        fatalError("*** Disconnected with an error: \(error.localizedDescription) ***")
    }
}
```

If the primary workout session is still running, it automatically tries to reconnect. If successful, the companion iOS device calls the [workoutSessionMirroringStartHandler](../hkhealthstore/workoutsessionmirroringstarthandler.md) block again, passing in a new, valid [HKWorkoutSession](../hkworkoutsession.md) instance.

## See Also

### Working with mirrored sessions

- [workoutSession:didReceiveDataFromRemoteWorkoutSession:](workoutsession%28__didreceivedatafromremoteworkoutsession_%29.md): Passes data from the remote workout session to the session delegate.
