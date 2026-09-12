> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thcredentials](https://developer.apple.com/documentation/threadnetwork/thcredentials)

# THCredentials (Swift)

**Framework:** ThreadNetwork  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A class that contains credentials for a Thread network.

## Declaration

```swift
class THCredentials
```

<a id="overview"></a>

## Overview

A Thread network defines parameters that all connected devices use. [THCredentials](thcredentials.md) provides these parameters.

## Topics

### Getting the Thread Parameters

- [activeOperationalDataSet](thcredentials/activeoperationaldataset.md): The essential operational parameters for the Thread network.
- [borderAgentID](thcredentials/borderagentid.md): The identifier of an active Thread network Border Agent.
- [channel](thcredentials/channel.md): The Thread network radio channel.
- [extendedPANID](thcredentials/extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](thcredentials/networkkey.md): The Thread network key.
- [networkName](thcredentials/networkname.md): The Thread network name.
- [panID](thcredentials/panid.md): The Thread network PAN identifier.
- [pskc](thcredentials/pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.

### Getting the Framework Parameters

- [creationDate](thcredentials/creationdate.md): The date and time that the framework stored the credential in the database.
- [lastModificationDate](thcredentials/lastmodificationdate.md): The date and time that the framework updated the credential in the database.

### Initializers

- [init(coder:)](thcredentials/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Managing clients and sharing credentials

- [com.apple.developer.networking.manage-thread-network-credentials](../bundleresources/entitlements/com.apple.developer.networking.manage-thread-network-credentials.md): A Boolean value that indicates whether the app can use ThreadNetwork.
- [THClient](thclient.md): A class that supports safely sharing Thread credentials between multiple clients.

# THCredentials (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A class that contains credentials for a Thread network.

## Declaration

```objectivec
@interface THCredentials : NSObject
```

<a id="overview"></a>

## Overview

A Thread network defines parameters that all connected devices use. [THCredentials](thcredentials.md) provides these parameters.

## Topics

### Getting the Thread Parameters

- [activeOperationalDataSet](thcredentials/activeoperationaldataset.md): The essential operational parameters for the Thread network.
- [borderAgentID](thcredentials/borderagentid.md): The identifier of an active Thread network Border Agent.
- [channel](thcredentials/channel.md): The Thread network radio channel.
- [extendedPANID](thcredentials/extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](thcredentials/networkkey.md): The Thread network key.
- [networkName](thcredentials/networkname.md): The Thread network name.
- [panID](thcredentials/panid.md): The Thread network PAN identifier.
- [PSKC](thcredentials/pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.

### Getting the Framework Parameters

- [creationDate](thcredentials/creationdate.md): The date and time that the framework stored the credential in the database.
- [lastModificationDate](thcredentials/lastmodificationdate.md): The date and time that the framework updated the credential in the database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Managing clients and sharing credentials

- [com.apple.developer.networking.manage-thread-network-credentials](../bundleresources/entitlements/com.apple.developer.networking.manage-thread-network-credentials.md): A Boolean value that indicates whether the app can use ThreadNetwork.
- [THClient](thclient.md): A class that supports safely sharing Thread credentials between multiple clients.
