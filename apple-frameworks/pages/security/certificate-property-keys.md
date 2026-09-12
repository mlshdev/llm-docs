> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/certificate-property-keys](https://developer.apple.com/documentation/security/certificate-property-keys)

# Certificate Property Keys (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize the dictionary keys that taken together define a certificate property.

<a id="overview"></a>

## Overview

These are the keys that appear in the property dictionaries that describe a certificate. Each property dictionary includes a key for the property type, a label for the property, a localized label, and the property value itself. Many property dictionaries are in turn collected into a larger dictionary that is returned by a call to the [SecCertificateCopyValues(\_:\_:\_:)](seccertificatecopyvalues%28______%29.md) function.

## Topics

### Constants

- [kSecPropertyKeyType](ksecpropertykeytype.md): A key whose value indicates the type of certificate property.
- [kSecPropertyKeyLabel](ksecpropertykeylabel.md): A key whose value is the label for a certificate property.
- [kSecPropertyKeyLocalizedLabel](ksecpropertykeylocalizedlabel.md): A key whose value is the localized label for a certificate property.
- [kSecPropertyKeyValue](ksecpropertykeyvalue.md): A key whose value is the value for a certificate property.

# Certificate Property Keys (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize the dictionary keys that taken together define a certificate property.

<a id="overview"></a>

## Overview

These are the keys that appear in the property dictionaries that describe a certificate. Each property dictionary includes a key for the property type, a label for the property, a localized label, and the property value itself. Many property dictionaries are in turn collected into a larger dictionary that is returned by a call to the [SecCertificateCopyValues](seccertificatecopyvalues%28______%29.md) function.

## Topics

### Constants

- [kSecPropertyKeyType](ksecpropertykeytype.md): A key whose value indicates the type of certificate property.
- [kSecPropertyKeyLabel](ksecpropertykeylabel.md): A key whose value is the label for a certificate property.
- [kSecPropertyKeyLocalizedLabel](ksecpropertykeylocalizedlabel.md): A key whose value is the localized label for a certificate property.
- [kSecPropertyKeyValue](ksecpropertykeyvalue.md): A key whose value is the value for a certificate property.
