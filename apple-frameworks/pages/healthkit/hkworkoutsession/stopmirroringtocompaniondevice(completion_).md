> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/stopmirroringtocompaniondevice(completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/stopmirroringtocompaniondevice(completion:))

# stopMirroringToCompanionDevice(completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 10.0+

Stops mirroring the workout session to the companion iOS device.

## Declaration

```swift
func stopMirroringToCompanionDevice(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func stopMirroringToCompanionDevice() async throws
```

## Parameters

- `completion`: A block that the system calls when the stop request is complete. The system sets the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully stopped mirroring the session.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method in your watchOS app to stop the mirrored workout session on the companion iOS app. After the mirroring stops, the system calls the [workoutSession(\_:didDisconnectFromRemoteDeviceWithError:)](../hkworkoutsessiondelegate/workoutsession%28__diddisconnectfromremotedevicewitherror_%29.md) method on the iOS companion’s session delegate.

```swift
session.end()

// Stop the workout builder and save the workout data.
do {
    try await builder.endCollection(at: Date())
    try await builder.finishWorkout()
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while stoping the workout: \(error.localizedDescription) ***")
}

// Stop the mirrored workout on the iOS companion.
do {
    try await session.stopMirroringToCompanionDevice()
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while stoping the mirrored workout: \(error.localizedDescription) ***")
}
```

## See Also

### Working with remote workout sessions

- [startMirroringToCompanionDevice(completion:)](startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [sendToRemoteWorkoutSession(data:completion:)](sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.

# stopMirroringToCompanionDeviceWithCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 10.0+

Stops mirroring the workout session to the companion iOS device.

## Declaration

```objectivec
- (void) stopMirroringToCompanionDeviceWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: A block that the system calls when the stop request is complete. The system sets the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully stopped mirroring the session.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method in your watchOS app to stop the mirrored workout session on the companion iOS app. After the mirroring stops, the system calls the [workoutSession:didDisconnectFromRemoteDeviceWithError:](../hkworkoutsessiondelegate/workoutsession%28__diddisconnectfromremotedevicewitherror_%29.md) method on the iOS companion’s session delegate.

```swift
session.end()

// Stop the workout builder and save the workout data.
do {
    try await builder.endCollection(at: Date())
    try await builder.finishWorkout()
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while stoping the workout: \(error.localizedDescription) ***")
}

// Stop the mirrored workout on the iOS companion.
do {
    try await session.stopMirroringToCompanionDevice()
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while stoping the mirrored workout: \(error.localizedDescription) ***")
}
```

## See Also

### Working with remote workout sessions

- [startMirroringToCompanionDeviceWithCompletion:](startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [sendDataToRemoteWorkoutSession:completion:](sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.
