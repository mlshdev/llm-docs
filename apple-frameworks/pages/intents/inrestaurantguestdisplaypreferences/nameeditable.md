> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestdisplaypreferences/nameeditable](https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences/nameeditable)

# nameEditable (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the name fields are editable.

## Declaration

```swift
var nameEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the name of the person assigned to the reservation. You might change this property to [false](https://developer.apple.com/documentation/swift/false) if you require that reservations must be by the person who made them.

## See Also

### Making the Guest Information Editable

- [emailAddressEditable](emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.
- [phoneNumberEditable](phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.

# nameEditable (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the name fields are editable.

## Declaration

```objectivec
@property (nonatomic) BOOL nameEditable;
```

```objectivec
@property (atomic) BOOL nameEditable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the name of the person assigned to the reservation. You might change this property to [false](https://developer.apple.com/documentation/swift/false) if you require that reservations must be by the person who made them.

## See Also

### Making the Guest Information Editable

- [emailAddressEditable](emailaddresseditable.md): A Boolean value indicating whether the email address field is editable.
- [phoneNumberEditable](phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.
