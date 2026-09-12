> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-c.class](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-c.class)

# ASAuthorizationPublicKeyCredentialPRFAssertionOutput

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.

## Declaration

```objectivec
@interface ASAuthorizationPublicKeyCredentialPRFAssertionOutput : NSObject
```

<a id="overview"></a>

## Overview

This object represents one or two `SymmetricKey` keys that are available anywhere the passkey is available for use. These are general purpose keys that you can use for application-specific needs, such as encryption of user data.

Don’t store or export these keys. Derive these keys only as the result of an assertion operation, and then discard them when the operation finishes.

## Topics

### Accessing symmetric keys

- [first](asauthorizationpublickeycredentialprfassertionoutput-c.class/first.md): A symmetric key that’s unique to the passkey and derives from the first input.
- [second](asauthorizationpublickeycredentialprfassertionoutput-c.class/second.md): A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
