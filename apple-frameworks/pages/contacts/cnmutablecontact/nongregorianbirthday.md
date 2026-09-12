> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact/nongregorianbirthday](https://developer.apple.com/documentation/contacts/cnmutablecontact/nongregorianbirthday)

# nonGregorianBirthday (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the non-Gregorian birthday of the contact.

## Declaration

```swift
var nonGregorianBirthday: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

A non-Gregorian birthday such as Lunisolar birthdays can be displayed using this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month are required; [year](../../foundation/nsdatecomponents/year.md) and [isLeapMonth](../../foundation/nsdatecomponents/isleapmonth.md) are optional. The calendar property is also required and must be non-Gregorian. Some supported calendars are Buddhist, Chinese, or Islamic. All other date components are invalid.

## See Also

### Setting Birthday Information

- [dates](dates.md): An array containing labeled Gregorian dates.
- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.

# nonGregorianBirthday (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the non-Gregorian birthday of the contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateComponents * nonGregorianBirthday;
```

```objectivec
@property (atomic, copy, nullable) NSDateComponents * nonGregorianBirthday;
```

<a id="Discussion"></a>

## Discussion

A non-Gregorian birthday such as Lunisolar birthdays can be displayed using this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month are required; [year](../../foundation/nsdatecomponents/year.md) and [leapMonth](../../foundation/nsdatecomponents/isleapmonth.md) are optional. The calendar property is also required and must be non-Gregorian. Some supported calendars are Buddhist, Chinese, or Islamic. All other date components are invalid.

## See Also

### Setting Birthday Information

- [dates](dates.md): An array containing labeled Gregorian dates.
- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
