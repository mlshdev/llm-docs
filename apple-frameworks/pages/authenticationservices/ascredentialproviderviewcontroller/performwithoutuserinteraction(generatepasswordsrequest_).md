> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteraction(generatepasswordsrequest:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteraction(generatepasswordsrequest:))

# performWithoutUserInteraction(generatePasswordsRequest:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Attempt to generate passwords based on developer-specified rules.

## Declaration

```swift
func performWithoutUserInteraction(generatePasswordsRequest: ASGeneratePasswordsRequest)
```

<a id="discussion"></a>

## Discussion

To return results, you must call \`\`ASCredentialProviderExtensionContext/completeGeneratePasswordRequest(results:completionHandler:)\`.

> **Note**

> When this method is called, your extension’s view controller is not present on the screen. [userInteractionRequired](../asextensionerror/userinteractionrequired.md) will not be honored and treated as a failure.

> **Note**

> You should not update or replace any existing credentials when this API is called.

To indicate support for this feature, add `SupportsGeneratePasswordCredentials` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsSavePasswordCredentials => true
            ├─ SupportsGeneratePasswordCredentials => true
```

# performGeneratePasswordsRequestWithoutUserInteraction: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Attempt to generate passwords based on developer-specified rules.

## Declaration

```objectivec
- (void) performGeneratePasswordsRequestWithoutUserInteraction:(ASGeneratePasswordsRequest *) generatePasswordsRequest;
```

<a id="discussion"></a>

## Discussion

To return results, you must call \`\`ASCredentialProviderExtensionContext/completeGeneratePasswordRequest(results:completionHandler:)\`.

> **Note**

> When this method is called, your extension’s view controller is not present on the screen. [userInteractionRequired](../asextensionerror/userinteractionrequired.md) will not be honored and treated as a failure.

> **Note**

> You should not update or replace any existing credentials when this API is called.

To indicate support for this feature, add `SupportsGeneratePasswordCredentials` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsSavePasswordCredentials => true
            ├─ SupportsGeneratePasswordCredentials => true
```
