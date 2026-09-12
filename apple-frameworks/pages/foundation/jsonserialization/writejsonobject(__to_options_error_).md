> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/writejsonobject(_:to:options:error:)](https://developer.apple.com/documentation/foundation/jsonserialization/writejsonobject(_:to:options:error:))

# writeJSONObject(\_:to:options:error:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes a given JSON object to a stream.

## Declaration

```swift
class func writeJSONObject(_ obj: Any, to stream: OutputStream, options opt: JSONSerialization.WritingOptions = [], error: NSErrorPointer) -> Int
```

## Parameters

- `obj`: The object to write to `stream`.
- `stream`: The stream to which to write.

  The stream should be open and configured.
- `opt`: Options for writing the JSON data.

  See [JSONSerialization.WritingOptions](writingoptions.md) for possible values.
- `error`: If an error occurs, upon return contains an `NSError` object with code [NSPropertyListWriteInvalidError](../nspropertylistwriteinvaliderror-swift.var.md) that describes the problem.

<a id="return-value"></a>

## Return Value

The number of bytes written to the stream, or `0` if an error occurs.

## See Also

### Creating JSON Data

- [data(withJSONObject:options:)](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [JSONSerialization.WritingOptions](writingoptions.md): Options for writing JSON data.
- [isValidJSONObject(\_:)](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

# writeJSONObject:toStream:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes a given JSON object to a stream.

## Declaration

```objectivec
+ (NSInteger) writeJSONObject:(id) obj toStream:(NSOutputStream *) stream options:(NSJSONWritingOptions) opt error:(NSError **) error;
```

## Parameters

- `obj`: The object to write to `stream`.
- `stream`: The stream to which to write.

  The stream should be open and configured.
- `opt`: Options for writing the JSON data.

  See [NSJSONWritingOptions](writingoptions.md) for possible values.
- `error`: If an error occurs, upon return contains an `NSError` object with code [NSPropertyListWriteInvalidError](../nspropertylistwriteinvaliderror-swift.var.md) that describes the problem.

<a id="return-value"></a>

## Return Value

The number of bytes written to the stream, or `0` if an error occurs.

## See Also

### Creating JSON Data

- [dataWithJSONObject:options:error:](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [NSJSONWritingOptions](writingoptions.md): Options for writing JSON data.
- [isValidJSONObject:](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.
