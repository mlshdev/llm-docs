> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityelement](https://developer.apple.com/documentation/passkit/pkidentityelement)

# PKIdentityElement (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the elements an app requests from identity documents.

## Declaration

```swift
class PKIdentityElement
```

<a id="overview"></a>

## Overview

If an app requests an element from a document type that doesn’t support it, the system ignores the element.

## Topics

### Getting identity elements

- [address](pkidentityelement/address.md): An element that represents the user’s home address.
- [dateOfBirth](pkidentityelement/dateofbirth.md): An element that represents the user’s date of birth.
- [dhsTemporaryLawfulStatus](pkidentityelement/dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).
- [documentDHSComplianceStatus](pkidentityelement/documentdhscompliancestatus.md)
- [documentIssueDate](pkidentityelement/documentissuedate.md): An element that represents the issue date of the document.
- [documentExpirationDate](pkidentityelement/documentexpirationdate.md): An element that represents the expiration date of the document.
- [documentNumber](pkidentityelement/documentnumber.md): An element that represents the document’s number, as the issuing authority defines.
- [drivingPrivileges](pkidentityelement/drivingprivileges.md): An element that represents the user’s driving privileges.
- [eyeColor](pkidentityelement/eyecolor.md): The user’s eye color on record with the issuer.
- [familyName](pkidentityelement/familyname.md): An element that represents the user’s family name.
- [givenName](pkidentityelement/givenname.md): An element that represents the user’s given name.
- [hairColor](pkidentityelement/haircolor.md): The user’s hair color on record with the issuer.
- [height](pkidentityelement/height.md): The user’s height on record with the issuer.
- [issuingAuthority](pkidentityelement/issuingauthority.md): An element that represents the user’s issuing authority.
- [name](pkidentityelement/name.md): The user’s full name.
- [nationality](pkidentityelement/nationality.md): The mobile document holder’s nationality.
- [organDonorStatus](pkidentityelement/organdonorstatus.md): The user’s organ donor status on record with the issuer.
- [placeOfBirth](pkidentityelement/placeofbirth.md): The place where the mobile document holder was born.
- [portrait](pkidentityelement/portrait.md): An element that represents the user’s photo.
- [sex](pkidentityelement/sex.md): An element that represents the document holder’s sex.
- [signatureUsualMark](pkidentityelement/signatureusualmark.md): The signature or usual mark of the mobile document holder.
- [weight](pkidentityelement/weight.md): The user’s weight on record with the issuer.
- [veteranStatus](pkidentityelement/veteranstatus.md): The user’s veteran status on record with the issuer.
- [signatureUsualMark](pkidentityelement/signatureusualmark.md): The signature or usual mark of the mobile document holder.
- [placeOfBirth](pkidentityelement/placeofbirth.md): The place where the mobile document holder was born.
- [nationality](pkidentityelement/nationality.md): The mobile document holder’s nationality.
- [dhsTemporaryLawfulStatus](pkidentityelement/dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).

### Getting an age identity element

- [age](pkidentityelement/age.md): An element that represents the user’s age, in years.
- [age(atLeast:)](pkidentityelement/age%28atleast_%29.md): Returns an element that represents the user’s age is at least the age you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
- [VerifyIdentityWithWalletButton](verifyidentitywithwalletbutton.md): A type that displays a button to present the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.

# PKIdentityElement (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the elements an app requests from identity documents.

## Declaration

```objectivec
@interface PKIdentityElement : NSObject
```

<a id="overview"></a>

## Overview

If an app requests an element from a document type that doesn’t support it, the system ignores the element.

## Topics

### Getting identity elements

- [addressElement](pkidentityelement/address.md): An element that represents the user’s home address.
- [dateOfBirthElement](pkidentityelement/dateofbirth.md): An element that represents the user’s date of birth.
- [dhsTemporaryLawfulStatusElement](pkidentityelement/dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).
- [documentDHSComplianceStatusElement](pkidentityelement/documentdhscompliancestatus.md)
- [documentIssueDateElement](pkidentityelement/documentissuedate.md): An element that represents the issue date of the document.
- [documentExpirationDateElement](pkidentityelement/documentexpirationdate.md): An element that represents the expiration date of the document.
- [documentNumberElement](pkidentityelement/documentnumber.md): An element that represents the document’s number, as the issuing authority defines.
- [drivingPrivilegesElement](pkidentityelement/drivingprivileges.md): An element that represents the user’s driving privileges.
- [eyeColorElement](pkidentityelement/eyecolor.md): The user’s eye color on record with the issuer.
- [familyNameElement](pkidentityelement/familyname.md): An element that represents the user’s family name.
- [givenNameElement](pkidentityelement/givenname.md): An element that represents the user’s given name.
- [hairColorElement](pkidentityelement/haircolor.md): The user’s hair color on record with the issuer.
- [heightElement](pkidentityelement/height.md): The user’s height on record with the issuer.
- [issuingAuthorityElement](pkidentityelement/issuingauthority.md): An element that represents the user’s issuing authority.
- [nameElement](pkidentityelement/name.md): The user’s full name.
- [nationalityElement](pkidentityelement/nationality.md): The mobile document holder’s nationality.
- [organDonorStatusElement](pkidentityelement/organdonorstatus.md): The user’s organ donor status on record with the issuer.
- [placeOfBirthElement](pkidentityelement/placeofbirth.md): The place where the mobile document holder was born.
- [portraitElement](pkidentityelement/portrait.md): An element that represents the user’s photo.
- [sexElement](pkidentityelement/sex.md): An element that represents the document holder’s sex.
- [signatureUsualMarkElement](pkidentityelement/signatureusualmark.md): The signature or usual mark of the mobile document holder.
- [weightElement](pkidentityelement/weight.md): The user’s weight on record with the issuer.
- [veteranStatusElement](pkidentityelement/veteranstatus.md): The user’s veteran status on record with the issuer.
- [signatureUsualMarkElement](pkidentityelement/signatureusualmark.md): The signature or usual mark of the mobile document holder.
- [placeOfBirthElement](pkidentityelement/placeofbirth.md): The place where the mobile document holder was born.
- [nationalityElement](pkidentityelement/nationality.md): The mobile document holder’s nationality.
- [dhsTemporaryLawfulStatusElement](pkidentityelement/dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).

### Getting an age identity element

- [ageElement](pkidentityelement/age.md): An element that represents the user’s age, in years.
- [ageThresholdElementWithAge:](pkidentityelement/age%28atleast_%29.md): Returns an element that represents the user’s age is at least the age you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
