> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkhybridmapconfiguration/init(elevationstyle:)](https://developer.apple.com/documentation/mapkit/mkhybridmapconfiguration/init(elevationstyle:))

# init(elevationStyle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new hybrid map configuration with the specified elevation style.

## Declaration

```swift
convenience init(elevationStyle: MKMapConfiguration.ElevationStyle)
```

## Parameters

- `elevationStyle`: One of the [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) elevation styles.

## See Also

### Creating a hybrid map configuration

- [init()](init%28%29.md): Creates a new hybrid map configuration.
- [MKMapConfiguration.ElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.

# initWithElevationStyle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new hybrid map configuration with the specified elevation style.

## Declaration

```objectivec
- (instancetype) initWithElevationStyle:(MKMapElevationStyle) elevationStyle;
```

## Parameters

- `elevationStyle`: One of the [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md) elevation styles.

## See Also

### Creating a hybrid map configuration

- [init](init%28%29.md): Creates a new hybrid map configuration.
- [MKMapElevationStyle](../mkmapconfiguration/elevationstyle-swift.enum.md): Values that control the map’s elevation style.
