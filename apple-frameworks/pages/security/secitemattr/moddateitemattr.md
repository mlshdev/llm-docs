> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr/moddateitemattr](https://developer.apple.com/documentation/security/secitemattr/moddateitemattr)

# SecItemAttr.modDateItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the modification date attribute.

## Declaration

```swift
case modDateItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to get a string value that represents the date the item was created, expressed in Zulu Time format (“YYYYMMDDhhmmssZ”). This is the native format for stored time values in the CDSA specification (defined as `CSSM_DB_ATTRIBUTE_FORMAT_TIME_DATE` in the `CSSM_DB_ATTRIBUTE_FORMAT` enumeration, Section 17.2.6.). When specifying the creation date as input to a function (for example, [SecKeychainSearchCreateFromAttributes](../seckeychainsearchcreatefromattributes.md)), you may alternatively provide a numeric value of type `UInt32` or `SInt64`, expressed as seconds since 01 January 1904.

# kSecModDateItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the modification date attribute.

## Declaration

```objectivec
kSecModDateItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to get a string value that represents the date the item was created, expressed in Zulu Time format (“YYYYMMDDhhmmssZ”). This is the native format for stored time values in the CDSA specification (defined as `CSSM_DB_ATTRIBUTE_FORMAT_TIME_DATE` in the `CSSM_DB_ATTRIBUTE_FORMAT` enumeration, Section 17.2.6.). When specifying the creation date as input to a function (for example, [SecKeychainSearchCreateFromAttributes](../seckeychainsearchcreatefromattributes.md)), you may alternatively provide a numeric value of type `UInt32` or `SInt64`, expressed as seconds since 01 January 1904.
