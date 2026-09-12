> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/recorddetails(forattributes:)](https://developer.apple.com/documentation/opendirectory/odrecord/recorddetails(forattributes:))

# recordDetails(forAttributes:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a dictionary of attributes with their respective values.

## Declaration

```swift
func recordDetails(forAttributes inAttributes: [Any]!) throws -> [AnyHashable : Any]
```

## Parameters

- `inAttributes`: An array of attributes. Can be `nil`.

<a id="return-value"></a>

## Return Value

A dictionary of the attributes in `inAttributes` with their respective values.

<a id="Discussion"></a>

## Discussion

If `inAttributes` is `nil`, all currently retrieved attributes are returned.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue(\_:toAttribute:)](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValues(forAttribute:)](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue(\_:fromAttribute:)](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronize()](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [values(forAttribute:)](values%28forattribute_%29.md): Returns the values of an attribute of the record.

# recordDetailsForAttributes:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a dictionary of attributes with their respective values.

## Declaration

```objectivec
- (NSDictionary *) recordDetailsForAttributes:(NSArray *) inAttributes error:(NSError **) outError;
```

## Parameters

- `inAttributes`: An array of attributes. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

A dictionary of the attributes in `inAttributes` with their respective values.

<a id="Discussion"></a>

## Discussion

If `inAttributes` is `nil`, all currently retrieved attributes are returned.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue:toAttribute:error:](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValuesForAttribute:error:](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [removeValue:fromAttribute:error:](removevalue%28__fromattribute_%29.md): Removes a value from an attribute of the record.
- [setValue:forAttribute:error:](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronizeAndReturnError:](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [valuesForAttribute:error:](values%28forattribute_%29.md): Returns the values of an attribute of the record.
