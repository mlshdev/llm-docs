> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/sendtoremoteworkoutsession(data:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/sendtoremoteworkoutsession(data:completion:))

# sendToRemoteWorkoutSession(data:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sends the provided data to the remote workout session.

## Declaration

```swift
func sendToRemoteWorkoutSession(data: Data, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func sendToRemoteWorkoutSession(data: Data) async throws
```

## Parameters

- `data`: A data object that contains the data your app is sending to the remote workout session.
- `completion`: A block that the system calls when the send attempt is complete. The system passes the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully sent the data.
  - **`error`**: If `sucess` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to send data to your remote workout session. You can send data from either the [HKWorkoutSessionType.mirrored](../hkworkoutsessiontype/mirrored.md) or [HKWorkoutSessionType.primary](../hkworkoutsessiontype/primary.md) session.

```swift
let archivedData = try? NSKeyedArchiver.archivedData(withRootObject: data, requiringSecureCoding: true)
guard let archivedData = archivedData, !archivedData.isEmpty else {
    // Handle the error here.
    fatalError("*** Encoded data is empty ***")
}

// Send the data to the companion iPhone.
Task {
    do {
        try await session.sendToRemoteWorkoutSession(data: archivedData)
    }
    catch {
        // Handle the error here.
        fatalError("*** An error occurred while sending the health data to the companion iPhone: \(error.localizedDescription) ***")
    }
}
```

## See Also

### Working with remote workout sessions

- [startMirroringToCompanionDevice(completion:)](startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [stopMirroringToCompanionDevice(completion:)](stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.

# sendDataToRemoteWorkoutSession:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sends the provided data to the remote workout session.

## Declaration

```objectivec
- (void) sendDataToRemoteWorkoutSession:(NSData *) data completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `data`: A data object that contains the data your app is sending to the remote workout session.
- `completion`: A block that the system calls when the send attempt is complete. The system passes the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully sent the data.
  - **`error`**: If `sucess` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to send data to your remote workout session. You can send data from either the [HKWorkoutSessionTypeMirrored](../hkworkoutsessiontype/mirrored.md) or [HKWorkoutSessionTypePrimary](../hkworkoutsessiontype/primary.md) session.

```swift
let archivedData = try? NSKeyedArchiver.archivedData(withRootObject: data, requiringSecureCoding: true)
guard let archivedData = archivedData, !archivedData.isEmpty else {
    // Handle the error here.
    fatalError("*** Encoded data is empty ***")
}

// Send the data to the companion iPhone.
Task {
    do {
        try await session.sendToRemoteWorkoutSession(data: archivedData)
    }
    catch {
        // Handle the error here.
        fatalError("*** An error occurred while sending the health data to the companion iPhone: \(error.localizedDescription) ***")
    }
}
```

## See Also

### Working with remote workout sessions

- [startMirroringToCompanionDeviceWithCompletion:](startmirroringtocompaniondevice%28completion_%29.md): Starts mirroring the workout session to the companion iOS device.
- [stopMirroringToCompanionDeviceWithCompletion:](stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.
