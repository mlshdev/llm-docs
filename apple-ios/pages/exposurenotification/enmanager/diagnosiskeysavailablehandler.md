> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/diagnosiskeysavailablehandler](https://developer.apple.com/documentation/exposurenotification/enmanager/diagnosiskeysavailablehandler)

# diagnosisKeysAvailableHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

The handler that receives available diagnosis keys after a successful preauthorization.

> No longer supported.

## Declaration

```swift
var diagnosisKeysAvailableHandler: ENDiagnosisKeysAvailableHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property before calling  [requestPreAuthorizedDiagnosisKeys(completionHandler:)](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md) to ensure [ENManager](../enmanager.md) can deliver the keys. Authorization expires after five days or the first time this method is called after authorization, whichever comes first.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeys(completionHandler:)](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeys(completionHandler:)](preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [ENDiagnosisKeysAvailableHandler](../endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.

# diagnosisKeysAvailableHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 14.4+ (deprecated in 27.0) · iPadOS 14.4+ (deprecated in 27.0) · Mac Catalyst 14.4+ (deprecated in 27.0)

The handler that receives available diagnosis keys after a successful preauthorization.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) ENDiagnosisKeysAvailableHandler diagnosisKeysAvailableHandler;
```

<a id="Discussion"></a>

## Discussion

Set this property before calling  [requestPreAuthorizedDiagnosisKeysWithCompletionHandler:](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md) to ensure [ENManager](../enmanager.md) can deliver the keys. Authorization expires after five days or the first time this method is called after authorization, whichever comes first.

## See Also

### Preauthorizing Exposure Keys

- [requestPreAuthorizedDiagnosisKeysWithCompletionHandler:](requestpreauthorizeddiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests diagnosis keys after the user authorizes sharing them.
- [preAuthorizeDiagnosisKeysWithCompletionHandler:](preauthorizediagnosiskeys%28completionhandler_%29.md): Deprecated. Allows users to authorize a one-time release of diagnosis keys within five days of the authorization.
- [ENDiagnosisKeysAvailableHandler](../endiagnosiskeysavailablehandler.md): Deprecated. The handler the system invokes after requesting diagnosis keys.
