> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/configuration-swift.class](https://developer.apple.com/documentation/cloudkit/ckoperation/configuration-swift.class)

# CKOperation.Configuration (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that describes how a CloudKit operation behaves.

## Declaration

```swift
class Configuration
```

<a id="overview"></a>

## Overview

All of the properties in `CKOperationConfiguration` have a default value. When determining which properties to apply to a CloudKit operation, consult the operation’s configuration property, as well as the [defaultConfiguration](../ckoperationgroup/defaultconfiguration.md) property of the group that the operation belongs to. These properties combine through the following rules:

| Group default configuration value | Operation configuration value | Value applied to operation |
| --- | --- | --- |
| default value | default value | default value |
| default value | explicit value | operation.configuration explicit value |
| explicit value | default value | group.defaultConfiguration explicit value |
| explicit value | explicit value | operation.configuration explicit value |

## Topics

### Preparing a Configuration

- [allowsCellularAccess](configuration-swift.class/allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [container](configuration-swift.class/container.md): The configuration’s container.
- [isLongLived](configuration-swift.class/islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](configuration-swift.class/qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](configuration-swift.class/timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](configuration-swift.class/timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [group](group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.

# CKOperationConfiguration (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that describes how a CloudKit operation behaves.

## Declaration

```objectivec
@interface CKOperationConfiguration : NSObject
```

<a id="overview"></a>

## Overview

All of the properties in `CKOperationConfiguration` have a default value. When determining which properties to apply to a CloudKit operation, consult the operation’s configuration property, as well as the [defaultConfiguration](../ckoperationgroup/defaultconfiguration.md) property of the group that the operation belongs to. These properties combine through the following rules:

| Group default configuration value | Operation configuration value | Value applied to operation |
| --- | --- | --- |
| default value | default value | default value |
| default value | explicit value | operation.configuration explicit value |
| explicit value | default value | group.defaultConfiguration explicit value |
| explicit value | explicit value | operation.configuration explicit value |

## Topics

### Preparing a Configuration

- [allowsCellularAccess](configuration-swift.class/allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [container](configuration-swift.class/container.md): The configuration’s container.
- [longLived](configuration-swift.class/islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](configuration-swift.class/qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](configuration-swift.class/timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](configuration-swift.class/timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Managing the Operation’s Configuration

- [configuration](configuration-swift.property.md): The operation’s configuration.
- [group](group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.
