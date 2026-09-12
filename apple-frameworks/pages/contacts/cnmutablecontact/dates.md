> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact/dates](https://developer.apple.com/documentation/contacts/cnmutablecontact/dates)

# dates (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array containing labeled Gregorian dates.

## Declaration

```swift
var dates: [CNLabeledValue<NSDateComponents>] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has an [NSString](../../foundation/nsstring.md) label and [NSDateComponents](../../foundation/nsdatecomponents.md) value. You can use this property to store Gregorian dates such as anniversaries. Day and month are required and year is optional. Calendar is `nil` or Gregorian. All other date components are invalid.

## See Also

### Setting Birthday Information

- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.

# dates (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array containing labeled Gregorian dates.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CNLabeledValue<NSDateComponents *> *> * dates;
```

```objectivec
@property (atomic, copy) NSArray<CNLabeledValue<NSDateComponents *> *> * dates;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has an [NSString](../../foundation/nsstring.md) label and [NSDateComponents](../../foundation/nsdatecomponents.md) value. You can use this property to store Gregorian dates such as anniversaries. Day and month are required and year is optional. Calendar is `nil` or Gregorian. All other date components are invalid.

## See Also

### Setting Birthday Information

- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
