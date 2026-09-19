> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.class/height

# height (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The height above the floor in meters.

## Declaration

```swift
var height: Double { get }
```

<a id="discussion"></a>

## Discussion

This property specifies the vertical distance, in meters, from the floor surface to the DL-TDOA anchor’s location in the environment.

Use this property in combination with [floorNumber](floornumber.md) to determine the complete vertical position of the anchor in a multi-story environment.

## See Also

### Accessing floor elevation components

- [floorNumber](floornumber.md): The floor number on which the anchor resides.

# height (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The height above the floor in meters.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double height;
```

<a id="discussion"></a>

## Discussion

This property specifies the vertical distance, in meters, from the floor surface to the DL-TDOA anchor’s location in the environment.

Use this property in combination with [floorNumber](floornumber.md) to determine the complete vertical position of the anchor in a multi-story environment.

## See Also

### Accessing floor elevation components

- [floorNumber](floornumber.md): The floor number on which the anchor resides.
