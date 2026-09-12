> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidrequest/user](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidrequest/user)

# user (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier associated with the user’s Apple ID.

## Declaration

```swift
var user: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically you leave this property set to `nil` the first time you authenticate a user. Otherwise, if you previously received an authorization containing an [ASAuthorizationAppleIDCredential](../asauthorizationappleidcredential.md) instance, set this property to the value from the credential’s [user](../asauthorizationappleidcredential/user.md) property.

The value is an arbitrary string that’s portable among apps from a single developer, but not between apps from different developers.

# user (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An identifier associated with the user’s Apple ID.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * user;
```

<a id="Discussion"></a>

## Discussion

Typically you leave this property set to `nil` the first time you authenticate a user. Otherwise, if you previously received an authorization containing an [ASAuthorizationAppleIDCredential](../asauthorizationappleidcredential.md) instance, set this property to the value from the credential’s [user](../asauthorizationappleidcredential/user.md) property.

The value is an arbitrary string that’s portable among apps from a single developer, but not between apps from different developers.
