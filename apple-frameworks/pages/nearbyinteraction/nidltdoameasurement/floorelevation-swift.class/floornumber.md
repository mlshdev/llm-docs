> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.class/floornumber](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.class/floornumber)

# floorNumber (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The floor number on which the anchor resides.

## Declaration

```swift
var floorNumber: Int { get }
```

<a id="discussion"></a>

## Discussion

This property indicates the floor that the DL-TDOA anchor is on. Negative values represent floors below ground level.

Use this property in combination with [height](height.md) to determine the precise vertical position of the anchor within a floor, for deployments in buildings that have multiple floors.

## See Also

### Accessing floor elevation components

- [height](height.md): The height above the floor in meters.

# floorNumber (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The floor number on which the anchor resides.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger floorNumber;
```

<a id="discussion"></a>

## Discussion

This property indicates the floor that the DL-TDOA anchor is on. Negative values represent floors below ground level.

Use this property in combination with [height](height.md) to determine the precise vertical position of the anchor within a floor, for deployments in buildings that have multiple floors.

## See Also

### Accessing floor elevation components

- [height](height.md): The height above the floor in meters.
