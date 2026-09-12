> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/nongregorianbirthday](https://developer.apple.com/documentation/contacts/cncontact/nongregorianbirthday)

# nonGregorianBirthday (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the non-Gregorian birthday of the contact.

## Declaration

```swift
var nonGregorianBirthday: DateComponents? { get }
```

<a id="Discussion"></a>

## Discussion

Non-Gregorian birthdays can be displayed using this property, which has values that are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month components are required; year and leap month are optional. The calendar component is also required and must be an [NSCalendar](../../foundation/nscalendar.md) object with an identifier other than [gregorian](../../foundation/nscalendar/identifier/gregorian.md). For example, some supported calendars are Chinese, Hebrew, or Islamic. All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNError.Code.validationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
- [dates](dates.md): An array containing labeled Gregorian dates.

# nonGregorianBirthday (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the non-Gregorian birthday of the contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * nonGregorianBirthday;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * nonGregorianBirthday;
```

<a id="Discussion"></a>

## Discussion

Non-Gregorian birthdays can be displayed using this property, which has values that are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month components are required; year and leap month are optional. The calendar component is also required and must be an [NSCalendar](../../foundation/nscalendar.md) object with an identifier other than [NSCalendarIdentifierGregorian](../../foundation/nscalendar/identifier/gregorian.md). For example, some supported calendars are Chinese, Hebrew, or Islamic. All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNErrorCodeValidationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
- [dates](dates.md): An array containing labeled Gregorian dates.
