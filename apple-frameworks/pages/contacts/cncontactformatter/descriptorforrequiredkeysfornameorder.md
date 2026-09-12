> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/descriptorforrequiredkeysfornameorder](https://developer.apple.com/documentation/contacts/cncontactformatter/descriptorforrequiredkeysfornameorder)

# descriptorForRequiredKeysForNameOrder (Swift)

**Framework:** Contacts  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the required key descriptor for the display name order.

## Declaration

```swift
class var descriptorForRequiredKeysForNameOrder: any CNKeyDescriptor { get }
```

## See Also

### Getting a descriptor

- [descriptorForRequiredKeys(for:)](descriptorforrequiredkeys%28for_%29.md): Returns the required key descriptor for the specified formatting style of the contact.
- [descriptorForRequiredKeysForDelimiter](descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.

# descriptorForRequiredKeysForNameOrder (Objective-C)

**Framework:** Contacts  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the required key descriptor for the display name order.

## Declaration

```objectivec
@property (class, readonly) id<CNKeyDescriptor> descriptorForRequiredKeysForNameOrder;
```

## See Also

### Getting a descriptor

- [descriptorForRequiredKeysForStyle:](descriptorforrequiredkeys%28for_%29.md): Returns the required key descriptor for the specified formatting style of the contact.
- [descriptorForRequiredKeysForDelimiter](descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.
