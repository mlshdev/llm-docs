> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/createrecord(withrecordtype:name:attributes:)](https://developer.apple.com/documentation/opendirectory/odnode/createrecord(withrecordtype:name:attributes:))

# createRecord(withRecordType:name:attributes:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a record in a specified node with specified properties.

## Declaration

```swift
func createRecord(withRecordType inRecordType: String!, name inRecordName: String!, attributes inAttributes: [AnyHashable : Any]! = [:]) throws -> ODRecord
```

## Parameters

- `inRecordType`: The record’s type.
- `inRecordName`: The record’s name.
- `inAttributes`: A dictionary of key-value pairs representing attributes for the record. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created record.

<a id="Discussion"></a>

## Discussion

The record is automatically assigned a UUID. This UUID can be overridden if one is specified in `inAttributes`.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [record(withRecordType:name:attributes:)](record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributes(forRecordType:)](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypes()](supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.

# createRecordWithRecordType:name:attributes:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a record in a specified node with specified properties.

## Declaration

```objectivec
- (ODRecord *) createRecordWithRecordType:(ODRecordType) inRecordType name:(NSString *) inRecordName attributes:(NSDictionary *) inAttributes error:(NSError **) outError;
```

## Parameters

- `inRecordType`: The record’s type.
- `inRecordName`: The record’s name.
- `inAttributes`: A dictionary of key-value pairs representing attributes for the record. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created record.

<a id="Discussion"></a>

## Discussion

The record is automatically assigned a UUID. This UUID can be overridden if one is specified in `inAttributes`.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [recordWithRecordType:name:attributes:error:](record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributesForRecordType:error:](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypesAndReturnError:](supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.
