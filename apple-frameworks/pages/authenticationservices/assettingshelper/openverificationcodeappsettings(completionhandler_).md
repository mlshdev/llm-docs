> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assettingshelper/openverificationcodeappsettings(completionhandler:)](https://developer.apple.com/documentation/authenticationservices/assettingshelper/openverificationcodeappsettings(completionhandler:))

# openVerificationCodeAppSettings(completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Open the Settings app and navigate to the verification code provider settings.

## Declaration

```swift
class func openVerificationCodeAppSettings(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func openVerificationCodeAppSettings() async throws
```

## Parameters

- `completionHandler`: An optional block that the system calls on completion.

## See Also

### Opening the Settings app

- [openCredentialProviderAppSettings(completionHandler:)](opencredentialproviderappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the AutoFill provider settings.

# openVerificationCodeAppSettingsWithCompletionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Open the Settings app and navigate to the verification code provider settings.

## Declaration

```objectivec
+ (void) openVerificationCodeAppSettingsWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that the system calls on completion.

## See Also

### Opening the Settings app

- [openCredentialProviderAppSettingsWithCompletionHandler:](opencredentialproviderappsettings%28completionhandler_%29.md): Open the Settings app and navigate to the AutoFill provider settings.
