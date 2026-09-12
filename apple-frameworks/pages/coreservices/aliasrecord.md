> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aliasrecord](https://developer.apple.com/documentation/coreservices/aliasrecord)

# AliasRecord

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines an alias record.

## Declaration

```objectivec
typedef struct AliasRecord {
    ...
} AliasRecord;
```

<a id="overview"></a>

## Overview

The Alias Manager uses alias records to store information that allows it to locate an object in the file system.

## Topics

### Fields

- [userType](aliasrecord/1805870-usertype.md): A 4-byte field that can contain application-specific data. When an alias record is created, this field contains 0. Your application can use this field for its own purposes.
- [aliasSize](aliasrecord/1805882-aliassize.md): The size, in bytes, assigned to the alias record at the time of its creation or updating. This is the total size of the record, including the `userType` and `aliasSize` fields, as well as the variable-length data that is private to the Alias Manager.

### Instance Properties

- [hidden](aliasrecord/1444289-hidden.md)
