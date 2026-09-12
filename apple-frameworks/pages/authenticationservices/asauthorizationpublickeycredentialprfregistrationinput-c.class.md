> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-c.class](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-c.class)

# ASAuthorizationPublicKeyCredentialPRFRegistrationInput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type that encapsulates input for PRF extensions during registration.

## Declaration

```objectivec
@interface ASAuthorizationPublicKeyCredentialPRFRegistrationInput : NSObject
```

## Topics

### Creating a registration input instance

- [initWithInputValues:](asauthorizationpublickeycredentialprfregistrationinput-c.class/initwithinputvalues_.md): Initializes a registration input object with inputs for the PRF extension to evaluate if the new passkey supports the extension.

### Working with PRF inputs

- [inputValues](asauthorizationpublickeycredentialprfregistrationinput-c.class/inputvalues.md): The input values to use when generating the PRF extension, if specified.

### Checking for support

- [shouldCheckForSupport](asauthorizationpublickeycredentialprfregistrationinput-c.class/shouldcheckforsupport.md): A Boolean value that indicates whether to check for PRF support.
- [checkForSupport](asauthorizationpublickeycredentialprfregistrationinput-c.class/checkforsupport.md): A check to determine extension support for the newly created passkey.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
