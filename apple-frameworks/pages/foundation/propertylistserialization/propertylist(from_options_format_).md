> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/propertylist(from:options:format:)](https://developer.apple.com/documentation/foundation/propertylistserialization/propertylist(from:options:format:))

# propertyList(from:options:format:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a property list from the specified data.

## Declaration

```swift
class func propertyList(from data: Data, options opt: PropertyListSerialization.ReadOptions = [], format: UnsafeMutablePointer<PropertyListSerialization.PropertyListFormat>?) throws -> Any
```

## Parameters

- `data`: A data object containing a serialized property list.
- `opt`: The options used to create the property list. For possible values, see [PropertyListSerialization.MutabilityOptions](mutabilityoptions.md).
- `format`: Upon return, contains the format that the property list was stored in. Pass `nil` if you do not need to know the format.

<a id="return-value"></a>

## Return Value

A property list object corresponding to the representation in `data`. If data is not in a supported format, returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deserializing a Property List

- [propertyList(with:options:format:)](propertylist%28with_options_format_%29.md): Creates and returns a property list by reading from the specified stream.

# propertyListWithData:options:format:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a property list from the specified data.

## Declaration

```objectivec
+ (id) propertyListWithData:(NSData *) data options:(NSPropertyListReadOptions) opt format:(NSPropertyListFormat *) format error:(NSError **) error;
```

## Parameters

- `data`: A data object containing a serialized property list.
- `opt`: The options used to create the property list. For possible values, see [NSPropertyListMutabilityOptions](mutabilityoptions.md).
- `format`: Upon return, contains the format that the property list was stored in. Pass `nil` if you do not need to know the format.
- `error`: If the method does not complete successfully, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

A property list object corresponding to the representation in `data`. If data is not in a supported format, returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deserializing a Property List

- [propertyListWithStream:options:format:error:](propertylist%28with_options_format_%29.md): Creates and returns a property list by reading from the specified stream.
