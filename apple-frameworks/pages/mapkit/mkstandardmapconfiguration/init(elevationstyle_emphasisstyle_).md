> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:emphasisstyle:)](https://developer.apple.com/documentation/mapkit/mkstandardmapconfiguration/init(elevationstyle:emphasisstyle:))

# init(elevationStyle:emphasisStyle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a standard map configuration with the specified elevation and emphasis styles.

## Declaration

```swift
convenience init(elevationStyle: MKMapConfiguration.ElevationStyle, emphasisStyle: MKStandardMapConfiguration.EmphasisStyle)
```

## Parameters

- `elevationStyle`: One of the [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) modes.
- `emphasisStyle`: One of the [MKStandardMapConfiguration.EmphasisStyle](emphasisstyle-swift.enum.md) styles.

## See Also

### Creating a standard map configuration

- [init()](init%28%29.md): Creates a new standard map configuration.
- [init(elevationStyle:)](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [init(emphasisStyle:)](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapConfiguration.EmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.

# initWithElevationStyle:emphasisStyle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a standard map configuration with the specified elevation and emphasis styles.

## Declaration

```objectivec
- (instancetype) initWithElevationStyle:(MKMapElevationStyle) elevationStyle emphasisStyle:(MKStandardMapEmphasisStyle) emphasisStyle;
```

## Parameters

- `elevationStyle`: One of the [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) modes.
- `emphasisStyle`: One of the [MKStandardMapEmphasisStyle](emphasisstyle-swift.enum.md) styles.

## See Also

### Creating a standard map configuration

- [init](init%28%29.md): Creates a new standard map configuration.
- [initWithElevationStyle:](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [initWithEmphasisStyle:](init%28emphasisstyle_%29.md): Creates a standard map configuration with the specified emphasis style.
- [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapEmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.
