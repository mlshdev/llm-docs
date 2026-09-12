> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/data(frompropertylist:format:options:)](https://developer.apple.com/documentation/foundation/propertylistserialization/data(frompropertylist:format:options:))

# data(fromPropertyList:format:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSData` object containing a given property list in a specified format.

## Declaration

```swift
class func data(fromPropertyList plist: Any, format: PropertyListSerialization.PropertyListFormat, options opt: PropertyListSerialization.WriteOptions) throws -> Data
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [PropertyListSerialization.PropertyListFormat](propertylistformat.md).
- `opt`: The `opt` parameter is currently unused. No options should be specified.

<a id="return-value"></a>

## Return Value

An `NSData` object containing `plist` in the format specified by `format`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)
- [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i)

### Serializing a Property List

- [writePropertyList(\_:to:format:options:error:)](writepropertylist%28__to_format_options_error_%29.md): Writes a property list to the specified stream.
- [PropertyListSerialization.WriteOptions](writeoptions.md)

# dataWithPropertyList:format:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSData` object containing a given property list in a specified format.

## Declaration

```objectivec
+ (NSData *) dataWithPropertyList:(id) plist format:(NSPropertyListFormat) format options:(NSPropertyListWriteOptions) opt error:(NSError **) error;
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [NSPropertyListFormat](propertylistformat.md).
- `opt`: The `opt` parameter is currently unused. No options should be specified.
- `error`: If the method does not complete successfully, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

An `NSData` object containing `plist` in the format specified by `format`. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)
- [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i)

### Serializing a Property List

- [writePropertyList:toStream:format:options:error:](writepropertylist%28__to_format_options_error_%29.md): Writes a property list to the specified stream.
- [NSPropertyListWriteOptions](writeoptions.md)
