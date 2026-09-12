> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/values(forattribute:)](https://developer.apple.com/documentation/opendirectory/odrecord/values(forattribute:))

# values(forAttribute:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the values of an attribute of the record.

## Declaration

```swift
func values(forAttribute inAttribute: String!) throws -> [Any]
```

## Parameters

- `inAttribute`: The attribute.

<a id="return-value"></a>

## Return Value

An array of attribute values. Elements are of type `NSString` or `NSData`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue(\_:toAttribute:)](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetails(forAttributes:)](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValues(forAttribute:)](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue(\_:fromAttribute:)](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronize()](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.

# valuesForAttribute:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the values of an attribute of the record.

## Declaration

```objectivec
- (NSArray *) valuesForAttribute:(ODAttributeType) inAttribute error:(NSError **) outError;
```

## Parameters

- `inAttribute`: The attribute.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

An array of attribute values. Elements are of type `NSString` or `NSData`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue:toAttribute:error:](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetailsForAttributes:error:](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValuesForAttribute:error:](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue:fromAttribute:error:](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue:forAttribute:error:](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronizeAndReturnError:](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
