> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitem/init(fullname:phoneoremailaddress:leadingconfiguration:trailingconfiguration:detailtext:trailingtext:)](https://developer.apple.com/documentation/carplay/cpmessagelistitem/init(fullname:phoneoremailaddress:leadingconfiguration:trailingconfiguration:detailtext:trailingtext:))

# init(fullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that represents a contact.

## Declaration

```swift
init(fullName: String, phoneOrEmailAddress: String, leadingConfiguration: CPMessageListItemLeadingConfiguration, trailingConfiguration: CPMessageListItemTrailingConfiguration?, detailText: String?, trailingText: String?)
```

## Parameters

- `fullName`: The contact’s full name. The list item displays this value as its primary content. Siri speaks this when the user selects the list item.
- `phoneOrEmailAddress`: The phone number or email address that Siri uses when launching the compose message flow.
- `leadingConfiguration`: The configuration that describes the visual elements of the list item’s leading region.
- `trailingConfiguration`: The configuration that describes the visual elements of the list item’s trailing region.
- `detailText`: The list item’s secondary text.
- `trailingText`: Supplementary text that the list item’s trailing region displays.

## See Also

### Creating a Message List Item

- [init(conversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:)](init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents an existing conversation.

# initWithFullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that represents a contact.

## Declaration

```objectivec
- (instancetype) initWithFullName:(NSString *) fullName phoneOrEmailAddress:(NSString *) phoneOrEmailAddress leadingConfiguration:(CPMessageListItemLeadingConfiguration *) leadingConfiguration trailingConfiguration:(CPMessageListItemTrailingConfiguration *) trailingConfiguration detailText:(NSString *) detailText trailingText:(NSString *) trailingText;
```

## Parameters

- `fullName`: The contact’s full name. The list item displays this value as its primary content. Siri speaks this when the user selects the list item.
- `phoneOrEmailAddress`: The phone number or email address that Siri uses when launching the compose message flow.
- `leadingConfiguration`: The configuration that describes the visual elements of the list item’s leading region.
- `trailingConfiguration`: The configuration that describes the visual elements of the list item’s trailing region.
- `detailText`: The list item’s secondary text.
- `trailingText`: Supplementary text that the list item’s trailing region displays.

## See Also

### Creating a Message List Item

- [initWithConversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:](init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents an existing conversation.
