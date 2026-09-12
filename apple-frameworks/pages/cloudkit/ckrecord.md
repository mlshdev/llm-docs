> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord](https://developer.apple.com/documentation/cloudkit/ckrecord)

# CKRecord (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A collection of key-value pairs that store your app’s data.

## Declaration

```swift
class CKRecord
```

## Mentioned In

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md)
- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Records are the fundamental objects that manage data in CloudKit. You can define any number of record types for your app, with each record type corresponding to a different type of information. Within a record type, you then define one or more fields, each with a name and a value. Records can contain simple data types, such as strings and numbers, or more complex types, such as geographic locations or pointers to other records.

An important step in using CloudKit is defining the record types your app supports. A new record object doesn’t contain any keys or values. During development, you can add new keys and values at any time. The first time you set a value for a key and save the record, the server associates that type with the key for all records of the same type. The `CKRecord` class doesn’t impose these type constraints or do any local validation of a record’s contents. CloudKit enforces these constraints when you save the records.

> **Note**

> The ability to add new keys is only possible during development. When you deploy to a production environment, the server returns an error if you try to specify an unknown record type or try to save a record that contains unknown keys.

Although records behave like dictionaries, there are limitations to the types of values you can assign to keys. The following are the object types that the `CKRecord` class supports. Attempting to specify objects of any other type results in failure. Fields of all types are searchable unless otherwise noted.

<a id="Supported-Data-Types"></a>

### Supported Data Types

`CKRecord` fields support the following data types:

- **[NSString](../foundation/nsstring.md)**: Stores relatively small amounts of text. Although strings themselves can be any length, use a [CKAsset](ckasset.md) to store large amounts of text.
- **[NSNumber](../foundation/nsnumber.md)**: Stores any numerical information, including integers and floating-point numbers.
- **[NSData](../foundation/nsdata.md)**: Stores arbitrary bytes of data. A typical use for data objects is to map the bytes that they contain to a `struct`. Don’t use data objects for storing large binary data files; use a [CKAsset](ckasset.md) instead. Data fields aren’t searchable.
- **[NSDate](../foundation/nsdate.md)**: Stores day and time information in an accessible form.
- **[NSArray](../foundation/nsarray.md)**: Stores one or more objects of any other type in this table. You can store arrays of strings, arrays of numbers, arrays of references, and so on.
- **[CLLocation](../corelocation/cllocation.md)**: Stores geographic coordinate data. You use locations in conjunction with the Core Location framework and any other services that handle location information.
- **[CKAsset](ckasset.md)**: Associates a disk-based file with the record. Although assets have a close association with records, you manage them separately. For more information about using assets, see [CKAsset](ckasset.md).
- **[CKRecord.Reference](ckrecord/reference.md)**: Creates a link to a related record. A reference stores the ID of the target record. The advantage of using a reference instead of storing the ID as a string is that references can initiate cascade deletions of dependent records. The disadvantage is that references can only link between records in the same record zone. For more information, see [CKRecord.Reference](ckrecord/reference.md).

> **Important**

> To ensure the speed of fetching and saving records, the data that a record stores must not exceed 1 MB. Assets don’t count toward this limit, but all other data types do.

<a id="Defining-Records"></a>

### Defining Records

The process for defining your record types depends entirely on your app and the data you’re trying to represent. It’s best to design records that encapsulate data for one unit of information. For example, you might use one record type to store an employee’s name, job title, and date of hire, and use a separate record type to store the employee’s address information. Using different record types lets you manage, manipulate, and validate the two types of information separately.

Use fields that contain [CKRecord.Reference](ckrecord/reference.md) objects to establish relationships between different types of records. After you define your record types, use the iCloud Dashboard to set them up. During development, you can also create new record types programmatically.

<a id="Indexing-the-Fields-of-a-Record"></a>

### Indexing the Fields of a Record

Indexes make it possible to search the contents of your records efficiently. During development, the server indexes all fields with data types it can use in the predicate of a query. This automatic indexing makes it easier to experiment with queries during development, but the indexes require space in a database, and require time to generate and maintain.

To manage the indexing behavior of your records in the production environment, use CloudKit Dashboard. When migrating your schema from the development environment to the production environment, enable indexing only for the fields that your app uses in queries, and disable it for all other fields.

