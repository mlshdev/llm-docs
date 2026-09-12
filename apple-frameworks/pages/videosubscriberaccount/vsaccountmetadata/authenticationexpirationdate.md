> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadata/authenticationexpirationdate](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata/authenticationexpirationdate)

# authenticationExpirationDate (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The date when the user’s current authentication session expires.

## Declaration

```swift
var authenticationExpirationDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the user doesn’t have a current authentication session with their account provider.

## See Also

### Getting TV Provider Info

- [accountProviderIdentifier](accountprovideridentifier.md): The unique identifier of the account provider.

# authenticationExpirationDate (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The date when the user’s current authentication session expires.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * authenticationExpirationDate;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the user doesn’t have a current authentication session with their account provider.

## See Also

### Getting TV Provider Info

- [accountProviderIdentifier](accountprovideridentifier.md): The unique identifier of the account provider.
