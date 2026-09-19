> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessory/uniqueidentifiersforbridgedaccessories

# uniqueIdentifiersForBridgedAccessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of unique identifiers, each of which represents an accessory vended by the bridge.

## Declaration

```swift
var uniqueIdentifiersForBridgedAccessories: [UUID]? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for accessories that aren’t bridges. See the [isBridged](isbridged.md) property for more information about working with bridges.

## See Also

### Managing bridged accessories

- [isBridged](isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [identifiersForBridgedAccessories](identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.

# uniqueIdentifiersForBridgedAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of unique identifiers, each of which represents an accessory vended by the bridge.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSUUID *> * uniqueIdentifiersForBridgedAccessories;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` for accessories that aren’t bridges. See the [bridged](isbridged.md) property for more information about working with bridges.

## See Also

### Managing bridged accessories

- [bridged](isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [identifiersForBridgedAccessories](identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.
