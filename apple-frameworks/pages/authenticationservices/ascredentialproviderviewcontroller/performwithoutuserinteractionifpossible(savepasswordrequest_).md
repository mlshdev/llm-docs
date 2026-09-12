> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible(savepasswordrequest:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible(savepasswordrequest:))

# performWithoutUserInteractionIfPossible(savePasswordRequest:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Attempt to save a password credential.

## Declaration

```swift
func performWithoutUserInteractionIfPossible(savePasswordRequest: ASSavePasswordRequest)
```

<a id="discussion"></a>

## Discussion

To return results, you must call  [completeSavePasswordRequest(completionHandler:)](../ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md).

> **Note**

> When this method is called, your extension’s view controller is not present on the screen. You can request user interaction by calling `ASCredentialProviderExtensionContext/cancelRequest(with:)`, using [userInteractionRequired](../asextensionerror/userinteractionrequired.md).

To indicate support for this feature, add `SupportsSavePasswordCredentials` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsSavePasswordCredentials => true
```

# performSavePasswordRequestWithoutUserInteractionIfPossible: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Attempt to save a password credential.

## Declaration

```objectivec
- (void) performSavePasswordRequestWithoutUserInteractionIfPossible:(ASSavePasswordRequest *) savePasswordRequest;
```

<a id="discussion"></a>

## Discussion

To return results, you must call  [completeSavePasswordRequestWithCompletionHandler:](../ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md).

> **Note**

> When this method is called, your extension’s view controller is not present on the screen. You can request user interaction by calling `ASCredentialProviderExtensionContext/cancelRequest(with:)`, using [userInteractionRequired](../asextensionerror/userinteractionrequired.md).

To indicate support for this feature, add `SupportsSavePasswordCredentials` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsSavePasswordCredentials => true
```
