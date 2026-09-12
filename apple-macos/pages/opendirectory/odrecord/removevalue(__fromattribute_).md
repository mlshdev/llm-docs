> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/removevalue(_:fromattribute:)](https://developer.apple.com/documentation/opendirectory/odrecord/removevalue(_:fromattribute:))

# removeValue(\_:fromAttribute:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes a value from an attribute of the record.

## Declaration

```swift
func removeValue(_ inValue: Any!, fromAttribute inAttribute: String!) throws
```

## Parameters

- `inValue`: The value. Should be of type `NSString` or `NSData`.
- `inAttribute`: The attribute.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue(\_:toAttribute:)](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetails(forAttributes:)](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValues(forAttribute:)](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [setValue(\_:forAttribute:)](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronize()](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [values(forAttribute:)](values%28forattribute_%29.md): Returns the values of an attribute of the record.

# removeValue:fromAttribute:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes a value from an attribute of the record.

## Declaration

```objectivec
- (BOOL) removeValue:(id) inValue fromAttribute:(ODAttributeType) inAttribute error:(NSError **) outError;
```

## Parameters

- `inValue`: The value. Should be of type `NSString` or `NSData`.
- `inAttribute`: The attribute.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is successfully removed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Record Attributes

- [addValue:toAttribute:error:](addvalue%28__toattribute_%29.md): Adds a value to an attribute of the record.
- [recordDetailsForAttributes:error:](recorddetails%28forattributes_%29.md): Returns a dictionary of attributes with their respective values.
- [recordName](recordname.md): The official name of the record.
- [recordType](recordtype.md): The record’s type.
- [removeValuesForAttribute:error:](removevalues%28forattribute_%29.md): Removes all values from an attribute of the record.
- [setValue:forAttribute:error:](setvalue%28__forattribute_%29.md): Sets the values of an attribute of the record.
- [synchronizeAndReturnError:](synchronize%28%29.md): Synchronizes the record from the directory to get current data and commit changes.
- [valuesForAttribute:error:](values%28forattribute_%29.md): Returns the values of an attribute of the record.
