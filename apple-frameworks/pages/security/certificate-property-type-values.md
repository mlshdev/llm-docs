> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/certificate-property-type-values](https://developer.apple.com/documentation/security/certificate-property-type-values)

# Certificate Property Type Values (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize the possible certificate property types.

<a id="overview"></a>

## Overview

These are the possible values that may be assigned to the [kSecPropertyKeyType](ksecpropertykeytype.md) key in each of the property dictionaries returned by a call to the [SecCertificateCopyValues(\_:\_:\_:)](seccertificatecopyvalues%28______%29.md) function.

## Topics

### Constants

- [kSecPropertyTypeWarning](ksecpropertytypewarning.md): A key whose value is a string describing a trust evaluation warning.
- [kSecPropertyTypeSuccess](ksecpropertytypesuccess.md): A key whose value is a string describing a trust evaluation success.
- [kSecPropertyTypeSection](ksecpropertytypesection.md): A key whose value is a string describing the name of a field in the certificate (`CFSTR("Subject Name")`, for example).
- [kSecPropertyTypeData](ksecpropertytypedata.md): A key whose value is a data object.
- [kSecPropertyTypeString](ksecpropertytypestring.md): A key whose value is a string.
- [kSecPropertyTypeURL](ksecpropertytypeurl.md): Specifies a key whose value is a URL.
- [kSecPropertyTypeDate](ksecpropertytypedate.md): Specifies a key whose value is a string containing a date (or a string listing the bytes of an invalid date).
- [kSecPropertyTypeArray](ksecpropertytypearray.md): Specifies a key whose value is an array.
- [kSecPropertyTypeNumber](ksecpropertytypenumber.md): Specifies a key whose value is a number.
- [kSecPropertyTypeTitle](ksecpropertytypetitle.md): Specifies a key whose value is a string containing the title (display name) of the certificate.
- [kSecPropertyTypeError](ksecpropertytypeerror.md): Specifies a key whose value is a string containing the reason for a trust evaluation failure.

# Certificate Property Type Values (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize the possible certificate property types.

<a id="overview"></a>

## Overview

These are the possible values that may be assigned to the [kSecPropertyKeyType](ksecpropertykeytype.md) key in each of the property dictionaries returned by a call to the [SecCertificateCopyValues](seccertificatecopyvalues%28______%29.md) function.

## Topics

### Constants

- [kSecPropertyTypeWarning](ksecpropertytypewarning.md): A key whose value is a string describing a trust evaluation warning.
- [kSecPropertyTypeSuccess](ksecpropertytypesuccess.md): A key whose value is a string describing a trust evaluation success.
- [kSecPropertyTypeSection](ksecpropertytypesection.md): A key whose value is a string describing the name of a field in the certificate (`CFSTR("Subject Name")`, for example).
- [kSecPropertyTypeData](ksecpropertytypedata.md): A key whose value is a data object.
- [kSecPropertyTypeString](ksecpropertytypestring.md): A key whose value is a string.
- [kSecPropertyTypeURL](ksecpropertytypeurl.md): Specifies a key whose value is a URL.
- [kSecPropertyTypeDate](ksecpropertytypedate.md): Specifies a key whose value is a string containing a date (or a string listing the bytes of an invalid date).
- [kSecPropertyTypeArray](ksecpropertytypearray.md): Specifies a key whose value is an array.
- [kSecPropertyTypeNumber](ksecpropertytypenumber.md): Specifies a key whose value is a number.
- [kSecPropertyTypeTitle](ksecpropertytypetitle.md): Specifies a key whose value is a string containing the title (display name) of the certificate.
- [kSecPropertyTypeError](ksecpropertytypeerror.md): Specifies a key whose value is a string containing the reason for a trust evaluation failure.
