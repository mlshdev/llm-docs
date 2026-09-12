> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanagerauthorization](https://developer.apple.com/documentation/corebluetooth/cbmanagerauthorization)

# CBManagerAuthorization (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current authorization state of a Core Bluetooth manager.

## Declaration

```swift
enum CBManagerAuthorization
```

## Topics

### Authorization States

- [CBManagerAuthorization.allowedAlways](cbmanagerauthorization/allowedalways.md): A state that indicates the user has authorized Bluetooth at any time.
- [CBManagerAuthorization.denied](cbmanagerauthorization/denied.md): A state that indicates the user explicitly denied Bluetooth access for this app.
- [CBManagerAuthorization.notDetermined](cbmanagerauthorization/notdetermined.md): A state that indicates the user has yet to authorize Bluetooth for this app.
- [CBManagerAuthorization.restricted](cbmanagerauthorization/restricted.md): A state that indicates this app isn’t authorized to use Bluetooth.

### Initializers

- [init(rawValue:)](cbmanagerauthorization/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Authorization State

- [authorization](cbmanager/authorization-swift.type.property.md): The current authorization status for using Bluetooth.

# CBManagerAuthorization (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current authorization state of a Core Bluetooth manager.

## Declaration

```objectivec
enum CBManagerAuthorization : NSInteger;
```

## Topics

### Authorization States

- [CBManagerAuthorizationAllowedAlways](cbmanagerauthorization/allowedalways.md): A state that indicates the user has authorized Bluetooth at any time.
- [CBManagerAuthorizationDenied](cbmanagerauthorization/denied.md): A state that indicates the user explicitly denied Bluetooth access for this app.
- [CBManagerAuthorizationNotDetermined](cbmanagerauthorization/notdetermined.md): A state that indicates the user has yet to authorize Bluetooth for this app.
- [CBManagerAuthorizationRestricted](cbmanagerauthorization/restricted.md): A state that indicates this app isn’t authorized to use Bluetooth.

## See Also

### Determining Authorization State

- [authorization](cbmanager/authorization-swift.type.property.md): The current authorization status for using Bluetooth.
