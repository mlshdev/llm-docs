> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityelement/name](https://developer.apple.com/documentation/passkit/pkidentityelement/name)

# name (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The user’s full name.

## Declaration

```swift
class var name: PKIdentityElement { get }
```

<a id="Discussion"></a>

## Discussion

For National ID and other identity documents, requesting this element returns the person’s full name as a single properly formatted string. The response may also include [givenName](givenname.md) and [familyName](familyname.md) when available.

For driver’s license documents, requesting this element returns the [givenName](givenname.md) and [familyName](familyname.md) as separate fields, but doesn’t return a full name field. This limitation exists because the mDL (mobile Driver’s License) standard doesn’t currently include a full name field in its specification.

## See Also

### Getting identity elements

- [address](address.md): An element that represents the user’s home address.
- [dateOfBirth](dateofbirth.md): An element that represents the user’s date of birth.
- [dhsTemporaryLawfulStatus](dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).
- [documentDHSComplianceStatus](documentdhscompliancestatus.md)
- [documentIssueDate](documentissuedate.md): An element that represents the issue date of the document.
- [documentExpirationDate](documentexpirationdate.md): An element that represents the expiration date of the document.
- [documentNumber](documentnumber.md): An element that represents the document’s number, as the issuing authority defines.
- [drivingPrivileges](drivingprivileges.md): An element that represents the user’s driving privileges.
- [eyeColor](eyecolor.md): The user’s eye color on record with the issuer.
- [familyName](familyname.md): An element that represents the user’s family name.
- [givenName](givenname.md): An element that represents the user’s given name.
- [hairColor](haircolor.md): The user’s hair color on record with the issuer.
- [height](height.md): The user’s height on record with the issuer.
- [issuingAuthority](issuingauthority.md): An element that represents the user’s issuing authority.
- [nationality](nationality.md): The mobile document holder’s nationality.

# nameElement (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The user’s full name.

## Declaration

```objectivec
@property (class, nonatomic, readonly) PKIdentityElement * nameElement;
```

<a id="Discussion"></a>

## Discussion

For National ID and other identity documents, requesting this element returns the person’s full name as a single properly formatted string. The response may also include [givenNameElement](givenname.md) and [familyNameElement](familyname.md) when available.

For driver’s license documents, requesting this element returns the [givenNameElement](givenname.md) and [familyNameElement](familyname.md) as separate fields, but doesn’t return a full name field. This limitation exists because the mDL (mobile Driver’s License) standard doesn’t currently include a full name field in its specification.

## See Also

### Getting identity elements

- [addressElement](address.md): An element that represents the user’s home address.
- [dateOfBirthElement](dateofbirth.md): An element that represents the user’s date of birth.
- [dhsTemporaryLawfulStatusElement](dhstemporarylawfulstatus.md): Indicates whether the mobile document holder has temporary lawful status based on information from the U.S. Department of Homeland Security (DHS).
- [documentDHSComplianceStatusElement](documentdhscompliancestatus.md)
- [documentIssueDateElement](documentissuedate.md): An element that represents the issue date of the document.
- [documentExpirationDateElement](documentexpirationdate.md): An element that represents the expiration date of the document.
- [documentNumberElement](documentnumber.md): An element that represents the document’s number, as the issuing authority defines.
- [drivingPrivilegesElement](drivingprivileges.md): An element that represents the user’s driving privileges.
- [eyeColorElement](eyecolor.md): The user’s eye color on record with the issuer.
- [familyNameElement](familyname.md): An element that represents the user’s family name.
- [givenNameElement](givenname.md): An element that represents the user’s given name.
- [hairColorElement](haircolor.md): The user’s hair color on record with the issuer.
- [heightElement](height.md): The user’s height on record with the issuer.
- [issuingAuthorityElement](issuingauthority.md): An element that represents the user’s issuing authority.
- [nationalityElement](nationality.md): The mobile document holder’s nationality.
