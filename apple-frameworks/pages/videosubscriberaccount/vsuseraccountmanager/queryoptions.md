> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/queryoptions](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/queryoptions)

# VSUserAccountManager.QueryOptions (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Constants that represent options you use to fetch a list of user accounts.

## Declaration

```swift
struct QueryOptions
```

## Topics

### Query options

- [allDevices](queryoptions/alldevices.md): A constant that indicates fetching user accounts from all the user’s iCloud devices.

### Initializing query options

- [init(rawValue:)](queryoptions/init%28rawvalue_%29.md): Creates a query option from an integer value you provide.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting user accounts

- [userAccounts(options:)](useraccounts%28options_%29.md): Returns a list of registered user accounts for your app.

# VSUserAccountQueryOptions (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Constants that represent options you use to fetch a list of user accounts.

## Declaration

```objectivec
enum VSUserAccountQueryOptions : NSInteger;
```

## Topics

### Query options

- [VSUserAccountQueryAllDevices](queryoptions/alldevices.md): A constant that indicates fetching user accounts from all the user’s iCloud devices.

### Initializing query options

- [VSUserAccountQueryNone](../vsuseraccountqueryoptions/vsuseraccountquerynone.md): A constant that indicates fetching user accounts from the user’s current device only.

## See Also

### Getting user accounts

- [queryUserAccountsWithOptions:completion:](queryuseraccountswithoptions_completion_.md): Returns a list of registered user accounts for your app.
