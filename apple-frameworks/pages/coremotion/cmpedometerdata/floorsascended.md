> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerdata/floorsascended](https://developer.apple.com/documentation/coremotion/cmpedometerdata/floorsascended)

# floorsAscended (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The approximate number of floors ascended by walking.

## Declaration

```swift
var floorsAscended: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects only the floors ascended while the user was walking or running up stairs and does not reflect the floors ascended by elevator or other assisted means. A single floor has a height of approximately three meters. The value in this property is `nil` when floor counting is not supported on the current device.

## See Also

### Getting the Floor Counts

- [floorsDescended](floorsdescended.md): The approximate number of floors descended by walking.

# floorsAscended (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The approximate number of floors ascended by walking.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * floorsAscended;
```

<a id="Discussion"></a>

## Discussion

This value reflects only the floors ascended while the user was walking or running up stairs and does not reflect the floors ascended by elevator or other assisted means. A single floor has a height of approximately three meters. The value in this property is `nil` when floor counting is not supported on the current device.

## See Also

### Getting the Floor Counts

- [floorsDescended](floorsdescended.md): The approximate number of floors descended by walking.
