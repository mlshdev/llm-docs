> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbrecordfieldstringlistvalue

# CKDBRecordFieldStringListValue

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

The value of the field of type string list.

## Declaration

```
dictionary CKDBRecordFieldStringListValue {
	string type;
	string[]? value;
};
```

<a id="overview"></a>

## Overview

In JavaScript, this is a plain object with properties as described.

In TypeScript, this type is imported in the following way:

```javascript
import type { CKDBRecordFieldStringListValue } from "@apple/cktool.database";
```

## Topics

### Instance Properties

- [type](ckdbrecordfieldstringlistvalue/type.md): A string used to identify the field type.
- [value](ckdbrecordfieldstringlistvalue/value.md): An array of strings.

## See Also

### Strings

- [CKDBRecordFieldStringValue](ckdbrecordfieldstringvalue.md): The value of the field of type string.
- [CKDBRecordFieldEncryptedStringValue](ckdbrecordfieldencryptedstringvalue.md): The value of the encrypted field of type string.
- [CKDBRecordFieldEncryptedStringListValue](ckdbrecordfieldencryptedstringlistvalue.md): The value of the encrypted field of type string list.
