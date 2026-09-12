> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory/accessorystate](https://developer.apple.com/documentation/accessorysetupkit/asaccessory/accessorystate)

# ASAccessory.AccessoryState (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An enumeration of possible authorization states of an accessory.

## Declaration

```swift
enum AccessoryState
```

## Topics

### Creating a state instance

- [init(rawValue:)](accessorystate/init%28rawvalue_%29.md)

### Accessory states

- [ASAccessory.AccessoryState.unauthorized](accessorystate/unauthorized.md): The accessory is invalid or unauthorized.
- [ASAccessory.AccessoryState.awaitingAuthorization](accessorystate/awaitingauthorization.md): The accessory is selected, but full authorization is still pending.
- [ASAccessory.AccessoryState.authorized](accessorystate/authorized.md): The accessory is authorized and available.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessory description

- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [ASDiscoveredAccessory](../asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.

# ASAccessoryState (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

An enumeration of possible authorization states of an accessory.

## Declaration

```objectivec
enum ASAccessoryState : NSInteger;
```

## Topics

### Accessory states

- [ASAccessoryStateUnauthorized](accessorystate/unauthorized.md): The accessory is invalid or unauthorized.
- [ASAccessoryStateAwaitingAuthorization](accessorystate/awaitingauthorization.md): The accessory is selected, but full authorization is still pending.
- [ASAccessoryStateAuthorized](accessorystate/authorized.md): The accessory is authorized and available.

## See Also

### Accessory description

- [ASAccessory](../asaccessory.md): An accessory discovered by the accessory session.
- [ASDiscoveredAccessory](../asdiscoveredaccessory.md): A discovered accessory, for use in creating a customized picker display item.
