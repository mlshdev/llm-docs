> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/jsonobject(with:options:)-3afap](https://developer.apple.com/documentation/foundation/jsonserialization/jsonobject(with:options:)-3afap)

# jsonObject(with:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Foundation object from JSON data in a given stream.

## Declaration

```swift
class func jsonObject(with stream: InputStream, options opt: JSONSerialization.ReadingOptions = []) throws -> Any
```

## Parameters

- `stream`: A stream from which to read JSON data.

  The stream should be open and configured.
- `opt`: Options for reading the JSON data and creating the Foundation objects.

  For possible values, see [JSONSerialization.ReadingOptions](readingoptions.md).

<a id="return-value"></a>

## Return Value

A Foundation object from the JSON data in `stream`.

<a id="Discussion"></a>

## Discussion

The data in the stream must be in one of the 5 supported encodings listed in the JSON specification: UTF-8, UTF-16LE, UTF-16BE, UTF-32LE, UTF-32BE. The data may or may not have a BOM. The most efficient encoding to use for parsing is UTF-8, so if you have a choice in encoding the data passed to this method, use UTF-8.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [writeJSONObject(\_:to:options:error:)](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.

### Creating a JSON Object

- [jsonObject(with:options:)](jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [JSONSerialization.ReadingOptions](readingoptions.md): Options used when creating Foundation objects from JSON data.

# JSONObjectWithStream:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Foundation object from JSON data in a given stream.

## Declaration

```objectivec
+ (id) JSONObjectWithStream:(NSInputStream *) stream options:(NSJSONReadingOptions) opt error:(NSError **) error;
```

## Parameters

- `stream`: A stream from which to read JSON data.

  The stream should be open and configured.
- `opt`: Options for reading the JSON data and creating the Foundation objects.

  For possible values, see [NSJSONReadingOptions](readingoptions.md).
- `error`: If an error occurs, upon return contains an `NSError` object with code [NSPropertyListReadCorruptError](../nspropertylistreadcorrupterror-swift.var.md) that describes the problem.

<a id="return-value"></a>

## Return Value

A Foundation object from the JSON data in `stream`. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The data in the stream must be in one of the 5 supported encodings listed in the JSON specification: UTF-8, UTF-16LE, UTF-16BE, UTF-32LE, UTF-32BE. The data may or may not have a BOM. The most efficient encoding to use for parsing is UTF-8, so if you have a choice in encoding the data passed to this method, use UTF-8.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [writeJSONObject:toStream:options:error:](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.

### Creating a JSON Object

- [JSONObjectWithData:options:error:](jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [NSJSONReadingOptions](readingoptions.md): Options used when creating Foundation objects from JSON data.
