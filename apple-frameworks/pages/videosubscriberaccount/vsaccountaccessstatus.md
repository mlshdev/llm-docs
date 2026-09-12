> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountaccessstatus](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountaccessstatus)

# VSAccountAccessStatus (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Constants that represent your app’s access status to the user’s subscription information.

## Declaration

```swift
enum VSAccountAccessStatus
```

## Topics

### Statuses

- [VSAccountAccessStatus.denied](vsaccountaccessstatus/denied.md): The user denied the app access to subscription information.
- [VSAccountAccessStatus.granted](vsaccountaccessstatus/granted.md): The user allowed the app to access subscription information.
- [VSAccountAccessStatus.notDetermined](vsaccountaccessstatus/notdetermined.md): The user hasn’t chosen whether to allow the app to access subscription information.
- [VSAccountAccessStatus.restricted](vsaccountaccessstatus/restricted.md): The app isn’t allowed to access subscription information.

### Initializers

- [init(rawValue:)](vsaccountaccessstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking access status

- [checkAccessStatus(options:completionHandler:)](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSCheckAccessOption](vscheckaccessoption.md): The options your app uses when checking access status.

# VSAccountAccessStatus (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Constants that represent your app’s access status to the user’s subscription information.

## Declaration

```objectivec
enum VSAccountAccessStatus : NSInteger;
```

## Topics

### Statuses

- [VSAccountAccessStatusDenied](vsaccountaccessstatus/denied.md): The user denied the app access to subscription information.
- [VSAccountAccessStatusGranted](vsaccountaccessstatus/granted.md): The user allowed the app to access subscription information.
- [VSAccountAccessStatusNotDetermined](vsaccountaccessstatus/notdetermined.md): The user hasn’t chosen whether to allow the app to access subscription information.
- [VSAccountAccessStatusRestricted](vsaccountaccessstatus/restricted.md): The app isn’t allowed to access subscription information.

## See Also

### Checking access status

- [checkAccessStatusWithOptions:completionHandler:](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSCheckAccessOption](vscheckaccessoption.md): The options your app uses when checking access status.
