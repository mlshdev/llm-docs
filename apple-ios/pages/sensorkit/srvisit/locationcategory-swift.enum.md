> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srvisit/locationcategory-swift.enum](https://developer.apple.com/documentation/sensorkit/srvisit/locationcategory-swift.enum)

# SRVisit.LocationCategory (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Types of locations.

## Declaration

```swift
enum LocationCategory
```

## Topics

### Categories

- [SRVisit.LocationCategory.gym](locationcategory-swift.enum/gym.md): The user’s gym.
- [SRVisit.LocationCategory.home](locationcategory-swift.enum/home.md): The user’s home.
- [SRVisit.LocationCategory.school](locationcategory-swift.enum/school.md): The user’s school.
- [SRVisit.LocationCategory.unknown](locationcategory-swift.enum/unknown.md): A location the user frequents that’s an unknown type.
- [SRVisit.LocationCategory.work](locationcategory-swift.enum/work.md): The user’s workplace.

### Initializers

- [init(rawValue:)](locationcategory-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Visit Information

- [arrivalDateInterval](arrivaldateinterval.md): A range of time within which the user arrives at a location of interest.
- [departureDateInterval](departuredateinterval.md): A range of time within which the user departs from a location of interest.
- [distanceFromHome](distancefromhome.md): The location’s distance from the home-category location.
- [locationCategory](locationcategory-swift.property.md): The location’s type.

# SRLocationCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Types of locations.

## Declaration

```objectivec
enum SRLocationCategory : NSInteger;
```

## Topics

### Categories

- [SRLocationCategoryGym](locationcategory-swift.enum/gym.md): The user’s gym.
- [SRLocationCategoryHome](locationcategory-swift.enum/home.md): The user’s home.
- [SRLocationCategorySchool](locationcategory-swift.enum/school.md): The user’s school.
- [SRLocationCategoryUnknown](locationcategory-swift.enum/unknown.md): A location the user frequents that’s an unknown type.
- [SRLocationCategoryWork](locationcategory-swift.enum/work.md): The user’s workplace.

## See Also

### Accessing Visit Information

- [arrivalDateInterval](arrivaldateinterval.md): A range of time within which the user arrives at a location of interest.
- [departureDateInterval](departuredateinterval.md): A range of time within which the user departs from a location of interest.
- [distanceFromHome](distancefromhome.md): The location’s distance from the home-category location.
- [locationCategory](locationcategory-swift.property.md): The location’s type.
