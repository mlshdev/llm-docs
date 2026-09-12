> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/agerangedeclaration](https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerangedeclaration)

# AgeRangeService.AgeRangeDeclaration

**Framework:** Declared Age Range  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Constants that describe how an adult, parent, or guardian set the age range.

## Declaration

```swift
enum AgeRangeDeclaration
```

<a id="overview"></a>

## Overview

The system provides this information to help you understand the reliability and source of the age range data. Different declaration types may be appropriate for different types of content experiences in your app.

## Topics

### Determining the age set method

- [AgeRangeService.AgeRangeDeclaration.selfDeclared](agerangedeclaration/selfdeclared.md): Indicates the person signed in to iCloud to set their own age range.
- [AgeRangeService.AgeRangeDeclaration.guardianDeclared](agerangedeclaration/guardiandeclared.md): Indicates a parent, guardian, or Family Organizer in a Family Sharing group set the age range.
- [AgeRangeService.AgeRangeDeclaration.confirmed](agerangedeclaration/confirmed.md): Indicates a user’s age range was set using a scrutinized method, like a credit card or government ID.

### Deprecated

- [AgeRangeService.AgeRangeDeclaration.paymentChecked](agerangedeclaration/paymentchecked.md): Deprecated. Indicates the person set their own age range using a payment method, like a credit card.
- [AgeRangeService.AgeRangeDeclaration.governmentIDChecked](agerangedeclaration/governmentidchecked.md): Deprecated. Indicates the person set their own age range using a government ID.
- [AgeRangeService.AgeRangeDeclaration.checkedByOtherMethod](agerangedeclaration/checkedbyothermethod.md): Deprecated. Indicates the person set their own age range using an unspecified method.
- [AgeRangeService.AgeRangeDeclaration.guardianPaymentChecked](agerangedeclaration/guardianpaymentchecked.md): Deprecated. Indicates a parent, guardian, or Family Organizer in a Family Sharing group set the age range using a payment method, like a credit card.
- [AgeRangeService.AgeRangeDeclaration.guardianGovernmentIDChecked](agerangedeclaration/guardiangovernmentidchecked.md): Deprecated. Indicates a parent, guardian, or Family Organizer in a Family Sharing group set the age range using a government ID.
- [AgeRangeService.AgeRangeDeclaration.guardianCheckedByOtherMethod](agerangedeclaration/guardiancheckedbyothermethod.md): Deprecated. Indicates a parent, guardian, or Family Organizer in a Family Sharing group set the age range using an unspecified method.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the age range

- [AgeRangeService.AgeRange](agerange.md): Information about a person’s age range based on their response to your age range request.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-2go8c.md): Requests an age range for the person signed in to iCloud on the device.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-4yo3r.md): Requests an age range for the person logged onto iCloud on the device.
- [AgeRangeService.Response](response.md): A response indicating whether a person shared their age range or declined to share it.
- [AgeRangeService.ParentalControls](parentalcontrols.md): An option set to define parental controls enabled and shared as a part of age range declaration.
