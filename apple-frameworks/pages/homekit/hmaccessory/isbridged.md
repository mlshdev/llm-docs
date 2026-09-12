> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/isbridged](https://developer.apple.com/documentation/homekit/hmaccessory/isbridged)

# isBridged (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean that indicates whether the accessory is accessed through a bridge.

## Declaration

```swift
var isBridged: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A bridge is a special type of accessory that allows you to communicate with accessories that can’t communicate directly with HomeKit. For example, a bridge might be a hub for multiple lights that use a communication protocol other than HomeKit Accessory Protocol.

Bridged accessories have the [isBridged](isbridged.md) property set to [true](https://developer.apple.com/documentation/swift/true) and depend on the bridge to communicate with HomeKit. All other accessories, including the bridge itself, have an [isBridged](isbridged.md) property setting of [false](https://developer.apple.com/documentation/swift/false).

To add a bridge to a home, use the home’s [addAndSetupAccessories(completionHandler:)](../hmhome/addandsetupaccessories%28completionhandler_%29.md) method, as you would for any other accessory. The accessories behind the bridge are automatically added to the home as well. The home’s delegate doesn’t receive a [home(\_:didAdd:)](../hmhomedelegate/home%28__didadd_%29-6jcl7.md) delegate message for the bridge, but does receive one for each accessory behind the bridge.

When you add a bridge to a room, the accessories behind the bridge are not automatically added to the room because the bridge and its accessories might be located in different rooms. Manage each accessory’s room independently.

If you remove a bridge from the home, all of its accessories are also removed. On the other hand, you can’t directly remove a bridged accessory from the home. You can only remove the bridge.

In all other respects, you treat the accessories behind a bridge in the same way as any other accessory in a home. They appear in the home’s [accessories](../hmhome/accessories.md) array like non-bridged accessories, and respond to all the same commands.

## See Also

### Managing bridged accessories

- [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.
- [identifiersForBridgedAccessories](identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.

# bridged (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean that indicates whether the accessory is accessed through a bridge.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBridged) BOOL bridged;
```

<a id="Discussion"></a>

## Discussion

A bridge is a special type of accessory that allows you to communicate with accessories that can’t communicate directly with HomeKit. For example, a bridge might be a hub for multiple lights that use a communication protocol other than HomeKit Accessory Protocol.

Bridged accessories have the [bridged](isbridged.md) property set to [true](https://developer.apple.com/documentation/swift/true) and depend on the bridge to communicate with HomeKit. All other accessories, including the bridge itself, have an [bridged](isbridged.md) property setting of [false](https://developer.apple.com/documentation/swift/false).

To add a bridge to a home, use the home’s [addAndSetupAccessoriesWithCompletionHandler:](../hmhome/addandsetupaccessories%28completionhandler_%29.md) method, as you would for any other accessory. The accessories behind the bridge are automatically added to the home as well. The home’s delegate doesn’t receive a [home:didAddAccessory:](../hmhomedelegate/home%28__didadd_%29-6jcl7.md) delegate message for the bridge, but does receive one for each accessory behind the bridge.

When you add a bridge to a room, the accessories behind the bridge are not automatically added to the room because the bridge and its accessories might be located in different rooms. Manage each accessory’s room independently.

If you remove a bridge from the home, all of its accessories are also removed. On the other hand, you can’t directly remove a bridged accessory from the home. You can only remove the bridge.

In all other respects, you treat the accessories behind a bridge in the same way as any other accessory in a home. They appear in the home’s [accessories](../hmhome/accessories.md) array like non-bridged accessories, and respond to all the same commands.

## See Also

### Managing bridged accessories

- [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.
- [identifiersForBridgedAccessories](identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.
