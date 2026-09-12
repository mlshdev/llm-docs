> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/niconfiguration](https://developer.apple.com/documentation/nearbyinteraction/niconfiguration)

# NIConfiguration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An abstract base class for interaction configurations.

## Declaration

```swift
class NIConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

The [NIConfiguration](niconfiguration.md) class serves as the common identity for configuration objects. Don’t instantiate this class directly. Instead, instantiate one if its concrete subclasses: [NINearbyPeerConfiguration](ninearbypeerconfiguration.md) or [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md). Use your configuration object to specify the features you want to enable in a Nearby Interaction session, and pass the object to the session’s [run(\_:)](nisession/run%28__%29.md) method.

## Topics

### Initializers

- [init(coder:)](niconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NIDLTDOAConfiguration](nidltdoaconfiguration.md)
- [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md)
- [NINearbyPeerConfiguration](ninearbypeerconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# NIConfiguration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An abstract base class for interaction configurations.

## Declaration

```objectivec
@interface NIConfiguration : NSObject
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

The [NIConfiguration](niconfiguration.md) class serves as the common identity for configuration objects. Don’t instantiate this class directly. Instead, instantiate one if its concrete subclasses: [NINearbyPeerConfiguration](ninearbypeerconfiguration.md) or [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md). Use your configuration object to specify the features you want to enable in a Nearby Interaction session, and pass the object to the session’s [runWithConfiguration:](nisession/run%28__%29.md) method.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NIDLTDOAConfiguration](nidltdoaconfiguration.md)
- [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md)
- [NINearbyPeerConfiguration](ninearbypeerconfiguration.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
