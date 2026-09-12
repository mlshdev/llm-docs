> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnkeydescriptor](https://developer.apple.com/documentation/contacts/cnkeydescriptor)

# CNKeyDescriptor (Swift)

**Framework:** Contacts  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

This protocol is reserved for Contacts framework usage.

## Declaration

```swift
protocol CNKeyDescriptor : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating a Fetch Request

- [init(keysToFetch:)](cncontactfetchrequest/init%28keystofetch_%29.md): Creates a fetch request for the specified keys.

# CNKeyDescriptor (Objective-C)

**Framework:** Contacts  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

This protocol is reserved for Contacts framework usage.

## Declaration

```objectivec
@protocol CNKeyDescriptor <NSObject, NSSecureCoding, NSCopying>
```

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating a Fetch Request

- [initWithKeysToFetch:](cncontactfetchrequest/init%28keystofetch_%29.md): Creates a fetch request for the specified keys.
