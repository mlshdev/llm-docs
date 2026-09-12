> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter/nameorder(for:)](https://developer.apple.com/documentation/contacts/cncontactformatter/nameorder(for:))

# nameOrder(for:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name order.

## Declaration

```swift
class func nameOrder(for contact: CNContact) -> CNContactDisplayNameOrder
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The display order to use when combining the given name and family name components.

<a id="Discussion"></a>

## Discussion

For more information about display name orders, see [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md).

## See Also

### Getting format information

- [delimiter(for:)](delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md): The formatting orders for contact names component.

# nameOrderForContact: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the display name order.

## Declaration

```objectivec
+ (CNContactDisplayNameOrder) nameOrderForContact:(CNContact *) contact;
```

## Parameters

- `contact`: The contact whose name is to be formatted.

<a id="Return-Value"></a>

## Return Value

The display order to use when combining the given name and family name components.

<a id="Discussion"></a>

## Discussion

For more information about display name orders, see [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md).

## See Also

### Getting format information

- [delimiterForContact:](delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [CNContactDisplayNameOrder](../cncontactdisplaynameorder.md): The formatting orders for contact names component.
