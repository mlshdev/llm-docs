> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum](https://developer.apple.com/documentation/mapkit/mkstandardmapconfiguration/emphasisstyle-swift.enum)

# MKStandardMapConfiguration.EmphasisStyle (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Values that control how the framework emphasizes map features.

## Declaration

```swift
enum EmphasisStyle
```

## Topics

### Controlling the map’s emphasis

- [MKStandardMapConfiguration.EmphasisStyle.default](emphasisstyle-swift.enum/default.md): The default level of emphasis.
- [MKStandardMapConfiguration.EmphasisStyle.muted](emphasisstyle-swift.enum/muted.md): The muted level of emphasis.
- [MKStandardMapConfiguration.EmphasisStyle.default](emphasisstyle-swift.enum/default.md): The default level of emphasis.
- [MKStandardMapConfiguration.EmphasisStyle.muted](emphasisstyle-swift.enum/muted.md): The muted level of emphasis.

### Initializers

- [init(rawValue:)](emphasisstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a standard map configuration

- [init()](init%28%29.md): Creates a new standard map configuration.
- [init(elevationStyle:)](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [init(elevationStyle:emphasisStyle:)](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [init(emphasisStyle:)](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

# MKStandardMapEmphasisStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that control how the framework emphasizes map features.

## Declaration

```objectivec
enum MKStandardMapEmphasisStyle : NSInteger;
```

## Topics

### Controlling the map’s emphasis

- [MKStandardMapEmphasisStyleDefault](emphasisstyle-swift.enum/default.md): The default level of emphasis.
- [MKStandardMapEmphasisStyleMuted](emphasisstyle-swift.enum/muted.md): The muted level of emphasis.
- [MKStandardMapEmphasisStyleDefault](emphasisstyle-swift.enum/default.md): The default level of emphasis.
- [MKStandardMapEmphasisStyleMuted](emphasisstyle-swift.enum/muted.md): The muted level of emphasis.

## See Also

### Creating a standard map configuration

- [init](init%28%29.md): Creates a new standard map configuration.
- [initWithElevationStyle:](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [initWithElevationStyle:emphasisStyle:](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [initWithEmphasisStyle:](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
