> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount](https://developer.apple.com/documentation/mediasetup/msserviceaccount)

# MSServiceAccount (Swift)

**Framework:** Media Setup  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Account details for accessing a streaming media service.

## Declaration

```swift
class MSServiceAccount
```

## Topics

### Presenting Account Information to the User

- [init(serviceName:accountName:)](msserviceaccount/init%28servicename_accountname_%29.md): Creates a new account.
- [serviceName](msserviceaccount/servicename.md): The localized name of the streaming media service.
- [accountName](msserviceaccount/accountname.md): The user’s display name, email address, or other identifier in a streaming media service.

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](msserviceaccount/authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](msserviceaccount/authorizationscope.md): A list of permissions for the token request.
- [clientID](msserviceaccount/clientid.md): A user identifier for the token request.
- [clientSecret](msserviceaccount/clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](msserviceaccount/configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.

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

## See Also

### HomePod Configuration

- [MSSetupSession](mssetupsession.md): An object that manages the transfer of configuration information between your app, the system, your media service, and HomePod speakers.

# MSServiceAccount (Objective-C)

**Framework:** Media Setup  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Account details for accessing a streaming media service.

## Declaration

```objectivec
@interface MSServiceAccount : NSObject
```

## Topics

### Presenting Account Information to the User

- [initWithServiceName:accountName:](msserviceaccount/init%28servicename_accountname_%29.md): Creates a new account.
- [serviceName](msserviceaccount/servicename.md): The localized name of the streaming media service.
- [accountName](msserviceaccount/accountname.md): The user’s display name, email address, or other identifier in a streaming media service.

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](msserviceaccount/authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](msserviceaccount/authorizationscope.md): A list of permissions for the token request.
- [clientID](msserviceaccount/clientid.md): A user identifier for the token request.
- [clientSecret](msserviceaccount/clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](msserviceaccount/configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### HomePod Configuration

- [MSSetupSession](mssetupsession.md): An object that manages the transfer of configuration information between your app, the system, your media service, and HomePod speakers.
