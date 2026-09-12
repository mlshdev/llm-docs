> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/supportedrecordtypes()](https://developer.apple.com/documentation/opendirectory/odnode/supportedrecordtypes())

# supportedRecordTypes() (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an array of the record types supported by the node.

## Declaration

```swift
func supportedRecordTypes() throws -> [Any]
```

<a id="return-value"></a>

## Return Value

An array of supported record types.

<a id="Discussion"></a>

## Discussion

If the node does not support checking for supported record types, all possible record types are returned.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [createRecord(withRecordType:name:attributes:)](createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [record(withRecordType:name:attributes:)](record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributes(forRecordType:)](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.

# supportedRecordTypesAndReturnError: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an array of the record types supported by the node.

## Declaration

```objectivec
- (NSArray *) supportedRecordTypesAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

An array of supported record types.

<a id="Discussion"></a>

## Discussion

If the node does not support checking for supported record types, all possible record types are returned.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Node Records

- [createRecordWithRecordType:name:attributes:error:](createrecord%28withrecordtype_name_attributes_%29.md): Creates a record in a specified node with specified properties.
- [recordWithRecordType:name:attributes:error:](record%28withrecordtype_name_attributes_%29.md): Returns a record from the node with a specified type and name.
- [supportedAttributesForRecordType:error:](supportedattributes%28forrecordtype_%29.md): Returns an array of attribute types supported by the node’s records.
