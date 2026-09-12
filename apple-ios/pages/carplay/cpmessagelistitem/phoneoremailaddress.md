> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitem/phoneoremailaddress](https://developer.apple.com/documentation/carplay/cpmessagelistitem/phoneoremailaddress)

# phoneOrEmailAddress (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The contact’s phone number or email address.

## Declaration

```swift
var phoneOrEmailAddress: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user selects the list item, Siri launches the message compose flow and uses this property’s value as the recipient’s contact information.

## See Also

### Managing the Message Context

- [conversationIdentifier](conversationidentifier.md): The conversation’s unique identifier.

# phoneOrEmailAddress (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The contact’s phone number or email address.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * phoneOrEmailAddress;
```

<a id="Discussion"></a>

## Discussion

When the user selects the list item, Siri launches the message compose flow and uses this property’s value as the recipient’s contact information.

## See Also

### Managing the Message Context

- [conversationIdentifier](conversationidentifier.md): The conversation’s unique identifier.