<a id="Customizing-Records"></a>

### Customizing Records

Use this class as-is to manage data coming from or going to the server, and don’t subclass it.

<a id="Storing-Records-Locally"></a>

### Storing Records Locally

If you store records in a local database, use the [encodeSystemFields(with:)](ckrecord/encodesystemfields%28with_%29.md) method to encode and store the record’s metadata. The metadata contains the record ID and the change tag, which you need later to sync records in a local database with those in CloudKit.

## Topics

### Creating a Record

- [init(recordType:recordID:)](ckrecord/init%28recordtype_recordid_%29.md): Creates a record using an ID that you provide.
- [CKRecord.RecordType](ckrecord/recordtype-swift.typealias.md): The data type that CloudKit requires for record types.
- [CKRecord.FieldKey](ckrecord/fieldkey.md): The data type that CloudKit requires for record field names.
- [init(recordType:zoneID:)](ckrecord/init%28recordtype_zoneid_%29.md): Deprecated. Creates a record in the specified zone.

### Accessing the Record’s Fields

- [object(forKey:)](ckrecord/object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](ckrecord/setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](ckrecord/allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](ckrecord/changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](ckrecord/makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordKeyValueIterator](ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.

### Accessing the Record’s Metadata

- [recordID](ckrecord/recordid.md): The unique ID of the record.
- [recordType](ckrecord/recordtype-6v7au.md): The value that your app defines to identify the type of record.
- [CKRecord.SystemType](ckrecord/systemtype.md): Possible values for record types of system records.
- [creationDate](ckrecord/creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](ckrecord/creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](ckrecord/modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](ckrecord/lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](ckrecord/recordchangetag.md): The server change token for the record.
- [CKRecord.ID](ckrecord/id.md): An object that uniquely identifies a record in a database.

### Encrypting the Record’s Values

- [encryptedValues](ckrecord/encryptedvalues.md): An object that manages the record’s encrypted key-value pairs.

### Getting Data for Full-Text Searches

- [allTokens()](ckrecord/alltokens%28%29.md): Returns an array of strings to use for full-text searches of the field’s string-based values.

### Encoding the Record’s Metadata

- [encodeSystemFields(with:)](ckrecord/encodesystemfields%28with_%29.md): Encodes the record’s system fields using the specified archiver.

### Sharing Records

- [parent](ckrecord/parent.md): A reference to the record’s parent record.
- [share](ckrecord/share.md): A reference to the share object that determines the share status of the record.
- [CKRecord.Reference](ckrecord/reference.md): A relationship between two records in a record zone.
- [setParent(\_:)](ckrecord/setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [setParent(\_:)](ckrecord/setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.
- [CKRecord.SystemFieldKey](ckrecord/systemfieldkey.md): Possible values for types of system field keys on records.

### Initializers

- [init(coder:)](ckrecord/init%28coder_%29.md)

### Default Implementations

- [Sequence Implementations](ckrecord/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKShare](ckshare.md)

### Conforms To

- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Schemas

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md): Create a schema to store your app’s objects as records in iCloud using CloudKit.
- [Managing iCloud Containers with CloudKit Database App](managing-icloud-containers-with-cloudkit-database-app.md): Inspect and modify the schema and data for your app’s iCloud container.
- [CKRecordZone](ckrecordzone.md): A database partition that contains related records.
- [CKRecord.Reference](ckrecord/reference.md): A relationship between two records in a record zone.
- [CKAsset](ckasset.md): An external file that belongs to a record.
- [Integrating a Text-Based Schema into Your Workflow](integrating-a-text-based-schema-into-your-workflow.md): Define and update your schema with the CloudKit Schema Language.

# CKRecord (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A collection of key-value pairs that store your app’s data.

## Declaration

```objectivec
@interface CKRecord : NSObject
```

## Mentioned In

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md)
- [Encrypting User Data](encrypting-user-data.md)

<a id="overview"></a>

## Overview

Records are the fundamental objects that manage data in CloudKit. You can define any number of record types for your app, with each record type corresponding to a different type of information. Within a record type, you then define one or more fields, each with a name and a value. Records can contain simple data types, such as strings and numbers, or more complex types, such as geographic locations or pointers to other records.

An important step in using CloudKit is defining the record types your app supports. A new record object doesn’t contain any keys or values. During development, you can add new keys and values at any time. The first time you set a value for a key and save the record, the server associates that type with the key for all records of the same type. The `CKRecord` class doesn’t impose these type constraints or do any local validation of a record’s contents. CloudKit enforces these constraints when you save the records.

> **Note**

> The ability to add new keys is only possible during development. When you deploy to a production environment, the server returns an error if you try to specify an unknown record type or try to save a record that contains unknown keys.

Although records behave like dictionaries, there are limitations to the types of values you can assign to keys. The following are the object types that the `CKRecord` class supports. Attempting to specify objects of any other type results in failure. Fields of all types are searchable unless otherwise noted.

<a id="Supported-Data-Types"></a>

### Supported Data Types

`CKRecord` fields support the following data types:

- **[NSString](../foundation/nsstring.md)**: Stores relatively small amounts of text. Although strings themselves can be any length, use a [CKAsset](ckasset.md) to store large amounts of text.
- **[NSNumber](../foundation/nsnumber.md)**: Stores any numerical information, including integers and floating-point numbers.
- **[NSData](../foundation/nsdata.md)**: Stores arbitrary bytes of data. A typical use for data objects is to map the bytes that they contain to a `struct`. Don’t use data objects for storing large binary data files; use a [CKAsset](ckasset.md) instead. Data fields aren’t searchable.
- **[NSDate](../foundation/nsdate.md)**: Stores day and time information in an accessible form.
- **[NSArray](../foundation/nsarray.md)**: Stores one or more objects of any other type in this table. You can store arrays of strings, arrays of numbers, arrays of references, and so on.
- **[CLLocation](../corelocation/cllocation.md)**: Stores geographic coordinate data. You use locations in conjunction with the Core Location framework and any other services that handle location information.
- **[CKAsset](ckasset.md)**: Associates a disk-based file with the record. Although assets have a close association with records, you manage them separately. For more information about using assets, see [CKAsset](ckasset.md).
- **[CKReference](ckrecord/reference.md)**: Creates a link to a related record. A reference stores the ID of the target record. The advantage of using a reference instead of storing the ID as a string is that references can initiate cascade deletions of dependent records. The disadvantage is that references can only link between records in the same record zone. For more information, see [CKReference](ckrecord/reference.md).

> **Important**

> To ensure the speed of fetching and saving records, the data that a record stores must not exceed 1 MB. Assets don’t count toward this limit, but all other data types do.

<a id="Defining-Records"></a>

### Defining Records

The process for defining your record types depends entirely on your app and the data you’re trying to represent. It’s best to design records that encapsulate data for one unit of information. For example, you might use one record type to store an employee’s name, job title, and date of hire, and use a separate record type to store the employee’s address information. Using different record types lets you manage, manipulate, and validate the two types of information separately.

Use fields that contain [CKReference](ckrecord/reference.md) objects to establish relationships between different types of records. After you define your record types, use the iCloud Dashboard to set them up. During development, you can also create new record types programmatically.

<a id="Indexing-the-Fields-of-a-Record"></a>

### Indexing the Fields of a Record

Indexes make it possible to search the contents of your records efficiently. During development, the server indexes all fields with data types it can use in the predicate of a query. This automatic indexing makes it easier to experiment with queries during development, but the indexes require space in a database, and require time to generate and maintain.

To manage the indexing behavior of your records in the production environment, use CloudKit Dashboard. When migrating your schema from the development environment to the production environment, enable indexing only for the fields that your app uses in queries, and disable it for all other fields.

<a id="Customizing-Records"></a>

### Customizing Records

Use this class as-is to manage data coming from or going to the server, and don’t subclass it.

<a id="Storing-Records-Locally"></a>

### Storing Records Locally

If you store records in a local database, use the [encodeSystemFieldsWithCoder:](ckrecord/encodesystemfields%28with_%29.md) method to encode and store the record’s metadata. The metadata contains the record ID and the change tag, which you need later to sync records in a local database with those in CloudKit.

## Topics

### Creating a Record

- [initWithRecordType:](ckrecord/initwithrecordtype_.md): Creates a new record of the specified type.
- [initWithRecordType:zoneID:](ckrecord/initwithrecordtype_zoneid_.md): Creates a record in the specified zone.
- [initWithRecordType:recordID:](ckrecord/initwithrecordtype_recordid_.md): Creates a record using an ID that you provide.
- [CKRecordType](ckrecordtype.md): A data type that CloudKit requires for record types.
- [CKRecordTypeShare](ckrecordtypeshare-8b6yt.md): The system type that identifies a share record.
- [CKRecordTypeUserRecord](ckrecordtypeuserrecord-49k30.md): The system type that identifies a user record.
- [CKRecordFieldKey](ckrecordfieldkey.md): A data type that CloudKit requires for record field names.

### Accessing the Record’s Fields

- [objectForKey:](ckrecord/objectforkey_.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](ckrecord/setobject_forkey_.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](ckrecord/setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](ckrecord/allkeys.md): Returns an array of the record’s keys.
- [changedKeys](ckrecord/changedkeys.md): Returns an array of keys with recent changes to their values.
- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordCreationDateKey](ckrecordcreationdatekey.md): A key constant that a record uses for its CKRecord.creationDate.
- [CKRecordCreatorUserRecordIDKey](ckrecordcreatoruserrecordidkey.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [CKRecordLastModifiedUserRecordIDKey](ckrecordlastmodifieduserrecordidkey.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [CKRecordModificationDateKey](ckrecordmodificationdatekey.md): A key constant that a record uses for its CKRecord.modificationDate.
- [CKRecordRecordIDKey](ckrecordrecordidkey.md): A key constant that a record uses for its CKRecord.recordID.
- [CKRecordParentKey](ckrecordparentkey-2kx8l.md): The key constant that a record uses for its CKRecord.parent.
- [CKRecordShareKey](ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.

### Accessing the Record’s Metadata

- [recordID](ckrecord/recordid.md): The unique ID of the record.
- [recordType](ckrecord/recordtype-9s09b.md): The value that your app defines to identify the type of record.
- [creationDate](ckrecord/creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](ckrecord/creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](ckrecord/modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](ckrecord/lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](ckrecord/recordchangetag.md): The server change token for the record.
- [CKRecordID](ckrecord/id.md): An object that uniquely identifies a record in a database.

### Encrypting the Record’s Values

- [encryptedValues](ckrecord/encryptedvalues.md): An object that manages the record’s encrypted key-value pairs.

### Getting Data for Full-Text Searches

- [allTokens](ckrecord/alltokens%28%29.md): Returns an array of strings to use for full-text searches of the field’s string-based values.

### Encoding the Record’s Metadata

- [encodeSystemFieldsWithCoder:](ckrecord/encodesystemfields%28with_%29.md): Encodes the record’s system fields using the specified archiver.

### Sharing Records

- [parent](ckrecord/parent.md): A reference to the record’s parent record.
- [share](ckrecord/share.md): A reference to the share object that determines the share status of the record.
- [CKReference](ckrecord/reference.md): A relationship between two records in a record zone.
- [setParentReferenceFromRecord:](ckrecord/setparent%28__%29-23du1.md): Creates and sets a reference object for a parent from its record.
- [setParentReferenceFromRecordID:](ckrecord/setparent%28__%29-7egcx.md): Creates and sets a reference object for a parent from the parent’s record ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKShare](ckshare.md)

### Conforms To

- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Schemas

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md): Create a schema to store your app’s objects as records in iCloud using CloudKit.
- [Managing iCloud Containers with CloudKit Database App](managing-icloud-containers-with-cloudkit-database-app.md): Inspect and modify the schema and data for your app’s iCloud container.
- [CKRecordZone](ckrecordzone.md): A database partition that contains related records.
- [CKReference](ckrecord/reference.md): A relationship between two records in a record zone.
- [CKAsset](ckasset.md): An external file that belongs to a record.
- [Integrating a Text-Based Schema into Your Workflow](integrating-a-text-based-schema-into-your-workflow.md): Define and update your schema with the CloudKit Schema Language.
