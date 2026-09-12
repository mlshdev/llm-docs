> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactmessagebutton/phoneoremail](https://developer.apple.com/documentation/carplay/cpcontactmessagebutton/phoneoremail)

# phoneOrEmail (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The contact’s phone number or email address.

## Declaration

```swift
var phoneOrEmail: String { get }
```

<a id="Discussion"></a>

## Discussion

When a user taps a contact message button, Siri launches the compose message flow and uses this property’s value as the recipient’s contact information.

# phoneOrEmail (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The contact’s phone number or email address.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * phoneOrEmail;
```

<a id="Discussion"></a>

## Discussion

When a user taps a contact message button, Siri launches the compose message flow and uses this property’s value as the recipient’s contact information.
