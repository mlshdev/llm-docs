> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestdisplaypreferences/emailaddresseditable](https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences/emailaddresseditable)

# emailAddressEditable (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the email address field is editable.

## Declaration

```swift
var emailAddressEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the email address assigned to a pending reservation.

## See Also

### Making the Guest Information Editable

- [nameEditable](nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [phoneNumberEditable](phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.

# emailAddressEditable (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the email address field is editable.

## Declaration

```objectivec
@property (nonatomic) BOOL emailAddressEditable;
```

```objectivec
@property (atomic) BOOL emailAddressEditable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which lets the current user change the email address assigned to a pending reservation.

## See Also

### Making the Guest Information Editable

- [nameEditable](nameeditable.md): A Boolean value indicating whether the name fields are editable.
- [phoneNumberEditable](phonenumbereditable.md): A Boolean value indicating whether the phone number field is editable.
