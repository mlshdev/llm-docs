> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcustommethod](https://developer.apple.com/documentation/authenticationservices/asauthorizationcustommethod)

# ASAuthorizationCustomMethod (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** tvOS 15.0+

The custom authorization method.

## Declaration

```swift
struct ASAuthorizationCustomMethod
```

<a id="Discussion"></a>

## Discussion

Use [ASAuthorizationCustomMethod](asauthorizationcustommethod.md) to specify a type of custom sign-in in tvOS, like enabling the user to sign in manually or by restoring a purchase.

## Topics

### Creating the Structure

- [init(rawValue:)](asauthorizationcustommethod/init%28rawvalue_%29.md): Initializes the object with a custom authorization method.

### Getting the Properties

- [videoSubscriberAccount](asauthorizationcustommethod/videosubscriberaccount.md): A type of authorization that uses a TV provider account to sign in.
- [restorePurchase](asauthorizationcustommethod/restorepurchase.md): A type of authorization that restores an in-app purchase to sign in.
- [other](asauthorizationcustommethod/other.md): A type of authorization that uses a custom sign-in method.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Apple TV authentication

- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [authorizationController(\_:didCompleteWithCustomMethod:)](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.

# ASAuthorizationCustomMethod (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** tvOS 15.0+

The custom authorization method.

## Declaration

```objectivec
typedef NSString * ASAuthorizationCustomMethod;
```

<a id="Discussion"></a>

## Discussion

Use [ASAuthorizationCustomMethod](asauthorizationcustommethod.md) to specify a type of custom sign-in in tvOS, like enabling the user to sign in manually or by restoring a purchase.

## Topics

### Getting the Properties

- [ASAuthorizationCustomMethodVideoSubscriberAccount](asauthorizationcustommethod/videosubscriberaccount.md): A type of authorization that uses a TV provider account to sign in.
- [ASAuthorizationCustomMethodRestorePurchase](asauthorizationcustommethod/restorepurchase.md): A type of authorization that restores an in-app purchase to sign in.
- [ASAuthorizationCustomMethodOther](asauthorizationcustommethod/other.md): A type of authorization that uses a custom sign-in method.

## See Also

### Apple TV authentication

- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [authorizationController:didCompleteWithCustomMethod:](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
