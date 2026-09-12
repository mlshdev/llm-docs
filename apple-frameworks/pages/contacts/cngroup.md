> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cngroup](https://developer.apple.com/documentation/contacts/cngroup)

# CNGroup (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents a group of contacts.

## Declaration

```swift
class CNGroup
```

<a id="overview"></a>

## Overview

Contacts may be members of one or more groups, depending upon their accounts.

`CNGroup` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Getting the Group Information

- [name](cngroup/name.md): The name of the group.
- [identifier](cngroup/identifier.md): The unique identifier for a group on the device.

### Generating Search Predicates for Groups

The predicates to match groups. You can only use these predicates with [CNGroup](cngroup.md).

- [predicateForGroups(withIdentifiers:)](cngroup/predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForGroupsInContainer(withIdentifier:)](cngroup/predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.
- [predicateForSubgroupsInGroup(withIdentifier:)](cngroup/predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.

### Getting Group-Related Keys

- [CNGroupIdentifierKey](cngroupidentifierkey.md): The identifier of the group.
- [CNGroupNameKey](cngroupnamekey.md): The name of the group.

### Initializers

- [init(coder:)](cngroup/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutableGroup](cnmutablegroup.md)

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

- [CNMutableGroup](cnmutablegroup.md): A mutable object that represents a group of contacts.
- [CNContainer](cncontainer.md): An immutable object that represents a collection of contacts.

# CNGroup (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents a group of contacts.

## Declaration

```objectivec
@interface CNGroup : NSObject
```

<a id="overview"></a>

## Overview

Contacts may be members of one or more groups, depending upon their accounts.

`CNGroup` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Getting the Group Information

- [name](cngroup/name.md): The name of the group.
- [identifier](cngroup/identifier.md): The unique identifier for a group on the device.

### Generating Search Predicates for Groups

The predicates to match groups. You can only use these predicates with [CNGroup](cngroup.md).

- [predicateForGroupsWithIdentifiers:](cngroup/predicateforgroups%28withidentifiers_%29.md): Returns a predicate to find groups with the specified identifiers.
- [predicateForGroupsInContainerWithIdentifier:](cngroup/predicateforgroupsincontainer%28withidentifier_%29.md): Returns a predicate to find groups in the specified container.
- [predicateForSubgroupsInGroupWithIdentifier:](cngroup/predicateforsubgroupsingroup%28withidentifier_%29.md): Returns a predicate to find subgroups in the specified parent group.

### Getting Group-Related Keys

- [CNGroupIdentifierKey](cngroupidentifierkey.md): The identifier of the group.
- [CNGroupNameKey](cngroupnamekey.md): The name of the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutableGroup](cnmutablegroup.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Groups and Containers

- [CNMutableGroup](cnmutablegroup.md): A mutable object that represents a group of contacts.
- [CNContainer](cncontainer.md): An immutable object that represents a collection of contacts.
