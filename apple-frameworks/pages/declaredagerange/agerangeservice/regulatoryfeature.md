> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/regulatoryfeature](https://developer.apple.com/documentation/declaredagerange/agerangeservice/regulatoryfeature)

# AgeRangeService.RegulatoryFeature

**Framework:** Declared Age Range  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

Defines the regulatory features that your app may need to support.

## Declaration

```swift
enum RegulatoryFeature
```

## Topics

### Checking regulatory requirements

- [AgeRangeService.RegulatoryFeature.declaredAgeRangeRequired](regulatoryfeature/declaredagerangerequired.md): Indicates the person is required to share their age range with your app.
- [AgeRangeService.RegulatoryFeature.significantAppChangeRequiresAdultNotification](regulatoryfeature/significantappchangerequiresadultnotification.md): Indicates that adult users must acknowledge your app’s significant change.
- [AgeRangeService.RegulatoryFeature.significantAppChangeRequiresParentalConsent](regulatoryfeature/significantappchangerequiresparentalconsent.md): Indicates a parent or guardian is required to acknowledge and consent to a significant app change.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining regulatory features

- [requiredRegulatoryFeatures](requiredregulatoryfeatures.md): A set of regulatory features that are required for the person.
