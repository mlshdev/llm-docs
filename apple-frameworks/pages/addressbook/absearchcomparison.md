> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absearchcomparison](https://developer.apple.com/documentation/addressbook/absearchcomparison)

# ABSearchComparison (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

Constants used to specify the type of comparison beingmade.

## Declaration

```swift
typealias ABSearchComparison = CFIndex
```

<a id="Discussion"></a>

## Discussion

These constants are used in a call to the [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md) or [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md) functionto specify the type of comparison being made.

## Topics

### Constants

- [kABEqual](kabequal.md): Search for elements that are equal to the value.
- [kABNotEqual](kabnotequal.md): Search for elements that are not equal to thevalue.
- [kABNotEqualCaseInsensitive](kabnotequalcaseinsensitive.md): Search for elements that are not equal to the value, ignoring case.
- [kABLessThan](kablessthan.md): Search for elements that are less than thevalue.
- [kABLessThanOrEqual](kablessthanorequal.md): Search for elements that are less than or equalto the value.
- [kABGreaterThan](kabgreaterthan.md): Search for elements that are greater than thevalue.
- [kABGreaterThanOrEqual](kabgreaterthanorequal.md): Search for elements that are greater than orequal to the value.
- [kABEqualCaseInsensitive](kabequalcaseinsensitive.md): Search for elements that are equal to the value,ignoring case.
- [kABContainsSubString](kabcontainssubstring.md): Search for elements that contain the value.
- [kABContainsSubStringCaseInsensitive](kabcontainssubstringcaseinsensitive.md): Search for elements that contain the value,ignoring case.
- [kABPrefixMatch](kabprefixmatch.md): Search for elements that begin with the value.
- [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md): Search for elements that begin with the value, ignoring case.
- [kABSuffixMatch](kabsuffixmatch.md): Search for elements that end with the value.
- [kABSuffixMatchCaseInsensitive](kabsuffixmatchcaseinsensitive.md): Search for elements that end with the value, ignoring case.
- [kABBitsInBitFieldMatch](kabbitsinbitfieldmatch.md): Search for elements that match the bits in ABPersonFlags.
- [kABDoesNotContainSubString](kabdoesnotcontainsubstring.md): Search for elements that do not contain the value.
- [kABDoesNotContainSubStringCaseInsensitive](kabdoesnotcontainsubstringcaseinsensitive.md): Search for elements that do not contain the value, ignoring case.
- [kABWithinIntervalAroundToday](kabwithinintervalaroundtoday.md): Search for elements that are within a time interval (in seconds) forward or backward from today.
- [kABWithinIntervalAroundTodayYearless](kabwithinintervalaroundtodayyearless.md): Search for elements that are within a time interval (in seconds) forward or backward from this day in any year.
- [kABNotWithinIntervalAroundToday](kabnotwithinintervalaroundtoday.md): Search for elements that are *not* within a time interval (in seconds) forward or backward from today.
- [kABNotWithinIntervalAroundTodayYearless](kabnotwithinintervalaroundtodayyearless.md): Search for elements that are *not* within a time interval (in seconds) forward or backward from this day in any year.
- [kABWithinIntervalFromToday](kabwithinintervalfromtoday.md): Search for elements that are within a time interval (in seconds) forward from today.
- [kABWithinIntervalFromTodayYearless](kabwithinintervalfromtodayyearless.md): Search for elements that are within a time interval (in seconds) forward from this day in any year.
- [kABNotWithinIntervalFromToday](kabnotwithinintervalfromtoday.md): Search for elements that are *not* within a time interval (in seconds) forward from today.
- [kABNotWithinIntervalFromTodayYearless](kabnotwithinintervalfromtodayyearless.md): Search for elements that are *not* within a time interval (in seconds) forward from this day in any year.

## See Also

### Constants

- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.

# ABSearchComparison (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

Constants used to specify the type of comparison beingmade.

## Declaration

```objectivec
typedef CFIndex ABSearchComparison;
```

<a id="Discussion"></a>

## Discussion

These constants are used in a call to the [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md) or [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md) functionto specify the type of comparison being made.

## See Also

### Constants

- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.
