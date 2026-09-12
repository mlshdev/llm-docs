> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/requestauthorization(sensors:completion:)](https://developer.apple.com/documentation/sensorkit/srsensorreader/requestauthorization(sensors:completion:))

# requestAuthorization(sensors:completion:) (Swift)

**Framework:** SensorKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Requests user permission to read one or more sensors.

> Use SRReader\<Sensor\> class

## Declaration

```swift
class func requestAuthorization(sensors: Set<SRSensor>, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func requestAuthorization(sensors: Set<SRSensor>) async throws
```

## Parameters

- `sensors`: One or more sensors your app requests.
- `completion`: A closure to run after the framework determines user authorization.

<a id="Discussion"></a>

## Discussion

Call this function for sensors in which [authorizationStatus](authorizationstatus.md) is [SRAuthorizationStatus.notDetermined](../srauthorizationstatus/notdetermined.md) to display a prompt that requests user authorization. When the prompt dismisses, the framework calls the `completion` closure. Your delegate needs to wait for a call to [sensorReader(\_:didChange:)](../srsensorreaderdelegate/sensorreader%28__didchange_%29.md) to determine whether the user approves sensor access.

If you pass a sensor into this function for which the user already answered the in-app prompt, the framework cancels the prompt with [SRError.Code.promptDeclined](../srerror/code/promptdeclined.md). When the user has already answered the prompt for a particular sensor, its [authorizationStatus](authorizationstatus.md) is [SRAuthorizationStatus.authorized](../srauthorizationstatus/authorized.md) or [SRAuthorizationStatus.denied](../srauthorizationstatus/denied.md). The user may change the authorization status for a sensor in Settings \> Privacy \> Research Sensor & Usage Data.

For more information about the authorization workflow, see [Configuring your project for sensor reading](../configuring-your-project-for-sensor-reading.md).

## See Also

### Checking user authorization

- [authorizationStatus](authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [SRAuthorizationStatus](../srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.

# requestAuthorizationForSensors:completion: (Objective-C)

**Framework:** SensorKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Requests user permission to read one or more sensors.

## Declaration

```objectivec
+ (void) requestAuthorizationForSensors:(NSSet<NSString *> *) sensors completion:(void (^)(NSError *error)) completion;
```

## Parameters

- `sensors`: One or more sensors your app requests.
- `completion`: A closure to run after the framework determines user authorization.

<a id="Discussion"></a>

## Discussion

Call this function for sensors in which [authorizationStatus](authorizationstatus.md) is [SRAuthorizationStatusNotDetermined](../srauthorizationstatus/notdetermined.md) to display a prompt that requests user authorization. When the prompt dismisses, the framework calls the `completion` closure. Your delegate needs to wait for a call to [sensorReader:didChangeAuthorizationStatus:](../srsensorreaderdelegate/sensorreader%28__didchange_%29.md) to determine whether the user approves sensor access.

If you pass a sensor into this function for which the user already answered the in-app prompt, the framework cancels the prompt with [SRErrorPromptDeclined](../srerror/code/promptdeclined.md). When the user has already answered the prompt for a particular sensor, its [authorizationStatus](authorizationstatus.md) is [SRAuthorizationStatusAuthorized](../srauthorizationstatus/authorized.md) or [SRAuthorizationStatusDenied](../srauthorizationstatus/denied.md). The user may change the authorization status for a sensor in Settings \> Privacy \> Research Sensor & Usage Data.

For more information about the authorization workflow, see [Configuring your project for sensor reading](../configuring-your-project-for-sensor-reading.md).

## See Also

### Checking user authorization

- [authorizationStatus](authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [SRAuthorizationStatus](../srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.
