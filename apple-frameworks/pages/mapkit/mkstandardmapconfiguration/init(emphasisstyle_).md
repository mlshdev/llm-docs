> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkstandardmapconfiguration/init(emphasisstyle:)](https://developer.apple.com/documentation/mapkit/mkstandardmapconfiguration/init(emphasisstyle:))

# init(emphasisStyle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a standard map configuration with the specified emphasis style.

## Declaration

```swift
convenience init(emphasisStyle: MKStandardMapConfiguration.EmphasisStyle)
```

## Parameters

- `emphasisStyle`: One of the [MKStandardMapConfiguration.EmphasisStyle](emphasisstyle-swift.enum.md) styles.

## See Also

### Creating a standard map configuration

- [init()](init%28%29.md): Creates a new standard map configuration.
- [init(elevationStyle:)](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [init(elevationStyle:emphasisStyle:)](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapConfiguration.EmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.

# initWithEmphasisStyle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a standard map configuration with the specified emphasis style.

## Declaration

```objectivec
- (instancetype) initWithEmphasisStyle:(MKStandardMapEmphasisStyle) emphasisStyle;
```

## Parameters

- `emphasisStyle`: One of the [MKStandardMapEmphasisStyle](emphasisstyle-swift.enum.md) styles.

## See Also

### Creating a standard map configuration

- [init](init%28%29.md): Creates a new standard map configuration.
- [initWithElevationStyle:](init%28elevationstyle_%29.md): Creates a new standard map configuration with the specified elevation style.
- [initWithElevationStyle:emphasisStyle:](init%28elevationstyle_emphasisstyle_%29.md): Creates a standard map configuration with the specified elevation and emphasis styles.
- [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
- [MKStandardMapEmphasisStyle](emphasisstyle-swift.enum.md): Values that control how the framework emphasizes map features.
