> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/identifiersforbridgedaccessories](https://developer.apple.com/documentation/homekit/hmaccessory/identifiersforbridgedaccessories)

# identifiersForBridgedAccessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An array of identifiers for accessories available through a bridge.

> Use [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md) instead.

## Declaration

```swift
var identifiersForBridgedAccessories: [UUID]? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for accessories that are not bridges.

## See Also

### Managing bridged accessories

- [isBridged](isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.

# identifiersForBridgedAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An array of identifiers for accessories available through a bridge.

> Use [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSUUID *> * identifiersForBridgedAccessories;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for accessories that are not bridges.

## See Also

### Managing bridged accessories

- [bridged](isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [uniqueIdentifiersForBridgedAccessories](uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.
