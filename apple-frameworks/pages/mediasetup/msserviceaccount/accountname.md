> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/accountname](https://developer.apple.com/documentation/mediasetup/msserviceaccount/accountname)

# accountName (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The user’s display name, email address, or other identifier in a streaming media service.

## Declaration

```swift
var accountName: String { get }
```

## See Also

### Presenting Account Information to the User

- [init(serviceName:accountName:)](init%28servicename_accountname_%29.md): Creates a new account.
- [serviceName](servicename.md): The localized name of the streaming media service.

# accountName (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The user’s display name, email address, or other identifier in a streaming media service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * accountName;
```

## See Also

### Presenting Account Information to the User

- [initWithServiceName:accountName:](init%28servicename_accountname_%29.md): Creates a new account.
- [serviceName](servicename.md): The localized name of the streaming media service.
