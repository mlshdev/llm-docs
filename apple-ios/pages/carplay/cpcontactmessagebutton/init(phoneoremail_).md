> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactmessagebutton/init(phoneoremail:)](https://developer.apple.com/documentation/carplay/cpcontactmessagebutton/init(phoneoremail:))

# init(phoneOrEmail:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a contact message button with the provided contact information.

## Declaration

```swift
init(phoneOrEmail: String)
```

## Parameters

- `phoneOrEmail`: A valid phone number or email address to use in Siri’s compose message flow.

<a id="return-value"></a>

## Return Value

A new contact message button.

<a id="Discussion"></a>

## Discussion

The button displays a system image that communicates its function. CarPlay never displays the contact information you provide. Tapping the button activates Siri and launches the compose message flow using the phone number or email address you provide.

# initWithPhoneOrEmail: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a contact message button with the provided contact information.

## Declaration

```objectivec
- (instancetype) initWithPhoneOrEmail:(NSString *) phoneOrEmail;
```

## Parameters

- `phoneOrEmail`: A valid phone number or email address to use in Siri’s compose message flow.

<a id="return-value"></a>

## Return Value

A new contact message button.

<a id="Discussion"></a>

## Discussion

The button displays a system image that communicates its function. CarPlay never displays the contact information you provide. Tapping the button activates Siri and launches the compose message flow using the phone number or email address you provide.
