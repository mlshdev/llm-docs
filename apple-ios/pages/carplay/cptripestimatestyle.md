> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptripestimatestyle](https://developer.apple.com/documentation/carplay/cptripestimatestyle)

# CPTripEstimateStyle (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The set of display styles for trip estimates.

## Declaration

```swift
enum CPTripEstimateStyle
```

## Topics

### Styles

- [CPTripEstimateStyle.light](cptripestimatestyle/light.md): The light trip estimate display style.
- [CPTripEstimateStyle.dark](cptripestimatestyle/dark.md): The dark trip estimate display style.

### Initializers

- [init(rawValue:)](cptripestimatestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Trip Estimates

- [updateEstimates(\_:for:)](cpmaptemplate/updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [update(\_:for:with:)](cpmaptemplate/update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.

# CPTripEstimateStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The set of display styles for trip estimates.

## Declaration

```objectivec
enum CPTripEstimateStyle : NSUInteger;
```

## Topics

### Styles

- [CPTripEstimateStyleLight](cptripestimatestyle/light.md): The light trip estimate display style.
- [CPTripEstimateStyleDark](cptripestimatestyle/dark.md): The dark trip estimate display style.

## See Also

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:](cpmaptemplate/updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [updateTravelEstimates:forTrip:withTimeRemainingColor:](cpmaptemplate/update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
