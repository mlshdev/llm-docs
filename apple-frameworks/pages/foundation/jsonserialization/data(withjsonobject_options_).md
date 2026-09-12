> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/data(withjsonobject:options:)](https://developer.apple.com/documentation/foundation/jsonserialization/data(withjsonobject:options:))

# data(withJSONObject:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns JSON data from a Foundation object.

## Declaration

```swift
class func data(withJSONObject obj: Any, options opt: JSONSerialization.WritingOptions = []) throws -> Data
```

## Parameters

- `obj`: The object from which to generate JSON data. Must not be `nil`.
- `opt`: Options for creating the JSON data.

  See [JSONSerialization.WritingOptions](writingoptions.md) for possible values.

<a id="return-value"></a>

## Return Value

JSON data for `obj`, or `nil` if an internal error occurs. The resulting data is encoded in UTF-8.

<a id="Discussion"></a>

## Discussion

If `obj` can’t produce valid JSON, [JSONSerialization](../jsonserialization.md) throws an exception. This exception occurs prior to parsing and represents a programming error, not an internal error. Before calling this method, you should check whether the input can produce valid JSON by using [isValidJSONObject(\_:)](isvalidjsonobject%28__%29.md).

Setting the [prettyPrinted](writingoptions/prettyprinted.md) option generates JSON with white space designed to make the output more readable. If this option isn’t set, [JSONSerialization](../jsonserialization.md) generates the most compact possible JSON.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating JSON Data

- [writeJSONObject(\_:to:options:error:)](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [JSONSerialization.WritingOptions](writingoptions.md): Options for writing JSON data.
- [isValidJSONObject(\_:)](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

# dataWithJSONObject:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns JSON data from a Foundation object.

## Declaration

```objectivec
+ (NSData *) dataWithJSONObject:(id) obj options:(NSJSONWritingOptions) opt error:(NSError **) error;
```

## Parameters

- `obj`: The object from which to generate JSON data. Must not be `nil`.
- `opt`: Options for creating the JSON data.

  See [NSJSONWritingOptions](writingoptions.md) for possible values.
- `error`: If an internal error occurs, upon return contains an `NSError` object with code [NSPropertyListWriteInvalidError](../nspropertylistwriteinvaliderror-swift.var.md) that describes the problem.

<a id="return-value"></a>

## Return Value

JSON data for `obj`, or `nil` if an internal error occurs. The resulting data is encoded in UTF-8.

<a id="Discussion"></a>

## Discussion

If `obj` can’t produce valid JSON, [NSJSONSerialization](../jsonserialization.md) throws an exception. This exception occurs prior to parsing and represents a programming error, not an internal error. Before calling this method, you should check whether the input can produce valid JSON by using [isValidJSONObject:](isvalidjsonobject%28__%29.md).

Setting the [NSJSONWritingPrettyPrinted](writingoptions/prettyprinted.md) option generates JSON with white space designed to make the output more readable. If this option isn’t set, [NSJSONSerialization](../jsonserialization.md) generates the most compact possible JSON.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating JSON Data

- [writeJSONObject:toStream:options:error:](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [NSJSONWritingOptions](writingoptions.md): Options for writing JSON data.
- [isValidJSONObject:](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.
