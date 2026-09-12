> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplimitableuserinterface](https://developer.apple.com/documentation/carplay/cplimitableuserinterface)

# CPLimitableUserInterface (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The types of limitable user interface elements.

## Declaration

```swift
struct CPLimitableUserInterface
```

## Topics

### User Interface Limits

- [keyboard](cplimitableuserinterface/keyboard.md): Indicates that the car is limiting the keyboard display.
- [lists](cplimitableuserinterface/lists.md): Indicates that the car is limiting the display of lists.

### Initializers

- [init(rawValue:)](cplimitableuserinterface/init%28rawvalue_%29.md): Initializes a limitable user interface element using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the Limits

- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bit mask value that indicates the user interface limits.

# CPLimitableUserInterface (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The types of limitable user interface elements.

## Declaration

```objectivec
enum CPLimitableUserInterface : NSUInteger;
```

## Topics

### User Interface Limits

- [CPLimitableUserInterfaceKeyboard](cplimitableuserinterface/keyboard.md): Indicates that the car is limiting the keyboard display.
- [CPLimitableUserInterfaceLists](cplimitableuserinterface/lists.md): Indicates that the car is limiting the display of lists.

## See Also

### Getting the Limits

- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bit mask value that indicates the user interface limits.
