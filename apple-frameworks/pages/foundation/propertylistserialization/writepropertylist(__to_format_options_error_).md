> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/writepropertylist(_:to:format:options:error:)](https://developer.apple.com/documentation/foundation/propertylistserialization/writepropertylist(_:to:format:options:error:))

# writePropertyList(\_:to:format:options:error:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes a property list to the specified stream.

## Declaration

```swift
class func writePropertyList(_ plist: Any, to stream: OutputStream, format: PropertyListSerialization.PropertyListFormat, options opt: PropertyListSerialization.WriteOptions, error: NSErrorPointer) -> Int
```

## Parameters

- `plist`: The property list that you want to write out.
- `stream`: An [OutputStream](../outputstream.md) instance that is open and ready to receive the property list data.
- `format`: One of the property list formats defined in [PropertyListSerialization.PropertyListFormat](propertylistformat.md).
- `opt`: Currently unused. Set to `0`.
- `error`: A pointer that the function may set to an [NSError](../nserror.md) object when an error occurs to provide additional information about the error.

<a id="return-value"></a>

## Return Value

The number of bytes written to the stream. A return value of `0` indicates that an error occurred.

## See Also

### Serializing a Property List

- [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.
- [PropertyListSerialization.WriteOptions](writeoptions.md)

# writePropertyList:toStream:format:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes a property list to the specified stream.

## Declaration

```objectivec
+ (NSInteger) writePropertyList:(id) plist toStream:(NSOutputStream *) stream format:(NSPropertyListFormat) format options:(NSPropertyListWriteOptions) opt error:(NSError **) error;
```

## Parameters

- `plist`: The property list that you want to write out.
- `stream`: An [NSOutputStream](../outputstream.md) instance that is open and ready to receive the property list data.
- `format`: One of the property list formats defined in [NSPropertyListFormat](propertylistformat.md).
- `opt`: Currently unused. Set to `0`.
- `error`: A pointer that the function may set to an [NSError](../nserror.md) object when an error occurs to provide additional information about the error.

<a id="return-value"></a>

## Return Value

The number of bytes written to the stream. A return value of `0` indicates that an error occurred.

## See Also

### Serializing a Property List

- [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.
- [NSPropertyListWriteOptions](writeoptions.md)
