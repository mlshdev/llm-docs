> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/authorizationstatus](https://developer.apple.com/documentation/sensorkit/srsensorreader/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

The status of the user’s agreement to let the app access this reader’s sensor.

> Use SRReader\<Sensor\> class

## Declaration

```swift
var authorizationStatus: SRAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

When an app wishes to read data from a particular sensor, it checks for user approval first by accessing the value of this property. If the value is [SRAuthorizationStatus.authorized](../srauthorizationstatus/authorized.md), an app may begin recording (see [startRecording()](startrecording%28%29.md)) and execute data fetches (see [fetch(\_:)](fetch%28__%29.md)).

If the value is [SRAuthorizationStatus.denied](../srauthorizationstatus/denied.md), an app can’t begin recording or execute fetches until the user switches on authorization for the reader’s sensor in Settings.

If the value is [SRAuthorizationStatus.notDetermined](../srauthorizationstatus/notdetermined.md), the user has not answered the in-app prompt. To display the prompt, call [requestAuthorization(sensors:completion:)](requestauthorization%28sensors_completion_%29.md).

## See Also

### Checking user authorization

- [requestAuthorization(sensors:completion:)](requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.
- [SRAuthorizationStatus](../srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.

# authorizationStatus (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The status of the user’s agreement to let the app access this reader’s sensor.

## Declaration

```objectivec
@property (readonly) SRAuthorizationStatus authorizationStatus;
```

<a id="Discussion"></a>

## Discussion

When an app wishes to read data from a particular sensor, it checks for user approval first by accessing the value of this property. If the value is [SRAuthorizationStatusAuthorized](../srauthorizationstatus/authorized.md), an app may begin recording (see [startRecording](startrecording%28%29.md)) and execute data fetches (see [fetch:](fetch%28__%29.md)).

If the value is [SRAuthorizationStatusDenied](../srauthorizationstatus/denied.md), an app can’t begin recording or execute fetches until the user switches on authorization for the reader’s sensor in Settings.

If the value is [SRAuthorizationStatusNotDetermined](../srauthorizationstatus/notdetermined.md), the user has not answered the in-app prompt. To display the prompt, call [requestAuthorizationForSensors:completion:](requestauthorization%28sensors_completion_%29.md).

## See Also

### Checking user authorization

- [requestAuthorizationForSensors:completion:](requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.
- [SRAuthorizationStatus](../srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.
