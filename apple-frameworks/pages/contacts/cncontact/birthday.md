> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/birthday](https://developer.apple.com/documentation/contacts/cncontact/birthday)

# birthday (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the Gregorian birthday of the contact.

## Declaration

```swift
var birthday: DateComponents? { get }
```

<a id="Discussion"></a>

## Discussion

Birthdays are represented by this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month components are required for this property, and year is optional. The calendar component can be `nil` or [gregorian](../../foundation/nscalendar/identifier/gregorian.md). All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNError.Code.validationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [dates](dates.md): An array containing labeled Gregorian dates.

# birthday (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the Gregorian birthday of the contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * birthday;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * birthday;
```

<a id="Discussion"></a>

## Discussion

Birthdays are represented by this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month components are required for this property, and year is optional. The calendar component can be `nil` or [NSCalendarIdentifierGregorian](../../foundation/nscalendar/identifier/gregorian.md). All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNErrorCodeValidationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [dates](dates.md): An array containing labeled Gregorian dates.
