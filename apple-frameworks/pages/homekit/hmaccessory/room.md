> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/room](https://developer.apple.com/documentation/homekit/hmaccessory/room)

# room (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The room containing the accessory.

## Declaration

```swift
weak var room: HMRoom? { get }
```

<a id="Discussion"></a>

## Discussion

Assign accessories to new rooms using [assignAccessory(\_:to:completionHandler:)](../hmhome/assignaccessory%28__to_completionhandler_%29.md).

## See Also

### Locating an accessory

- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.

# room (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The room containing the accessory.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) HMRoom * room;
```

<a id="Discussion"></a>

## Discussion

Assign accessories to new rooms using [assignAccessory:toRoom:completionHandler:](../hmhome/assignaccessory%28__to_completionhandler_%29.md).

## See Also

### Locating an accessory

- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.
