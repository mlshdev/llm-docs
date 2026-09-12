> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/descriptorforrequiredkeys(for:)](https://developer.apple.com/documentation/contacts/cncontactformatter/descriptorforrequiredkeys(for:))

# descriptorForRequiredKeys(for:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the required key descriptor for the specified formatting style of the contact.

## Declaration

```swift
class func descriptorForRequiredKeys(for style: CNContactFormatterStyle) -> any CNKeyDescriptor
```

## Parameters

- `style`: The formatting style to be used for contact name.

<a id="Return-Value"></a>

## Return Value

The contact key descriptor for the formatting style.

<a id="Discussion"></a>

## Discussion

Include this method with the keys to fetch when fetching contacts. To format multiple styles, you can include multiple key descriptors with the keys to fetch.

## See Also

### Getting a descriptor

- [descriptorForRequiredKeysForDelimiter](descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.
- [descriptorForRequiredKeysForNameOrder](descriptorforrequiredkeysfornameorder.md): Returns the required key descriptor for the display name order.

# descriptorForRequiredKeysForStyle: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the required key descriptor for the specified formatting style of the contact.

## Declaration

```objectivec
+ (id<CNKeyDescriptor>) descriptorForRequiredKeysForStyle:(CNContactFormatterStyle) style;
```

## Parameters

- `style`: The formatting style to be used for contact name.

<a id="Return-Value"></a>

## Return Value

The contact key descriptor for the formatting style.

<a id="Discussion"></a>

## Discussion

Include this method with the keys to fetch when fetching contacts. To format multiple styles, you can include multiple key descriptors with the keys to fetch.

## See Also

### Getting a descriptor

- [descriptorForRequiredKeysForDelimiter](descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.
- [descriptorForRequiredKeysForNameOrder](descriptorforrequiredkeysfornameorder.md): Returns the required key descriptor for the display name order.
