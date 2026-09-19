> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential/authorizedscopes

# authorizedScopes (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The contact information the user authorized your app to access.

## Declaration

```swift
var authorizedScopes: [ASAuthorization.Scope] { get }
```

## See Also

### Getting Contact Information

- [fullName](fullname.md): The user’s full name from their Apple ID or a user-submitted value provided from the Sign in with Apple UI.
- [email](email.md): The user’s email address.

# authorizedScopes (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The contact information the user authorized your app to access.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * authorizedScopes;
```

## See Also

### Getting Contact Information

- [fullName](fullname.md): The user’s full name from their Apple ID or a user-submitted value provided from the Sign in with Apple UI.
- [email](email.md): The user’s email address.
