> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitem/init(conversationidentifier:text:leadingconfiguration:trailingconfiguration:detailtext:trailingtext:)](https://developer.apple.com/documentation/carplay/cpmessagelistitem/init(conversationidentifier:text:leadingconfiguration:trailingconfiguration:detailtext:trailingtext:))

# init(conversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that represents an existing conversation.

## Declaration

```swift
init(conversationIdentifier: String, text: String, leadingConfiguration: CPMessageListItemLeadingConfiguration, trailingConfiguration: CPMessageListItemTrailingConfiguration?, detailText: String?, trailingText: String?)
```

## Parameters

- `conversationIdentifier`: Your app’s unique identifier for the conversation. Siri passes this value to your app when the user selects the list item.
- `text`: The conversation’s content. Siri speaks this when the user selects the list item.
- `leadingConfiguration`: The configuration that describes the visual elements of the list item’s leading region.
- `trailingConfiguration`: The configuration that describes the visual elements of the list item’s trailing region.
- `detailText`: The list item’s secondary text.
- `trailingText`: Supplementary text that the list item’s trailing region displays.

## See Also

### Creating a Message List Item

- [init(fullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:)](init%28fullname_phoneoremailaddress_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents a contact.

# initWithConversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that represents an existing conversation.

## Declaration

```objectivec
- (instancetype) initWithConversationIdentifier:(NSString *) conversationIdentifier text:(NSString *) text leadingConfiguration:(CPMessageListItemLeadingConfiguration *) leadingConfiguration trailingConfiguration:(CPMessageListItemTrailingConfiguration *) trailingConfiguration detailText:(NSString *) detailText trailingText:(NSString *) trailingText;
```

## Parameters

- `conversationIdentifier`: Your app’s unique identifier for the conversation. Siri passes this value to your app when the user selects the list item.
- `text`: The conversation’s content. Siri speaks this when the user selects the list item.
- `leadingConfiguration`: The configuration that describes the visual elements of the list item’s leading region.
- `trailingConfiguration`: The configuration that describes the visual elements of the list item’s trailing region.
- `detailText`: The list item’s secondary text.
- `trailingText`: Supplementary text that the list item’s trailing region displays.

## See Also

### Creating a Message List Item

- [initWithFullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:](init%28fullname_phoneoremailaddress_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a list item that represents a contact.
