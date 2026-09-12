> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/extraattributes](https://developer.apple.com/documentation/avfoundation/avmetadataitem/extraattributes)

# extraAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

A dictionary of additional attributes for a metadata item.

> Load the value of [extraAttributes](../avpartialasyncproperty/extraattributes.md) asynchronously instead.

## Declaration

```swift
var extraAttributes: [AVMetadataExtraAttributeKey : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

Extra attributes, when they’re present, are specific to metadata container formats and keys in their associated key-spaces. For example, a metadata item can represent the “attached picture” frame defined by the ID3 tag specification with keyspace [id3](../avmetadatakeyspace/id3.md) and key [id3MetadataKeyAttachedPicture](../avmetadatakey/id3metadatakeyattachedpicture.md), a value that carries the image data, and extra attributes that include a description of the picture as carried in the ‘APIC’ frame of the ID3 tag.

## See Also

### Accessing values

- [value](value.md): Deprecated. The value of the metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.

# extraAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A dictionary of additional attributes for a metadata item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary<NSString *,id> * extraAttributes;
```

<a id="Discussion"></a>

## Discussion

Extra attributes, when they’re present, are specific to metadata container formats and keys in their associated key-spaces. For example, a metadata item can represent the “attached picture” frame defined by the ID3 tag specification with keyspace [AVMetadataKeySpaceID3](../avmetadatakeyspace/id3.md) and key [AVMetadataID3MetadataKeyAttachedPicture](../avmetadatakey/id3metadatakeyattachedpicture.md), a value that carries the image data, and extra attributes that include a description of the picture as carried in the ‘APIC’ frame of the ID3 tag.

## See Also

### Accessing values

- [value](value.md): Deprecated. The value of the metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.
- [loadValuesAsynchronouslyForKeys:completionHandler:](loadvaluesasynchronouslyforkeys_completionhandler_.md): Tells the object to load the values of any of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](statusofvalueforkey_error_.md): Reports whether the value for a given key is immediately available without blocking.
