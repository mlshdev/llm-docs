> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmroom/accessories](https://developer.apple.com/documentation/homekit/hmroom/accessories)

# accessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The collection of accessories in the room.

## Declaration

```swift
var accessories: [HMAccessory] { get }
```

<a id="Discussion"></a>

## Discussion

You assign accessories to a room using the [assignAccessory(\_:to:completionHandler:)](../hmhome/assignaccessory%28__to_completionhandler_%29.md) method of [HMHome](../hmhome.md).

# accessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The collection of accessories in the room.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMAccessory *> * accessories;
```

<a id="Discussion"></a>

## Discussion

You assign accessories to a room using the [assignAccessory:toRoom:completionHandler:](../hmhome/assignaccessory%28__to_completionhandler_%29.md) method of [HMHome](../hmhome.md).
