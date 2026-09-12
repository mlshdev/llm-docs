> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/localizedstring(forkey:)](https://developer.apple.com/documentation/contacts/cncontact/localizedstring(forkey:))

# localizedString(forKey:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the localized contact property name.

## Declaration

```swift
class func localizedString(forKey key: String) -> String
```

## Parameters

- `key`: A string containing the contact property key.

<a id="Return-Value"></a>

## Return Value

A localized string containing the contact property name.

<a id="Discussion"></a>

## Discussion

This method returns a localized string for a contact property key. For example, the value of a Canadian `CNContactPostalAddressesKey` field would be “Postal Code”, while the value of a French one would be “Code Postal”.

# localizedStringForKey: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the localized contact property name.

## Declaration

```objectivec
+ (NSString *) localizedStringForKey:(NSString *) key;
```

## Parameters

- `key`: A string containing the contact property key.

<a id="Return-Value"></a>

## Return Value

A localized string containing the contact property name.

<a id="Discussion"></a>

## Discussion

This method returns a localized string for a contact property key. For example, the value of a Canadian `CNContactPostalAddressesKey` field would be “Postal Code”, while the value of a French one would be “Code Postal”.
