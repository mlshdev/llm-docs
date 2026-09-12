> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/datafrompropertylist(_:format:errordescription:)](https://developer.apple.com/documentation/foundation/propertylistserialization/datafrompropertylist(_:format:errordescription:))

# dataFromPropertyList(\_:format:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This method is obsolete and will be deprecated soon.

> Use [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md) instead.

## Declaration

```swift
class func dataFromPropertyList(_ plist: Any, format: PropertyListSerialization.PropertyListFormat, errorDescription errorString: UnsafeMutablePointer<NSString?>?) -> Data?
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [PropertyListSerialization.PropertyListFormat](propertylistformat.md).
- `errorString`: Upon return, if the conversion is successful, `errorString` is `nil`. If the conversion fails, upon return contains a string describing the nature of the error.

<a id="return-value"></a>

## Return Value

An `NSData` object containing `plist` in the format specified by `format`.

<a id="Discussion"></a>

## Discussion

This method is obsolete and will be deprecated soon. Use [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md) instead.

## See Also

### Related Documentation

- [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.

### Obsolete Methods

- [propertyListFromData(\_:mutabilityOption:format:errorDescription:)](propertylistfromdata%28__mutabilityoption_format_errordescription_%29.md): Deprecated. This method is deprecated. Use [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md) instead.

# dataFromPropertyList:format:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This method is obsolete and will be deprecated soon.

> Use [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md) instead.

## Declaration

```objectivec
+ (NSData *) dataFromPropertyList:(id) plist format:(NSPropertyListFormat) format errorDescription:(NSString **) errorString;
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [NSPropertyListFormat](propertylistformat.md).
- `errorString`: Upon return, if the conversion is successful, `errorString` is `nil`. If the conversion fails, upon return contains a string describing the nature of the error.

<a id="return-value"></a>

## Return Value

An `NSData` object containing `plist` in the format specified by `format`.

<a id="Discussion"></a>

## Discussion

This method is obsolete and will be deprecated soon. Use [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md) instead.

## See Also

### Related Documentation

- [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md): Returns an `NSData` object containing a given property list in a specified format.

### Obsolete Methods

- [propertyListFromData:mutabilityOption:format:errorDescription:](propertylistfromdata%28__mutabilityoption_format_errordescription_%29.md): Deprecated. This method is deprecated. Use [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md) instead.
