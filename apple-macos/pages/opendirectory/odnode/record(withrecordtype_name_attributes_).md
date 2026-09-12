> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/record(withrecordtype:name:attributes:)](https://developer.apple.com/documentation/opendirectory/odnode/record(withrecordtype:name:attributes:))

# record(withRecordType:name:attributes:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a record from the node with a specified type and name.

## Declaration

```swift
func record(withRecordType inRecordType: String!, name inRecordName: String!, attributes inAttributes: Any!) throws -> ODRecord
```

## Parameters

- `inRecordType`: The type of the record.
- `inRecordName`: The name of the record.
- `inAttributes`: An array of record attributes to be cached before the record is returned. Can be `nil`.

<a id="return-value"></a>

## Return Value

The requested record.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [createRecord(withRecordType:name:attributes:)](createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [supportedAttributes(forRecordType:)](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypes()](supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.

# recordWithRecordType:name:attributes:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a record from the node with a specified type and name.

## Declaration

```objectivec
- (ODRecord *) recordWithRecordType:(ODRecordType) inRecordType name:(NSString *) inRecordName attributes:(id) inAttributes error:(NSError **) outError;
```

## Parameters

- `inRecordType`: The type of the record.
- `inRecordName`: The name of the record.
- `inAttributes`: An array of record attributes to be cached before the record is returned. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The requested record.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [createRecordWithRecordType:name:attributes:error:](createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [supportedAttributesForRecordType:error:](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
- [supportedRecordTypesAndReturnError:](supportedrecordtypes%28%29.md): Returns an array of the record types supported by the node.
