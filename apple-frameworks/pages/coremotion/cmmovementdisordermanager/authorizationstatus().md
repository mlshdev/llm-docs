> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/authorizationstatus()](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** watchOS 5.0+

A value indicating whether the user has authorized the app to monitor and query for movement disorder data.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

<a id="Discussion"></a>

## Discussion

The first time your app attempts to monitor or query for movement disorder data, the manager asks the user for permission to collect or retrieve their movement disorder data. To request permission, your app must set a motion usage description in its `Info.plist` file. For more information, see [Provide the motion usage description](../getting-movement-disorder-symptom-data.md#Provide-the-motion-usage-description).

## See Also

### Checking Availablility

- [isAvailable()](isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [version()](version%28%29.md): Returns a string that describes the movement disorder algorithm’s current version.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** watchOS 5.0+

A value indicating whether the user has authorized the app to monitor and query for movement disorder data.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

<a id="Discussion"></a>

## Discussion

The first time your app attempts to monitor or query for movement disorder data, the manager asks the user for permission to collect or retrieve their movement disorder data. To request permission, your app must set a motion usage description in its `Info.plist` file. For more information, see [Provide the motion usage description](../getting-movement-disorder-symptom-data.md#Provide-the-motion-usage-description).

## See Also

### Checking Availablility

- [isAvailable](isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [version](version%28%29.md): Returns a string that describes the movement disorder algorithm’s current version.
