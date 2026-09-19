> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpreferences/siriauthorizationstatus()

# siriAuthorizationStatus() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current authorization status of your app.

## Declaration

```swift
class func siriAuthorizationStatus() -> INSiriAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

The authorization status of your app.

<a id="Discussion"></a>

## Discussion

Use this method to determine if your app is authorized to interact with Siri. The user can disable Siri behaviors for specific apps or for all apps. The user can change the authorization for apps in the Siri section of the system settings.

## See Also

### Managing the App’s Authorization

- [requestSiriAuthorization(\_:)](requestsiriauthorization%28__%29.md): Requests authorization to use Siri services.

# siriAuthorizationStatus (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current authorization status of your app.

## Declaration

```objectivec
+ (INSiriAuthorizationStatus) siriAuthorizationStatus;
```

<a id="return-value"></a>

## Return Value

The authorization status of your app.

<a id="Discussion"></a>

## Discussion

Use this method to determine if your app is authorized to interact with Siri. The user can disable Siri behaviors for specific apps or for all apps. The user can change the authorization for apps in the Siri section of the system settings.

## See Also

### Managing the App’s Authorization

- [requestSiriAuthorization:](requestsiriauthorization%28__%29.md): Requests authorization to use Siri services.
