> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer](https://developer.apple.com/documentation/contacts/cncontainer)

# CNContainer (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents a collection of contacts.

## Declaration

```swift
class CNContainer
```

<a id="overview"></a>

## Overview

A contact can be in only one container. CardDAV accounts usually have only one container whereas Exchange accounts may have multiple containers, where each container represents an Exchange folder.

`CNContainer` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Getting the Container Information

- [name](cncontainer/name.md): The name of the container.
- [identifier](cncontainer/identifier.md): The unique identifier for a contacts container on the device.
- [type](cncontainer/type.md): The type of the container.
- [CNContainerType](cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.

### Generating Search Predicates for Containers

These are the predicates to match containers contacts. You can only use these predicates with `CNContainer`.

- [predicateForContainerOfContact(withIdentifier:)](cncontainer/predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainers(withIdentifiers:)](cncontainer/predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.
- [predicateForContainerOfGroup(withIdentifier:)](cncontainer/predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.

### Getting Container-Related Keys

- [CNContainerIdentifierKey](cncontaineridentifierkey.md): The identifier key of the container.
- [CNContainerNameKey](cncontainernamekey.md): The name of the container.
- [CNContainerTypeKey](cncontainertypekey.md): The type of the container.

### Initializers

- [init(coder:)](cncontainer/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Groups and Containers

- [CNGroup](cngroup.md): An immutable object that represents a group of contacts.
- [CNMutableGroup](cnmutablegroup.md): A mutable object that represents a group of contacts.

# CNContainer (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents a collection of contacts.

## Declaration

```objectivec
@interface CNContainer : NSObject
```

<a id="overview"></a>

## Overview

A contact can be in only one container. CardDAV accounts usually have only one container whereas Exchange accounts may have multiple containers, where each container represents an Exchange folder.

`CNContainer` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Getting the Container Information

- [name](cncontainer/name.md): The name of the container.
- [identifier](cncontainer/identifier.md): The unique identifier for a contacts container on the device.
- [type](cncontainer/type.md): The type of the container.
- [CNContainerType](cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.

### Generating Search Predicates for Containers

These are the predicates to match containers contacts. You can only use these predicates with `CNContainer`.

- [predicateForContainerOfContactWithIdentifier:](cncontainer/predicateforcontainerofcontact%28withidentifier_%29.md): Returns a predicate to find the container of the specified contact.
- [predicateForContainersWithIdentifiers:](cncontainer/predicateforcontainers%28withidentifiers_%29.md): Returns a predicate to find the containers with the specified identifiers.
- [predicateForContainerOfGroupWithIdentifier:](cncontainer/predicateforcontainerofgroup%28withidentifier_%29.md): Returns a predicate to find the container of the specified group.

### Getting Container-Related Keys

- [CNContainerIdentifierKey](cncontaineridentifierkey.md): The identifier key of the container.
- [CNContainerNameKey](cncontainernamekey.md): The name of the container.
- [CNContainerTypeKey](cncontainertypekey.md): The type of the container.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Groups and Containers

- [CNGroup](cngroup.md): An immutable object that represents a group of contacts.
- [CNMutableGroup](cnmutablegroup.md): A mutable object that represents a group of contacts.
