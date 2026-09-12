> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/propertylist(with:options:format:)](https://developer.apple.com/documentation/foundation/propertylistserialization/propertylist(with:options:format:))

# propertyList(with:options:format:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a property list by reading from the specified stream.

## Declaration

```swift
class func propertyList(with stream: InputStream, options opt: PropertyListSerialization.ReadOptions = [], format: UnsafeMutablePointer<PropertyListSerialization.PropertyListFormat>?) throws -> Any
```

## Parameters

- `stream`: An `NSStream` object. The stream should be open and configured for reading.
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

- [propertyList(from:options:format:)](propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.

# propertyListWithStream:options:format:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a property list by reading from the specified stream.

## Declaration

```objectivec
+ (id) propertyListWithStream:(NSInputStream *) stream options:(NSPropertyListReadOptions) opt format:(NSPropertyListFormat *) format error:(NSError **) error;
```

## Parameters

- `stream`: An `NSStream` object. The stream should be open and configured for reading.
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

- [propertyListWithData:options:format:error:](propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.
