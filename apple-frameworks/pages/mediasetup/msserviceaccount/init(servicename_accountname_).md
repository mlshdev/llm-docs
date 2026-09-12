> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/init(servicename:accountname:)](https://developer.apple.com/documentation/mediasetup/msserviceaccount/init(servicename:accountname:))

# init(serviceName:accountName:) (Swift)

**Framework:** Media Setup  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new account.

## Declaration

```swift
init(serviceName: String, accountName: String)
```

## Parameters

- `serviceName`: The name of the streaming media service.
- `accountName`: The user’s display name in the streaming media service.

## See Also

### Presenting Account Information to the User

- [serviceName](servicename.md): The localized name of the streaming media service.
- [accountName](accountname.md): The user’s display name, email address, or other identifier in a streaming media service.

# initWithServiceName:accountName: (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new account.

## Declaration

```objectivec
- (instancetype) initWithServiceName:(NSString *) serviceName accountName:(NSString *) accountName;
```

## Parameters

- `serviceName`: The name of the streaming media service.
- `accountName`: The user’s display name in the streaming media service.

## See Also

### Presenting Account Information to the User

- [serviceName](servicename.md): The localized name of the streaming media service.
- [accountName](accountname.md): The user’s display name, email address, or other identifier in a streaming media service.
