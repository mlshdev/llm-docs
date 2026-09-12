> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/isvalidjsonobject(_:)](https://developer.apple.com/documentation/foundation/jsonserialization/isvalidjsonobject(_:))

# isValidJSONObject(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

## Declaration

```swift
class func isValidJSONObject(_ obj: Any) -> Bool
```

## Parameters

- `obj`: The object to test.

<a id="return-value"></a>

## Return Value

`true` if `obj` can be converted to JSON data; otherwise, `false`.

## See Also

### Creating JSON Data

- [data(withJSONObject:options:)](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject(\_:to:options:error:)](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [JSONSerialization.WritingOptions](writingoptions.md): Options for writing JSON data.

# isValidJSONObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

## Declaration

```objectivec
+ (BOOL) isValidJSONObject:(id) obj;
```

## Parameters

- `obj`: The object to test.

<a id="return-value"></a>

## Return Value

`true` if `obj` can be converted to JSON data; otherwise, `false`.

## See Also

### Creating JSON Data

- [dataWithJSONObject:options:error:](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject:toStream:options:error:](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [NSJSONWritingOptions](writingoptions.md): Options for writing JSON data.
