> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller/displayedproperties](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/displayedproperties)

# displayedProperties (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The properties (such as name or telephone number) the picker displays when it shows a person.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```swift
var displayedProperties: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

Objects in the array are instances of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) that represent [ABPropertyID](https://developer.apple.com/documentation/addressbook/abpropertyid) values.

The name property is always displayed if available.

To have the picker display a single property for the person displayed, such as the telephone number, set `displayedProperties` to an array with a single value, such as `kABPersonPhoneProperty`.

# displayedProperties (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The properties (such as name or telephone number) the picker displays when it shows a person.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSNumber *> * displayedProperties;
```

<a id="Discussion"></a>

## Discussion

Objects in the array are instances of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) that represent [ABPropertyID](https://developer.apple.com/documentation/addressbook/abpropertyid) values.

The name property is always displayed if available.

To have the picker display a single property for the person displayed, such as the telephone number, set `displayedProperties` to an array with a single value, such as `kABPersonPhoneProperty`.
