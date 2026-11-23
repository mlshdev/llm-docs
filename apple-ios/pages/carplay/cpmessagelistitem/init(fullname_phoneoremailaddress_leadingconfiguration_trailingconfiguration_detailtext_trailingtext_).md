> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/init(fullname:phoneoremailaddress:leadingconfiguration:trailingconfiguration:detailtext:trailingtext:)

# init(fullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a message list item with the identifier for one of your app’s conversations.

## Declaration

```swift
init(fullName: String, phoneOrEmailAddress: String, leadingConfiguration: CPMessageListItemLeadingConfiguration, trailingConfiguration: CPMessageListItemTrailingConfiguration?, detailText: String?, trailingText: String?)
```

## Parameters

- `fullName`: The full name of the contact. CarPlay displays this text prominently in the row. When someone selects the row, Siri speaks this name as part of the workflow for composing a message.
- `phoneOrEmailAddress`: The contact’s phone or email address. Siri composes a message that targets the value you provide. CarPlay doesn’t display this text in the row.
- `leadingConfiguration`: Configuration options for the leading edge of the row.
- `trailingConfiguration`: Configuration options for the trailing edge of the row.
- `detailText`: Additional text to display below the main text string. Specify `nil` to omit this string from the row.
- `trailingText`: Additional text to display at the trailing edge of the row. Specify `nil` to omit this string from the row.

<a id="return-value"></a>

## Return Value

An initialized message list item to add to your list content.

<a id="discussion"></a>

## Discussion

Use this initializer to create a row that represents a conversation with one or more people.

## See Also

### Creating a message list item

- [init(conversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:)](init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a message list item with the identifier for one of your app’s conversations.

# initWithFullName:phoneOrEmailAddress:leadingConfiguration:trailingConfiguration:detailText:trailingText: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a message list item with the identifier for one of your app’s conversations.

## Declaration

```objectivec
- (instancetype) initWithFullName:(NSString *) fullName phoneOrEmailAddress:(NSString *) phoneOrEmailAddress leadingConfiguration:(CPMessageListItemLeadingConfiguration *) leadingConfiguration trailingConfiguration:(CPMessageListItemTrailingConfiguration *) trailingConfiguration detailText:(NSString *) detailText trailingText:(NSString *) trailingText;
```

## Parameters

- `fullName`: The full name of the contact. CarPlay displays this text prominently in the row. When someone selects the row, Siri speaks this name as part of the workflow for composing a message.
- `phoneOrEmailAddress`: The contact’s phone or email address. Siri composes a message that targets the value you provide. CarPlay doesn’t display this text in the row.
- `leadingConfiguration`: Configuration options for the leading edge of the row.
- `trailingConfiguration`: Configuration options for the trailing edge of the row.
- `detailText`: Additional text to display below the main text string. Specify `nil` to omit this string from the row.
- `trailingText`: Additional text to display at the trailing edge of the row. Specify `nil` to omit this string from the row.

<a id="return-value"></a>

## Return Value

An initialized message list item to add to your list content.

<a id="discussion"></a>

## Discussion

Use this initializer to create a row that represents a conversation with one or more people.

## See Also

### Creating a message list item

- [initWithConversationIdentifier:text:leadingConfiguration:trailingConfiguration:detailText:trailingText:](init%28conversationidentifier_text_leadingconfiguration_trailingconfiguration_detailtext_trailingtext_%29.md): Creates a message list item with the identifier for one of your app’s conversations.
