> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/startmirroringtocompaniondevice(completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/startmirroringtocompaniondevice(completion:))

# startMirroringToCompanionDevice(completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 10.0+

Starts mirroring the workout session to the companion iOS device.

## Declaration

```swift
func startMirroringToCompanionDevice(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func startMirroringToCompanionDevice() async throws
```

## Parameters

- `completion`: A block that the system calls when the start request is complete. The system sets the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully started mirroring the session.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method in your watchOS app to start a mirrored workout session on the companion iOS app. If your iOS app isn’t running, the system launches it in the background. The iOS companion app must assign a completion handler to its HealthKit Store’s [workoutSessionMirroringStartHandler](../hkhealthstore/workoutsessionmirroringstarthandler.md) property to process the incoming session.

> **Important**

>  This method fails if you call it on a workout session that ended.

```swift
let configuration = HKWorkoutConfiguration()
configuration.activityType = .running
configuration.locationType = .outdoor

let session: HKWorkoutSession
do {
    session = try HKWorkoutSession(healthStore: store,
                                   configuration: configuration)
} catch {
    // Handle failure here.
    fatalError("*** An error occurred: \(error.localizedDescription) ***")
}

let builder = session.associatedWorkoutBuilder()

let source = HKLiveWorkoutDataSource(healthStore: store,
                                     workoutConfiguration: configuration)

source.enableCollection(for: HKQuantityType(.stepCount), predicate: nil)
builder.dataSource = source

session.delegate = self
builder.delegate = self

self.session = session
self.builder = builder

let start = Date()

// Start the mirrored session on the companion iPhone.
do {
    try await session.startMirroringToCompanionDevice()
}
catch {
    fatalError("*** Unable to start the mirrored workout: \(error.localizedDescription) ***")
}

// Start the workout session.
session.startActivity(with: start)

do {
    try await builder.beginCollection(at: start)
} catch {
    fatalError("*** An error occurred while starting the workout: \(error.localizedDescription) ***")
}
```

## See Also

### Working with remote workout sessions

- [stopMirroringToCompanionDevice(completion:)](stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.
- [sendToRemoteWorkoutSession(data:completion:)](sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.

# startMirroringToCompanionDeviceWithCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 10.0+

Starts mirroring the workout session to the companion iOS device.

## Declaration

```objectivec
- (void) startMirroringToCompanionDeviceWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: A block that the system calls when the start request is complete. The system sets the following parameters:

  - **`success`**: A Boolean value that indicates whether the system successfully started mirroring the session.
  - **`error`**: If `success` is [false](https://developer.apple.com/documentation/swift/false), this contains an object that describes the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method in your watchOS app to start a mirrored workout session on the companion iOS app. If your iOS app isn’t running, the system launches it in the background. The iOS companion app must assign a completion handler to its HealthKit Store’s [workoutSessionMirroringStartHandler](../hkhealthstore/workoutsessionmirroringstarthandler.md) property to process the incoming session.

> **Important**

>  This method fails if you call it on a workout session that ended.

```swift
let configuration = HKWorkoutConfiguration()
configuration.activityType = .running
configuration.locationType = .outdoor

let session: HKWorkoutSession
do {
    session = try HKWorkoutSession(healthStore: store,
                                   configuration: configuration)
} catch {
    // Handle failure here.
    fatalError("*** An error occurred: \(error.localizedDescription) ***")
}

let builder = session.associatedWorkoutBuilder()

let source = HKLiveWorkoutDataSource(healthStore: store,
                                     workoutConfiguration: configuration)

source.enableCollection(for: HKQuantityType(.stepCount), predicate: nil)
builder.dataSource = source

session.delegate = self
builder.delegate = self

self.session = session
self.builder = builder

let start = Date()

// Start the mirrored session on the companion iPhone.
do {
    try await session.startMirroringToCompanionDevice()
}
catch {
    fatalError("*** Unable to start the mirrored workout: \(error.localizedDescription) ***")
}

// Start the workout session.
session.startActivity(with: start)

do {
    try await builder.beginCollection(at: start)
} catch {
    fatalError("*** An error occurred while starting the workout: \(error.localizedDescription) ***")
}
```

## See Also

### Working with remote workout sessions

- [stopMirroringToCompanionDeviceWithCompletion:](stopmirroringtocompaniondevice%28completion_%29.md): Stops mirroring the workout session to the companion iOS device.
- [sendDataToRemoteWorkoutSession:completion:](sendtoremoteworkoutsession%28data_completion_%29.md): Sends the provided data to the remote workout session.
