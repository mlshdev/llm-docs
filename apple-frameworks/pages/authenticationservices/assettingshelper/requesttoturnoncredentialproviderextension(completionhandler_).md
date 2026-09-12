> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assettingshelper/requesttoturnoncredentialproviderextension(completionhandler:)](https://developer.apple.com/documentation/authenticationservices/assettingshelper/requesttoturnoncredentialproviderextension(completionhandler:))

# requestToTurnOnCredentialProviderExtension(completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Call this method from your containing app to request to turn on a contained Credential Provider Extension. If the extension is not currently enabled, a prompt will be shown to allow it to be turned on. The completion handler is called with YES or NO depending on whether the credential provider is enabled. You need to wait 10 seconds in order to make additional request to this API.

## Declaration

```swift
class func requestToTurnOnCredentialProviderExtension(completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
class func requestToTurnOnCredentialProviderExtension() async -> Bool
```

# requestToTurnOnCredentialProviderExtensionWithCompletionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Call this method from your containing app to request to turn on a contained Credential Provider Extension. If the extension is not currently enabled, a prompt will be shown to allow it to be turned on. The completion handler is called with YES or NO depending on whether the credential provider is enabled. You need to wait 10 seconds in order to make additional request to this API.

## Declaration

```objectivec
+ (void) requestToTurnOnCredentialProviderExtensionWithCompletionHandler:(void (^)(BOOL appWasEnabledForAutoFill)) completionHandler;
```
