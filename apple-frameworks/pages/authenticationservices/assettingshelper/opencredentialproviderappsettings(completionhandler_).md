> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assettingshelper/opencredentialproviderappsettings(completionhandler:)](https://developer.apple.com/documentation/authenticationservices/assettingshelper/opencredentialproviderappsettings(completionhandler:))

# openCredentialProviderAppSettings(completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Open the Settings app and navigate to the AutoFill provider settings.

## Declaration

```swift
class func openCredentialProviderAppSettings(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func openCredentialProviderAppSettings() async throws
```

## Parameters

- `completionHandler`: An optional block that the system calls on completion.

## See Also

### Opening the Settings app

- [openVerificationCodeAppSettings(completionHandler:)](openverificationcodeappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the verification code provider settings.

# openCredentialProviderAppSettingsWithCompletionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Open the Settings app and navigate to the AutoFill provider settings.

## Declaration

```objectivec
+ (void) openCredentialProviderAppSettingsWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that the system calls on completion.

## See Also

### Opening the Settings app

- [openVerificationCodeAppSettingsWithCompletionHandler:](openverificationcodeappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the verification code provider settings.
