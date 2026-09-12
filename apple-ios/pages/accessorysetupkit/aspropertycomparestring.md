> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspropertycomparestring](https://developer.apple.com/documentation/accessorysetupkit/aspropertycomparestring)

# ASPropertyCompareString (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that specifies how to filter a property against a given string and comparison options.

## Declaration

```swift
class ASPropertyCompareString
```

## Topics

### Creating a compare string instance

- [init(string:compareOptions:)](aspropertycomparestring/init%28string_compareoptions_%29.md): Creates a property compare string instance with the given string and comparison options.

### Accessing compare string properties

- [string](aspropertycomparestring/string.md): The string to compare against.
- [compareOptions](aspropertycomparestring/compareoptions.md): Comparison options to apply when comparing strings.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](asdiscoverydescriptor/wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [wifiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.property.md): The role of the accessory’s Wi-Fi Aware’s service.
- [ASDiscoveryDescriptor.WiFiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](asdiscoverydescriptor/wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](asdiscoverydescriptor/wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.

# ASPropertyCompareString (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that specifies how to filter a property against a given string and comparison options.

## Declaration

```objectivec
@interface ASPropertyCompareString : NSObject
```

## Topics

### Creating a compare string instance

- [initWithString:compareOptions:](aspropertycomparestring/init%28string_compareoptions_%29.md): Creates a property compare string instance with the given string and comparison options.

### Accessing compare string properties

- [string](aspropertycomparestring/string.md): The string to compare against.
- [compareOptions](aspropertycomparestring/compareoptions.md): Comparison options to apply when comparing strings.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Specifying Wi-Fi Aware properties

- [wifiAwareServiceName](asdiscoverydescriptor/wifiawareservicename.md): The accessory’s Wi-Fi Aware’s service name if available.
- [wifiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.property.md): The role of the accessory’s Wi-Fi Aware’s service.
- [ASDiscoveryDescriptorWiFiAwareServiceRole](asdiscoverydescriptor/wifiawareservicerole-swift.enum.md): A type that defines the role of an accessory’s Wi-Fi Aware’s service.
- [wifiAwareModelNameMatch](asdiscoverydescriptor/wifiawaremodelnamematch.md): The accessory’s Wi-Fi Aware model name and matching options.
- [wifiAwareVendorNameMatch](asdiscoverydescriptor/wifiawarevendornamematch.md): The accessory’s Wi-Fi Aware vendor name and matching options.
