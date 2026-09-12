> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/parentalcontrols](https://developer.apple.com/documentation/declaredagerange/agerangeservice/parentalcontrols)

# AgeRangeService.ParentalControls

**Framework:** Declared Age Range  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An option set to define parental controls enabled and shared as a part of age range declaration.

## Declaration

```swift
struct ParentalControls
```

## Topics

### Creating a value

- [init(rawValue:)](parentalcontrols/init%28rawvalue_%29.md): Creates a parental controls option set with the specified raw value.

### Accessing the raw value

- [description](parentalcontrols/description.md): A list of active parental controls, for debugging purposes.
- [rawValue](parentalcontrols/rawvalue.md): The raw value of the option set.

### Defining parental control options

- [communicationLimits](parentalcontrols/communicationlimits.md): Indicates that the system limits communication features for the minor.
- [significantAppChangeApprovalRequired](parentalcontrols/significantappchangeapprovalrequired.md): Deprecated. Indicates a notification obligation for significant app updates.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the age range

- [AgeRangeService.AgeRangeDeclaration](agerangedeclaration.md): Constants that describe how an adult, parent, or guardian set the age range.
- [AgeRangeService.AgeRange](agerange.md): Information about a person’s age range based on their response to your age range request.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-2go8c.md): Requests an age range for the person signed in to iCloud on the device.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-4yo3r.md): Requests an age range for the person logged onto iCloud on the device.
- [AgeRangeService.Response](response.md): A response indicating whether a person shared their age range or declined to share it.
