> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ip](https://developer.apple.com/documentation/network/ip)

# IP

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the Internet Protocol (IP).

## Declaration

```swift
struct IP
```

<a id="overview"></a>

## Overview

Can be used to insert IP into a protocol stack.

> **Note**

> Specifying IP is optional, and need only be included in a protocol stack when configuring IP options.

## Topics

### Initializers

- [init()](ip/init%28%29.md)

### Instance Methods

- [fragmentationDisabled(\_:)](ip/fragmentationdisabled%28__%29.md): Configure IP to disable fragmentation on outgoing packets.
- [hopLimit(\_:)](ip/hoplimit%28__%29.md): Configure the IP hop limit.
- [localAddressPreference(\_:)](ip/localaddresspreference%28__%29.md)
- [minimumMTU(\_:)](ip/minimummtu%28__%29.md): Configure IP to use the minimum MTU value.
- [multicastLoopbackDisabled(\_:)](ip/multicastloopbackdisabled%28__%29.md): Specify if multicast packets should be looped back for local delivery.
- [receiveTimeCalculated(\_:)](ip/receivetimecalculated%28__%29.md): Configure IP to calculate receive time for inbound packets.
- [version(\_:)](ip/version%28__%29.md)

## Relationships

### Conforms To

- [NetworkProtocolOptions](networkprotocoloptions.md)
