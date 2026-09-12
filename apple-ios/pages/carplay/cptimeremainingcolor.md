> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptimeremainingcolor](https://developer.apple.com/documentation/carplay/cptimeremainingcolor)

# CPTimeRemainingColor (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The color the system uses when displaying the time remaining for a trip.

## Declaration

```swift
enum CPTimeRemainingColor
```

<a id="overview"></a>

## Overview

The system determines the shade of each color based on the [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md) for the map template.

## Topics

### Colors

- [CPTimeRemainingColor.default](cptimeremainingcolor/default.md): The system default color.
- [CPTimeRemainingColor.green](cptimeremainingcolor/green.md): A shade of green.
- [CPTimeRemainingColor.orange](cptimeremainingcolor/orange.md): A shade of orange.
- [CPTimeRemainingColor.red](cptimeremainingcolor/red.md): A shade of red.

### Initializers

- [init(rawValue:)](cptimeremainingcolor/init%28rawvalue_%29.md)

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
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](cptripestimatestyle.md): The set of display styles for trip estimates.

# CPTimeRemainingColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The color the system uses when displaying the time remaining for a trip.

## Declaration

```objectivec
enum CPTimeRemainingColor : NSUInteger;
```

<a id="overview"></a>

## Overview

The system determines the shade of each color based on the [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md) for the map template.

## Topics

### Colors

- [CPTimeRemainingColorDefault](cptimeremainingcolor/default.md): The system default color.
- [CPTimeRemainingColorGreen](cptimeremainingcolor/green.md): A shade of green.
- [CPTimeRemainingColorOrange](cptimeremainingcolor/orange.md): A shade of orange.
- [CPTimeRemainingColorRed](cptimeremainingcolor/red.md): A shade of red.

## See Also

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:](cpmaptemplate/updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [updateTravelEstimates:forTrip:withTimeRemainingColor:](cpmaptemplate/update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](cptripestimatestyle.md): The set of display styles for trip estimates.
