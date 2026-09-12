> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/agerange](https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerange)

# AgeRangeService.AgeRange

**Framework:** Declared Age Range  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Information about a person’s age range based on their response to your age range request.

## Declaration

```swift
struct AgeRange
```

<a id="overview"></a>

## Overview

This provides the minimum information necessary for you to make content decisions while protecting the person’s privacy. Rather than receiving an exact age, you receive age range bounds that correspond to your specified age gates.

For more information about requesting age ranges, refer to `requestAgeRange(ageGates:_:_:in:)`.

## Topics

### Fetching the age range

- [lowerBound](agerange/lowerbound.md): The minimum age in the person’s declared age range.
- [upperBound](agerange/upperbound.md): The maximum age in the person’s declared age range.
- [ageRangeDeclaration](agerange/agerangedeclaration.md): Information about how the person set their age range.
- [activeParentalControls](agerange/activeparentalcontrols.md): The parental controls that are active on the device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the age range

- [AgeRangeService.AgeRangeDeclaration](agerangedeclaration.md): Constants that describe how an adult, parent, or guardian set the age range.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-2go8c.md): Requests an age range for the person signed in to iCloud on the device.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-4yo3r.md): Requests an age range for the person logged onto iCloud on the device.
- [AgeRangeService.Response](response.md): A response indicating whether a person shared their age range or declined to share it.
- [AgeRangeService.ParentalControls](parentalcontrols.md): An option set to define parental controls enabled and shared as a part of age range declaration.
