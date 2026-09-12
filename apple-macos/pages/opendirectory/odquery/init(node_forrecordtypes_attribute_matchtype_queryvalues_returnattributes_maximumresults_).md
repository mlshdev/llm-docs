> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/init(node:forrecordtypes:attribute:matchtype:queryvalues:returnattributes:maximumresults:)](https://developer.apple.com/documentation/opendirectory/odquery/init(node:forrecordtypes:attribute:matchtype:queryvalues:returnattributes:maximumresults:))

# init(node:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:) (Swift)

**Framework:** Open Directory  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a query object with provided parameters.

## Declaration

```swift
init(node inNode: ODNode!, forRecordTypes inRecordTypeOrList: Any!, attribute inAttribute: String!, matchType inMatchType: ODMatchType, queryValues inQueryValueOrList: Any!, returnAttributes inReturnAttributeOrList: Any!, maximumResults inMaximumResults: Int) throws
```

## Parameters

- `inNode`: The node to query.
- `inRecordTypeOrList`: The type or types of record to query. Can be an `NSString` object for a single type or an `NSArray` object containing `NSString` objects for multiple types.
- `inAttribute`: The name of the attribute to query.
- `inMatchType`: The type of query.
- `inQueryValueOrList`: The value or values to query in the attribute. Can be an `NSString` object or an `NSData` object for a single value, or an `NSArray` containing `NSString` and `NSData` objects for multiple values.
- `inReturnAttributeOrList`: The attribute or attributes to be returned from the query. Can be an `NSString` object for a single attribute or an `NSArray` object containing `NSString` objects for multiple attributes. Passing `nil` is equivalent to passing `kODAttributeTypeStandardOnly`.
- `inMaximumResults`: The maximum number of values to return.

<a id="return-value"></a>

## Return Value

The initialized query.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# initWithNode:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a query object with provided parameters.

## Declaration

```objectivec
- (instancetype) initWithNode:(ODNode *) inNode forRecordTypes:(id) inRecordTypeOrList attribute:(ODAttributeType) inAttribute matchType:(ODMatchType) inMatchType queryValues:(id) inQueryValueOrList returnAttributes:(id) inReturnAttributeOrList maximumResults:(NSInteger) inMaximumResults error:(NSError **) outError;
```

## Parameters

- `inNode`: The node to query.
- `inRecordTypeOrList`: The type or types of record to query. Can be an `NSString` object for a single type or an `NSArray` object containing `NSString` objects for multiple types.
- `inAttribute`: The name of the attribute to query.
- `inMatchType`: The type of query.
- `inQueryValueOrList`: The value or values to query in the attribute. Can be an `NSString` object or an `NSData` object for a single value, or an `NSArray` containing `NSString` and `NSData` objects for multiple values.
- `inReturnAttributeOrList`: The attribute or attributes to be returned from the query. Can be an `NSString` object for a single attribute or an `NSArray` object containing `NSString` objects for multiple attributes. Passing `nil` is equivalent to passing `kODAttributeTypeStandardOnly`.
- `inMaximumResults`: The maximum number of values to return.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The initialized query.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Initializing a Query

- [queryWithNode:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:error:](querywithnode_forrecordtypes_attribute_matchtype_queryvalues_returnattributes_maximumresults_error_.md): Returns an autoreleased query object created with provided parameters.
