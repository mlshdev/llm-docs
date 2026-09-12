> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/kabpersonalternatebirthdayproperty](https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdayproperty)

# kABPersonAlternateBirthdayProperty (Swift)

**Framework:** Address Book  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The associated value is a [kABDictionaryPropertyType](kabdictionarypropertytype.md) with keys specified by the other constants listed here.

> use CNContact.nonGregorianBirthday

## Declaration

```swift
let kABPersonAlternateBirthdayProperty: ABPropertyID
```

<a id="discussion"></a>

## Discussion

You can use toll-free bridging to cast the value to [NSDictionary](../foundation/nsdictionary.md). The data corresponds to an [NSDateComponents](../foundation/nsdatecomponents.md) object.

## See Also

### Deprecated

- [kABPersonAddressCityKey](kabpersonaddresscitykey.md): Deprecated. City.
- [kABPersonAddressCountryCodeKey](kabpersonaddresscountrycodekey.md): Deprecated. Country code. The value is an ISO country code.
- [kABPersonAddressCountryKey](kabpersonaddresscountrykey.md): Deprecated. Country or region.
- [kABPersonAddressProperty](kabpersonaddressproperty.md): Deprecated. Identifier for the address multivalue property.
- [kABPersonAddressStateKey](kabpersonaddressstatekey.md): Deprecated. State.
- [kABPersonAddressStreetKey](kabpersonaddressstreetkey.md): Deprecated. Street.
- [kABPersonAddressZIPKey](kabpersonaddresszipkey.md): Deprecated. Zip code.
- [kABPersonAlternateBirthdayCalendarIdentifierKey](kabpersonalternatebirthdaycalendaridentifierkey.md): Deprecated. The associated value is a string representing the calendar identifier for a [CFCalendar](../corefoundation/cfcalendar.md).
- [kABPersonAlternateBirthdayDayKey](kabpersonalternatebirthdaydaykey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the day for the birthday.
- [kABPersonAlternateBirthdayEraKey](kabpersonalternatebirthdayerakey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the era for the birthday.
- [kABPersonAlternateBirthdayIsLeapMonthKey](kabpersonalternatebirthdayisleapmonthkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.charType](../corefoundation/cfnumbertype/chartype.md).
- [kABPersonAlternateBirthdayMonthKey](kabpersonalternatebirthdaymonthkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the month for the birthday.
- [kABPersonAlternateBirthdayYearKey](kabpersonalternatebirthdayyearkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the year for the birthday.
- [kABPersonAnniversaryLabel](kabpersonanniversarylabel.md): Deprecated. Birthdate.
- [kABPersonAssistantLabel](kabpersonassistantlabel.md): Deprecated. Assistant.

# kABPersonAlternateBirthdayProperty (Objective-C)

**Framework:** Address Book  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The associated value is a [kABDictionaryPropertyType](kabdictionarypropertytype.md) with keys specified by the other constants listed here.

> use CNContact.nonGregorianBirthday

## Declaration

```objectivec
extern const ABPropertyID kABPersonAlternateBirthdayProperty;
```

<a id="discussion"></a>

## Discussion

You can use toll-free bridging to cast the value to [NSDictionary](../foundation/nsdictionary.md). The data corresponds to an [NSDateComponents](../foundation/nsdatecomponents.md) object.

## See Also

### Deprecated

- [kABPersonAddressCityKey](kabpersonaddresscitykey.md): Deprecated. City.
- [kABPersonAddressCountryCodeKey](kabpersonaddresscountrycodekey.md): Deprecated. Country code. The value is an ISO country code.
- [kABPersonAddressCountryKey](kabpersonaddresscountrykey.md): Deprecated. Country or region.
- [kABPersonAddressProperty](kabpersonaddressproperty.md): Deprecated. Identifier for the address multivalue property.
- [kABPersonAddressStateKey](kabpersonaddressstatekey.md): Deprecated. State.
- [kABPersonAddressStreetKey](kabpersonaddressstreetkey.md): Deprecated. Street.
- [kABPersonAddressZIPKey](kabpersonaddresszipkey.md): Deprecated. Zip code.
- [kABPersonAlternateBirthdayCalendarIdentifierKey](kabpersonalternatebirthdaycalendaridentifierkey.md): Deprecated. The associated value is a string representing the calendar identifier for a [CFCalendarRef](../corefoundation/cfcalendar.md).
- [kABPersonAlternateBirthdayDayKey](kabpersonalternatebirthdaydaykey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the day for the birthday.
- [kABPersonAlternateBirthdayEraKey](kabpersonalternatebirthdayerakey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the era for the birthday.
- [kABPersonAlternateBirthdayIsLeapMonthKey](kabpersonalternatebirthdayisleapmonthkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberCharType](../corefoundation/cfnumbertype/chartype.md).
- [kABPersonAlternateBirthdayMonthKey](kabpersonalternatebirthdaymonthkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the month for the birthday.
- [kABPersonAlternateBirthdayYearKey](kabpersonalternatebirthdayyearkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the year for the birthday.
- [kABPersonAnniversaryLabel](kabpersonanniversarylabel.md): Deprecated. Birthdate.
- [kABPersonAssistantLabel](kabpersonassistantlabel.md): Deprecated. Assistant.
