> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicensedatarequest/response/documentelements-swift.struct](https://developer.apple.com/documentation/proximityreader/mobiledriverslicensedatarequest/response/documentelements-swift.struct)

# MobileDriversLicenseDataRequest.Response.DocumentElements

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A type that contains the document elements from a successful mobile driver’s license data request.

## Declaration

```swift
struct DocumentElements
```

## Topics

### Structures

- [MobileDriversLicenseDataRequest.Response.DocumentElements.AAMVADrivingPrivilege](documentelements-swift.struct/aamvadrivingprivilege.md): A type that represents the mobile driver’s license holder’s AAMVA driving privileges.
- [MobileDriversLicenseDataRequest.Response.DocumentElements.DrivingPrivilege](documentelements-swift.struct/drivingprivilege.md): A type that represents a driving privilege which the mobile driver’s license holder possesses.
- [MobileDriversLicenseDataRequest.Response.DocumentElements.IssuingAuthority](documentelements-swift.struct/issuingauthority-swift.struct.md): A type that represents the state or government that issued the identity document.

### Instance Properties

- [aamvaDrivingPrivileges](documentelements-swift.struct/aamvadrivingprivileges.md): The mobile driver’s license holder’s AAMVA driving privileges.
- [address](documentelements-swift.struct/address.md): The mobile driver’s license holder’s address on record with the issuer.
- [age](documentelements-swift.struct/age.md): The mobile driver’s license holder’s age in years.
- [ageAtLeastElements](documentelements-swift.struct/ageatleastelements.md): A dictionary of values that indicate whether the document holder is at least the specified age.
- [dateOfBirth](documentelements-swift.struct/dateofbirth.md): The date of birth of the mobile driver’s license holder.
- [documentDHSComplianceStatus](documentelements-swift.struct/documentdhscompliancestatus.md): The document’s DHS (U.S. Department of Homeland Security) compliance status.
- [documentExpirationDate](documentelements-swift.struct/documentexpirationdate.md): The document’s expiration date.
- [documentIssueDate](documentelements-swift.struct/documentissuedate.md): The document’s issue date.
- [documentNumber](documentelements-swift.struct/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [drivingPrivileges](documentelements-swift.struct/drivingprivileges.md): The mobile driver’s license holder’s driving privileges.
- [eyeColor](documentelements-swift.struct/eyecolor-swift.property.md): The mobile identity document holder’s eye color on record with the issuer.
- [hairColor](documentelements-swift.struct/haircolor-swift.property.md): The mobile identity document holder’s hair color on record with the issuer.
- [height](documentelements-swift.struct/height.md): The mobile identity document holder’s height on record with the issuer.
- [isOrganDonor](documentelements-swift.struct/isorgandonor.md): A Boolean value indicating whether the identity document holder is an organ donor.
- [isVeteran](documentelements-swift.struct/isveteran.md): A Boolean value indicating whether the identity document holder is a veteran.
- [issuingAuthority](documentelements-swift.struct/issuingauthority-swift.property.md): The state or government that issued the identity document.
- [name](documentelements-swift.struct/name.md): The mobile driver’s license holder’s name.
- [nameComponents](documentelements-swift.struct/namecomponents.md): Deprecated. The mobile driver’s license holder’s name components.
- [nationality](documentelements-swift.struct/nationality.md): The nationality of the identity document holder on record with the issuer.
- [placeOfBirth](documentelements-swift.struct/placeofbirth.md): The birth place of the identity document holder on record with the issuer.
- [portraitData](documentelements-swift.struct/portraitdata.md): The portrait data of the mobile driver’s license holder on record with the issuer.
- [sex](documentelements-swift.struct/sex-swift.property.md): The mobile driver’s license holder’s sex.
- [signatureUsualMarkData](documentelements-swift.struct/signatureusualmarkdata.md): The signature or usual mark data of the identity document holder on record with the issuer.
- [weight](documentelements-swift.struct/weight.md): The mobile identity document holder’s weight on record with the issuer.

### Enumerations

- [MobileDriversLicenseDataRequest.Response.DocumentElements.DHSComplianceStatus](documentelements-swift.struct/dhscompliancestatus.md): A type that represents the mobile driver’s license’ DHS (U.S. Department of Homeland Security) compliance status.
- [MobileDriversLicenseDataRequest.Response.DocumentElements.EyeColor](documentelements-swift.struct/eyecolor-swift.enum.md): A type that represents the mobile driver’s license holder’s eye color
- [MobileDriversLicenseDataRequest.Response.DocumentElements.HairColor](documentelements-swift.struct/haircolor-swift.enum.md): A type that represents the mobile driver’s license holder’s hair color
- [MobileDriversLicenseDataRequest.Response.DocumentElements.Sex](documentelements-swift.struct/sex-swift.enum.md): A type that represents the mobile driver’s license holder’s sex.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
