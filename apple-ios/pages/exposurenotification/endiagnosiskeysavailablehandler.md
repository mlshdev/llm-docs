> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/endiagnosiskeysavailablehandler](https://developer.apple.com/documentation/exposurenotification/endiagnosiskeysavailablehandler)

# ENDiagnosisKeysAvailableHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

The handler the system invokes after requesting diagnosis keys.

> No longer supported.

## Declaration

```swift
typealias ENDiagnosisKeysAvailableHandler = ([ENTemporaryExposureKey]) -> Void
```

## Parameters

- `keys`: An array of temporary exposure keys.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeys(completionHandler:)](enmanager/requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeys(completionHandler:)](enmanager/preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [diagnosisKeysAvailableHandler](enmanager/diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.

# ENDiagnosisKeysAvailableHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

The handler the system invokes after requesting diagnosis keys.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(NSArray<ENTemporaryExposureKey *> *) ENDiagnosisKeysAvailableHandler;
```

## Parameters

- `keys`: An array of temporary exposure keys.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeysWithCompletionHandler:](enmanager/requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeysWithCompletionHandler:](enmanager/preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [diagnosisKeysAvailableHandler](enmanager/diagnosiskeysavailablehandler.md): Deprecated. The handler that receives available diagnosis keys after a successful preauthorization.
