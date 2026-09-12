> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestdisplaypreferences/phonenumbereditable](https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences/phonenumbereditable)

# phoneNumberEditable (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the phone number field is editable.

## Declaration

```swift
var phoneNumberEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the phone number assigned to a pending reservation.

## See Also

### Making the Guest Information Editable

- [nameEditable](nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [emailAddressEditable](emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.

# phoneNumberEditable (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the phone number field is editable.

## Declaration

```objectivec
@property (nonatomic) BOOL phoneNumberEditable;
```

```objectivec
@property (atomic) BOOL phoneNumberEditable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the phone number assigned to a pending reservation.

## See Also

### Making the Guest Information Editable

- [nameEditable](nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [emailAddressEditable](emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.
