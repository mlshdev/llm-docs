> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:)](https://developer.apple.com/documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:))

# init(elevationStyle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new standard map configuration with the specified elevation style.

## Declaration

```swift
convenience init(elevationStyle: MKMapConfiguration.ElevationStyle)
```

## Parameters

- `elevationStyle`: One of the [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) modes.

## See Also

### Creating a standard map configuration

- [init()](init%28%29.md): Creates a new standard map configuration.
- [init(elevationStyle:emphasisStyle:)](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [init(emphasisStyle:)](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapConfiguration.EmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.

# initWithElevationStyle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new standard map configuration with the specified elevation style.

## Declaration

```objectivec
- (instancetype) initWithElevationStyle:(MKMapElevationStyle) elevationStyle;
```

## Parameters

- `elevationStyle`: One of the [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) modes.

## See Also

### Creating a standard map configuration

- [init](init%28%29.md): Creates a new standard map configuration.
- [initWithElevationStyle:emphasisStyle:](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [initWithEmphasisStyle:](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapEmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.
