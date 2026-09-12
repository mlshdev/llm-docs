> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidbutton/init(type:style:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidbutton/init(type:style:))

# init(type:style:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a new Sign In with Apple authorization button with the given type and style.

## Declaration

```swift
convenience init(type: ASAuthorizationAppleIDButton.ButtonType, style: ASAuthorizationAppleIDButton.Style)
```

## Parameters

- `type`: The type of the button. Use one of the values from [ASAuthorizationAppleIDButton.ButtonType](buttontype.md).
- `style`: The style of the button. Use one of the values from [ASAuthorizationAppleIDButton.Style](style.md).

## See Also

### Initializers

- [init(authorizationButtonType:authorizationButtonStyle:)](init%28authorizationbuttontype_authorizationbuttonstyle_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.

# buttonWithType:style: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a new Sign In with Apple authorization button with the given type and style.

## Declaration

```objectivec
+ (instancetype) buttonWithType:(ASAuthorizationAppleIDButtonType) type style:(ASAuthorizationAppleIDButtonStyle) style;
```

## Parameters

- `type`: The type of the button. Use one of the values from [ASAuthorizationAppleIDButtonType](buttontype.md).
- `style`: The style of the button. Use one of the values from [ASAuthorizationAppleIDButtonStyle](style.md).

## See Also

### Initializers

- [initWithAuthorizationButtonType:authorizationButtonStyle:](init%28authorizationbuttontype_authorizationbuttonstyle_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.
