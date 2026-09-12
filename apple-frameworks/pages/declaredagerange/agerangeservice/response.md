> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/response](https://developer.apple.com/documentation/declaredagerange/agerangeservice/response)

# AgeRangeService.Response

**Framework:** Declared Age Range  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A response indicating whether a person shared their age range or declined to share it.

## Declaration

```swift
enum Response
```

## Topics

### Getting the age range response

- [AgeRangeService.Response.declinedSharing](response/declinedsharing.md): Indicates the person declined to share their age range with your app.
- [AgeRangeService.Response.sharing(range:)](response/sharing%28range_%29.md): Contains the person’s shared age range information.

## See Also

### Getting the age range

- [AgeRangeService.AgeRangeDeclaration](agerangedeclaration.md): Constants that describe how an adult, parent, or guardian set the age range.
- [AgeRangeService.AgeRange](agerange.md): Information about a person’s age range based on their response to your age range request.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-2go8c.md): Requests an age range for the person signed in to iCloud on the device.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-4yo3r.md): Requests an age range for the person logged onto iCloud on the device.
- [AgeRangeService.ParentalControls](parentalcontrols.md): An option set to define parental controls enabled and shared as a part of age range declaration.
