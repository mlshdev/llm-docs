> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/dates](https://developer.apple.com/documentation/contacts/cncontact/dates)

# dates (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array containing labeled Gregorian dates.

## Declaration

```swift
var dates: [CNLabeledValue<NSDateComponents>] { get }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has an [NSString](../../foundation/nsstring.md) label and [NSDateComponents](../../foundation/nsdatecomponents.md) value. You can use this property to store Gregorian dates such as anniversaries. Day and month components are required and year is optional. The calendar component can be `nil` or [gregorian](../../foundation/nscalendar/identifier/gregorian.md). All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNError.Code.validationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.

# dates (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array containing labeled Gregorian dates.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CNLabeledValue<NSDateComponents *> *> * dates;
```

```objectivec
@property (atomic, copy, readonly) NSArray<CNLabeledValue<NSDateComponents *> *> * dates;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has an [NSString](../../foundation/nsstring.md) label and [NSDateComponents](../../foundation/nsdatecomponents.md) value. You can use this property to store Gregorian dates such as anniversaries. Day and month components are required and year is optional. The calendar component can be `nil` or [NSCalendarIdentifierGregorian](../../foundation/nscalendar/identifier/gregorian.md). All other date components are invalid and including them results in an [NSError](../../foundation/nserror.md) object that includes the key paths of the invalid components and the error code [CNErrorCodeValidationConfigurationError](../cnerror/code/validationconfigurationerror.md).

## See Also

### Getting Birthday Information

- [birthday](birthday.md): A date component for the Gregorian birthday of the contact.
- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
