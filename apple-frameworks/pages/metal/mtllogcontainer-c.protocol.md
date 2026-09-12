> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogcontainer-c.protocol](https://developer.apple.com/documentation/metal/mtllogcontainer-c.protocol)

# MTLLogContainer

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A collection of logged messages, created when a Metal device runs a command buffer.

## Declaration

```objectivec
@protocol MTLLogContainer <NSObject, NSFastEnumeration>
```

<a id="overview"></a>

## Overview

Enumerate a log container object to get a list of [MTLFunctionLog](mtlfunctionlog.md) instances.

## Relationships

### Inherits From

- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader logs

- [MTLFunctionLog](mtlfunctionlog.md): A log entry a Metal device generates when the it runs a command buffer.
