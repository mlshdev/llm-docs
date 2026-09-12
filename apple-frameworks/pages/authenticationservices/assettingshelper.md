> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assettingshelper](https://developer.apple.com/documentation/authenticationservices/assettingshelper)

# ASSettingsHelper (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that opens Settings and navigates to the settings for configuring credential providers.

## Declaration

```swift
class ASSettingsHelper
```

## Topics

### Opening the Settings app

- [openCredentialProviderAppSettings(completionHandler:)](assettingshelper/opencredentialproviderappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the AutoFill provider settings.
- [openVerificationCodeAppSettings(completionHandler:)](assettingshelper/openverificationcodeappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the verification code provider settings.

### Type Methods

- [requestToTurnOnCredentialProviderExtension(completionHandler:)](assettingshelper/requesttoturnoncredentialproviderextension%28completionhandler_%29.md): Call this method from your containing app to request to turn on a contained Credential Provider Extension. If the extension is not currently enabled, a prompt will be shown to allow it to be turned on. The completion handler is called with YES or NO depending on whether the credential provider is enabled. You need to wait 10 seconds in order to make additional request to this API.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# ASSettingsHelper (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that opens Settings and navigates to the settings for configuring credential providers.

## Declaration

```objectivec
@interface ASSettingsHelper : NSObject
```

## Topics

### Opening the Settings app

- [openCredentialProviderAppSettingsWithCompletionHandler:](assettingshelper/opencredentialproviderappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the AutoFill provider settings.
- [openVerificationCodeAppSettingsWithCompletionHandler:](assettingshelper/openverificationcodeappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the verification code provider settings.

### Type Methods

- [requestToTurnOnCredentialProviderExtensionWithCompletionHandler:](assettingshelper/requesttoturnoncredentialproviderextension%28completionhandler_%29.md): Call this method from your containing app to request to turn on a contained Credential Provider Extension. If the extension is not currently enabled, a prompt will be shown to allow it to be turned on. The completion handler is called with YES or NO depending on whether the credential provider is enabled. You need to wait 10 seconds in order to make additional request to this API.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
