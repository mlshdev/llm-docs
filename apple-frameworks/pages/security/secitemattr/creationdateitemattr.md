> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr/creationdateitemattr](https://developer.apple.com/documentation/security/secitemattr/creationdateitemattr)

# SecItemAttr.creationDateItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the creation date attribute.

## Declaration

```swift
case creationDateItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to get a string value that represents the date the item was created, expressed in Zulu Time format (“YYYYMMDDhhmmssZ”). This is the native format for stored time values in the CDSA specification (defined as `CSSM_DB_ATTRIBUTE_FORMAT_TIME_DATE` in the `CSSM_DB_ATTRIBUTE_FORMAT` enumeration, Section 17.2.6.). When specifying the creation date as input to a function (for example, [SecKeychainSearchCreateFromAttributes](../seckeychainsearchcreatefromattributes.md)), you may alternatively provide a numeric value of type `UInt32` or `SInt64`, expressed as seconds since 01 January 1904.

# kSecCreationDateItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the creation date attribute.

## Declaration

```objectivec
kSecCreationDateItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to get a string value that represents the date the item was created, expressed in Zulu Time format (“YYYYMMDDhhmmssZ”). This is the native format for stored time values in the CDSA specification (defined as `CSSM_DB_ATTRIBUTE_FORMAT_TIME_DATE` in the `CSSM_DB_ATTRIBUTE_FORMAT` enumeration, Section 17.2.6.). When specifying the creation date as input to a function (for example, [SecKeychainSearchCreateFromAttributes](../seckeychainsearchcreatefromattributes.md)), you may alternatively provide a numeric value of type `UInt32` or `SInt64`, expressed as seconds since 01 January 1904.
