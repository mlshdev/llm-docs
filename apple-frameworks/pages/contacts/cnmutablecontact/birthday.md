> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact/birthday](https://developer.apple.com/documentation/contacts/cnmutablecontact/birthday)

# birthday (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the Gregorian birthday of the contact.

## Declaration

```swift
var birthday: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

A Gregorian birthday can be displayed using this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month are required for this property, and year is optional. Calendar can be `nil` or Gregorian. All other date components are invalid.

## See Also

### Setting Birthday Information

- [dates](dates.md): An array containing labeled Gregorian dates.
- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.

# birthday (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A date component for the Gregorian birthday of the contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateComponents * birthday;
```

```objectivec
@property (atomic, copy, nullable) NSDateComponents * birthday;
```

<a id="Discussion"></a>

## Discussion

A Gregorian birthday can be displayed using this property, whose values are the relevant properties of an [NSDateComponents](../../foundation/nsdatecomponents.md) object. Day and month are required for this property, and year is optional. Calendar can be `nil` or Gregorian. All other date components are invalid.

## See Also

### Setting Birthday Information

- [dates](dates.md): An array containing labeled Gregorian dates.
- [nonGregorianBirthday](nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
