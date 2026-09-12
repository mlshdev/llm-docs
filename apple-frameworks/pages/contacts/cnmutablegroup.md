> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablegroup](https://developer.apple.com/documentation/contacts/cnmutablegroup)

# CNMutableGroup (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable object that represents a group of contacts.

## Declaration

```swift
class CNMutableGroup
```

<a id="overview"></a>

## Overview

Contacts may be members of one or more groups, depending upon the accounts they come from. The `CNMutableGroup` class is not a thread-safe class.

## Topics

### Modifying the Group Name

- [name](cnmutablegroup/name.md): The name of the group.

## Relationships

### Inherits From

- [CNGroup](cngroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Groups and Containers

- [CNGroup](cngroup.md): An immutable object that represents a group of contacts.
- [CNContainer](cncontainer.md): An immutable object that represents a collection of contacts.

# CNMutableGroup (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable object that represents a group of contacts.

## Declaration

```objectivec
@interface CNMutableGroup : CNGroup
```

<a id="overview"></a>

## Overview

Contacts may be members of one or more groups, depending upon the accounts they come from. The `CNMutableGroup` class is not a thread-safe class.

## Topics

### Modifying the Group Name

- [name](cnmutablegroup/name.md): The name of the group.

## Relationships

### Inherits From

- [CNGroup](cngroup.md)

## See Also

### Groups and Containers

- [CNGroup](cngroup.md): An immutable object that represents a group of contacts.
- [CNContainer](cncontainer.md): An immutable object that represents a collection of contacts.
