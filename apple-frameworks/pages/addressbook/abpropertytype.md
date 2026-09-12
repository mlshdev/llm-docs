> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpropertytype](https://developer.apple.com/documentation/addressbook/abpropertytype)

# ABPropertyType (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

These are the possible types of ABRecord properties.

## Declaration

```swift
typealias ABPropertyType = UInt32
```

```swift
typealias ABPropertyType = CFIndex
```

## Topics

### Constants

- [kABErrorInProperty](kaberrorinproperty.md): An invalid property was used.
- [kABStringProperty](kabstringproperty.md): This property is an `NSString` object.
- [kABIntegerProperty](kabintegerproperty.md): This property is an `NSNumber` object representing an integer.
- [kABRealProperty](kabrealproperty.md): This property is an `NSNumber` object representing a real number.
- [kABDateProperty](kabdateproperty.md): This property is an `NSDate` object.
- [kABArrayProperty](kabarrayproperty.md): This property is an `NSArray` object.
- [kABDictionaryProperty](kabdictionaryproperty.md): This property is an `NSDictionary` object.
- [kABDataProperty](kabdataproperty.md): This property is an `NSData` object.
- [kABMultiStringProperty](kabmultistringproperty.md): This property is an `ABMultiValue` object containing `NSString` objects.
- [kABMultiIntegerProperty](kabmultiintegerproperty.md): This property is an `ABMultiValue` object containing `NSNumber` objects representing integers.
- [kABMultiRealProperty](kabmultirealproperty.md): This property is an `ABMultiValue` object containing `NSNumber` objects representing real numbers.
- [kABMultiDateProperty](kabmultidateproperty.md): This property is an `ABMultiValue` object containing `NSDate` objects.
- [kABMultiArrayProperty](kabmultiarrayproperty.md): This property is an `ABMultiValue` object containing `NSArray` objects.
- [kABMultiDictionaryProperty](kabmultidictionaryproperty.md): This property is an `ABMultiValue` object containing `NSDictionary` objects.
- [kABMultiDataProperty](kabmultidataproperty.md): This property is an `ABMultiValue` object containing `NSData` objects.

## See Also

### Miscellaneous

- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.

# ABPropertyType (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

These are the possible types of ABRecord properties.

## Declaration

```objectivec
typedef uint32_t ABPropertyType;
```

```objectivec
typedef CFIndex ABPropertyType;
```

## See Also

### Miscellaneous

- [ABPickerAttributes](abpickerattributes.md): A bitfield used to specify the selection behavior for the values of multi-value properties.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.
