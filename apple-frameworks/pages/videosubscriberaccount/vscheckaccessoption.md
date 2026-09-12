> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vscheckaccessoption](https://developer.apple.com/documentation/videosubscriberaccount/vscheckaccessoption)

# VSCheckAccessOption (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The options your app uses when checking access status.

## Declaration

```swift
struct VSCheckAccessOption
```

## Topics

### Options

- [prompt](vscheckaccessoption/prompt.md): A Boolean that indicates whether your app can prompt the user to grant access.

### Creating check access options

- [init(rawValue:)](vscheckaccessoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking access status

- [checkAccessStatus(options:completionHandler:)](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSAccountAccessStatus](vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.

# VSCheckAccessOption (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The options your app uses when checking access status.

## Declaration

```objectivec
typedef NSString * VSCheckAccessOption;
```

## Topics

### Options

- [VSCheckAccessOptionPrompt](vscheckaccessoption/prompt.md): A Boolean that indicates whether your app can prompt the user to grant access.

## See Also

### Checking access status

- [checkAccessStatusWithOptions:completionHandler:](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSAccountAccessStatus](vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.
