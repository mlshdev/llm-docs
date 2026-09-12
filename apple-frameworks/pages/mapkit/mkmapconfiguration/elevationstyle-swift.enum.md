> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum](https://developer.apple.com/documentation/mapkit/mkmapconfiguration/elevationstyle-swift.enum)

# MKMapConfiguration.ElevationStyle (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Values that control the map’s elevation style.

## Declaration

```swift
enum ElevationStyle
```

## Topics

### Constants

- [MKMapConfiguration.ElevationStyle.flat](elevationstyle-swift.enum/flat.md): The value that represents the flat map elevation style.
- [MKMapConfiguration.ElevationStyle.realistic](elevationstyle-swift.enum/realistic.md): The value that represents a map elevation style with realistic ground contours.

### Initializers

- [init(rawValue:)](elevationstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a hybrid map configuration

- [init()](../mkhybridmapconfiguration/init%28%29.md): Creates a new hybrid map configuration.
- [init(elevationStyle:)](../mkhybridmapconfiguration/init%28elevationstyle_%29.md): Creates a new hybrid map configuration with the specified elevation style.

# MKMapElevationStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that control the map’s elevation style.

## Declaration

```objectivec
enum MKMapElevationStyle : NSInteger;
```

## Topics

### Constants

- [MKMapElevationStyleFlat](elevationstyle-swift.enum/flat.md): The value that represents the flat map elevation style.
- [MKMapElevationStyleRealistic](elevationstyle-swift.enum/realistic.md): The value that represents a map elevation style with realistic ground contours.

## See Also

### Creating a hybrid map configuration

- [init](../mkhybridmapconfiguration/init%28%29.md): Creates a new hybrid map configuration.
- [initWithElevationStyle:](../mkhybridmapconfiguration/init%28elevationstyle_%29.md): Creates a new hybrid map configuration with the specified elevation style.
