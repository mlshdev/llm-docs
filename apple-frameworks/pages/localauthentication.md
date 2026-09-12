> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication](https://developer.apple.com/documentation/localauthentication)

# Local Authentication (Swift)

**Framework:** Local Authentication  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

Authenticate users biometrically or with a passphrase they already know.

<a id="overview"></a>

## Overview

Many users rely on biometric authentication like Face ID, Touch ID, or Optic ID to enable secure, effortless access to their devices. As a fallback option, and for devices without biometry, a passcode or password serves a similar purpose. Use the LocalAuthentication framework to leverage these mechanisms in your app and extend authentication procedures your app already implements.

![Diagram showing the relationship between your app operating in user space, the LocalAuthentication framework in the operating system, and the Secure Enclave.](https://developer.apple.com/images/com.apple.localauthentication/media-3002744@2x.png)

To maximize security, your app never gains access to any of the underlying authentication data. You can’t access any fingerprint images, for example. The Secure Enclave, a hardware-based security processor isolated from the rest of the system, manages this data out of reach even of the operating system. Instead, you specify a particular policy and provide messaging that tells the user why you want them to authenticate. The framework then coordinates with the Secure Enclave to carry out the operation. Afterward, you receive only a Boolean result indicating authentication success or failure.

## Topics

### Essentials

- [Logging a User into Your App with Face ID or Touch ID](localauthentication/logging-a-user-into-your-app-with-face-id-or-touch-id.md): Supplement your own authentication scheme with biometric authentication, making it easy for users to access sensitive parts of your app.
- [Accessing Keychain Items with Face ID or Touch ID](localauthentication/accessing-keychain-items-with-face-id-or-touch-id.md): Protect a keychain item with biometric authentication.

### Authentication and access

- [LARight](localauthentication/laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LARight.State](localauthentication/laright/state-swift.enum.md): The possible states for a right during authorization.
- [LAContext](localauthentication/lacontext.md): A mechanism for evaluating authentication policies and access controls.

### Persistence

- [LARightStore](localauthentication/larightstore.md): A container for data protected by a right.
- [LAPersistedRight](localauthentication/lapersistedright.md): A right that gates access to a key and a secret.
- [LASecret](localauthentication/lasecret.md): Data that’s protected by a persisted right.

### Key pairs

- [LAPublicKey](localauthentication/lapublickey.md): The public portion of an asymmetric key pair.
- [LAPrivateKey](localauthentication/laprivatekey.md): The private portion of an asymmetric key pair.

### Requirements

- [LAAuthenticationRequirement](localauthentication/laauthenticationrequirement.md): A set of requirements that protect a right.
- [LABiometryFallbackRequirement](localauthentication/labiometryfallbackrequirement.md): A set of requirements to fall back on if biometrics aren’t present.

### Authentication views

- [LocalAuthenticationView](localauthentication/localauthenticationview.md): A SwiftUI view that displays an authentication interface.

### Errors

- [LAError](localauthentication/laerror-swift.struct.md): Errors issued by the LocalAuthentication framework.
- [LAError.Code](localauthentication/laerror-swift.struct/code.md): Errors issued by the LocalAuthentication framework.
- [LAErrorDomain](localauthentication/laerrordomain.md): The error domain that the framework uses when issuing errors.

### Reference

- [LocalAuthentication Constants](localauthentication/localauthentication-constants.md)

### Classes

- [LADomainState](localauthentication/ladomainstate.md)
- [LADomainStateBiometry](localauthentication/ladomainstatebiometry.md)
- [LADomainStateCompanion](localauthentication/ladomainstatecompanion.md)
- [LAEnvironment](localauthentication/laenvironment.md)

### Variables

- [kLAAccessControlOperationCreateItem](localauthentication/klaaccesscontroloperationcreateitem.md)
- [kLAAccessControlOperationCreateKey](localauthentication/klaaccesscontroloperationcreatekey.md)
- [kLAAccessControlOperationUseItem](localauthentication/klaaccesscontroloperationuseitem.md)
- [kLAAccessControlOperationUseKeyDecrypt](localauthentication/klaaccesscontroloperationusekeydecrypt.md)
- [kLAAccessControlOperationUseKeyKeyExchange](localauthentication/klaaccesscontroloperationusekeykeyexchange.md)
- [kLAAccessControlOperationUseKeySign](localauthentication/klaaccesscontroloperationusekeysign.md)
- [kLACompanionTypeMac](localauthentication/klacompaniontypemac.md)
- [kLACompanionTypeNone](localauthentication/klacompaniontypenone.md)
- [kLACompanionTypeVision](localauthentication/klacompaniontypevision.md)
- [kLACompanionTypeWatch](localauthentication/klacompaniontypewatch.md)
- [kLAErrorCompanionNotAvailable](localauthentication/klaerrorcompanionnotavailable.md)
- [kLAPolicyDeviceOwnerAuthenticationWithBiometricsOrCompanion](localauthentication/klapolicydeviceownerauthenticationwithbiometricsorcompanion.md)
- [kLAPolicyDeviceOwnerAuthenticationWithCompanion](localauthentication/klapolicydeviceownerauthenticationwithcompanion.md)

### Enumerations

- [LACompanionType](localauthentication/lacompaniontype.md)

# Local Authentication (Objective-C)

**Framework:** Local Authentication  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

Authenticate users biometrically or with a passphrase they already know.

<a id="overview"></a>

## Overview

Many users rely on biometric authentication like Face ID, Touch ID, or Optic ID to enable secure, effortless access to their devices. As a fallback option, and for devices without biometry, a passcode or password serves a similar purpose. Use the LocalAuthentication framework to leverage these mechanisms in your app and extend authentication procedures your app already implements.

![Diagram showing the relationship between your app operating in user space, the LocalAuthentication framework in the operating system, and the Secure Enclave.](https://developer.apple.com/images/com.apple.localauthentication/media-3002744@2x.png)

To maximize security, your app never gains access to any of the underlying authentication data. You can’t access any fingerprint images, for example. The Secure Enclave, a hardware-based security processor isolated from the rest of the system, manages this data out of reach even of the operating system. Instead, you specify a particular policy and provide messaging that tells the user why you want them to authenticate. The framework then coordinates with the Secure Enclave to carry out the operation. Afterward, you receive only a Boolean result indicating authentication success or failure.

## Topics

### Essentials

- [Logging a User into Your App with Face ID or Touch ID](localauthentication/logging-a-user-into-your-app-with-face-id-or-touch-id.md): Supplement your own authentication scheme with biometric authentication, making it easy for users to access sensitive parts of your app.
- [Accessing Keychain Items with Face ID or Touch ID](localauthentication/accessing-keychain-items-with-face-id-or-touch-id.md): Protect a keychain item with biometric authentication.

### Authentication and access

- [LARight](localauthentication/laright.md): A grouped set of requirements that gate access to a resource or operation.
- [LARightState](localauthentication/laright/state-swift.enum.md): The possible states for a right during authorization.
- [LAContext](localauthentication/lacontext.md): A mechanism for evaluating authentication policies and access controls.

### Persistence

- [LARightStore](localauthentication/larightstore.md): A container for data protected by a right.
- [LAPersistedRight](localauthentication/lapersistedright.md): A right that gates access to a key and a secret.
- [LASecret](localauthentication/lasecret.md): Data that’s protected by a persisted right.

### Key pairs

- [LAPublicKey](localauthentication/lapublickey.md): The public portion of an asymmetric key pair.
- [LAPrivateKey](localauthentication/laprivatekey.md): The private portion of an asymmetric key pair.

### Requirements

- [LAAuthenticationRequirement](localauthentication/laauthenticationrequirement.md): A set of requirements that protect a right.
- [LABiometryFallbackRequirement](localauthentication/labiometryfallbackrequirement.md): A set of requirements to fall back on if biometrics aren’t present.

### Errors

- [LAError](localauthentication/laerror-swift.struct/code.md): Errors issued by the LocalAuthentication framework.
- [LAErrorDomain](localauthentication/laerrordomain.md): The error domain that the framework uses when issuing errors.

### Reference

- [LocalAuthentication Constants](localauthentication/localauthentication-constants.md)

### Classes

- [LADomainState](localauthentication/ladomainstate.md)
- [LADomainStateBiometry](localauthentication/ladomainstatebiometry.md)
- [LADomainStateCompanion](localauthentication/ladomainstatecompanion.md)
- [LAEnvironment](localauthentication/laenvironment.md)
- [LAEnvironmentMechanism](localauthentication/laenvironment/mechanism.md)
- [LAEnvironmentMechanismBiometry](localauthentication/laenvironment/mechanismbiometry.md)
- [LAEnvironmentMechanismCompanion](localauthentication/laenvironment/mechanismcompanion.md)
- [LAEnvironmentMechanismUserPassword](localauthentication/laenvironment/mechanismuserpassword.md)
- [LAEnvironmentState](localauthentication/laenvironment/state-swift.class.md)

### Protocols

- [LAEnvironmentObserver](localauthentication/laenvironment/observer.md)

### Macros

- [LA_EXPORT](localauthentication/la_export.md)
- [LA_EXTERN](localauthentication/la_extern.md)
- [kLAAccessControlOperationCreateItem](localauthentication/klaaccesscontroloperationcreateitem.md)
- [kLAAccessControlOperationCreateKey](localauthentication/klaaccesscontroloperationcreatekey.md)
- [kLAAccessControlOperationUseItem](localauthentication/klaaccesscontroloperationuseitem.md)
- [kLAAccessControlOperationUseKeyDecrypt](localauthentication/klaaccesscontroloperationusekeydecrypt.md)
- [kLAAccessControlOperationUseKeyKeyExchange](localauthentication/klaaccesscontroloperationusekeykeyexchange.md)
- [kLAAccessControlOperationUseKeySign](localauthentication/klaaccesscontroloperationusekeysign.md)
- [kLACompanionTypeMac](localauthentication/klacompaniontypemac.md)
- [kLACompanionTypeNone](localauthentication/klacompaniontypenone.md)
- [kLACompanionTypeVision](localauthentication/klacompaniontypevision.md)
- [kLACompanionTypeWatch](localauthentication/klacompaniontypewatch.md)
- [kLAErrorCompanionNotAvailable](localauthentication/klaerrorcompanionnotavailable.md)
- [kLAPolicyDeviceOwnerAuthenticationWithBiometricsOrCompanion](localauthentication/klapolicydeviceownerauthenticationwithbiometricsorcompanion.md)
- [kLAPolicyDeviceOwnerAuthenticationWithCompanion](localauthentication/klapolicydeviceownerauthenticationwithcompanion.md)

### Enumerations

- [LACompanionType](localauthentication/lacompaniontype.md)
