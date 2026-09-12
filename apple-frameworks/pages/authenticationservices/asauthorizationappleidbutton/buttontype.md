> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidbutton/buttontype](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidbutton/buttontype)

# ASAuthorizationAppleIDButton.ButtonType (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A type for the authorization button.

## Declaration

```swift
enum ButtonType
```

## Topics

### Choosing a Button Type

- [ASAuthorizationAppleIDButton.ButtonType.continue](buttontype/continue.md): A button type that continues the Sign in with Apple authorization process.
- [default](buttontype/default.md): A default button type for the Sign in with Apple authorization process.
- [ASAuthorizationAppleIDButton.ButtonType.signUp](buttontype/signup.md): A button type that allows the user to sign up for Sign in with Apple.
- [ASAuthorizationAppleIDButton.ButtonType.signIn](buttontype/signin.md): A button type that performs authorization using Sign in with Apple.

### Initializers

- [init(rawValue:)](buttontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Styling the Button

- [cornerRadius](cornerradius.md): The radius, in points, for the rounded corners on the Apple ID sign-in button.
- [ASAuthorizationAppleIDButton.Style](style.md): A style for the authorization button.

# ASAuthorizationAppleIDButtonType (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A type for the authorization button.

## Declaration

```objectivec
enum ASAuthorizationAppleIDButtonType : NSInteger;
```

## Topics

### Choosing a Button Type

- [ASAuthorizationAppleIDButtonTypeContinue](buttontype/continue.md): A button type that continues the Sign in with Apple authorization process.
- [ASAuthorizationAppleIDButtonTypeDefault](buttontype/default.md): A default button type for the Sign in with Apple authorization process.
- [ASAuthorizationAppleIDButtonTypeSignUp](buttontype/signup.md): A button type that allows the user to sign up for Sign in with Apple.
- [ASAuthorizationAppleIDButtonTypeSignIn](buttontype/signin.md): A button type that performs authorization using Sign in with Apple.

## See Also

### Styling the Button

- [cornerRadius](cornerradius.md): The radius, in points, for the rounded corners on the Apple ID sign-in button.
- [ASAuthorizationAppleIDButtonStyle](style.md): A style for the authorization button.
