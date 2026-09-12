> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/propertylistfromdata(_:mutabilityoption:format:errordescription:)](https://developer.apple.com/documentation/foundation/propertylistserialization/propertylistfromdata(_:mutabilityoption:format:errordescription:))

# propertyListFromData(\_:mutabilityOption:format:errorDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This method is deprecated. Use [data(fromPropertyList:format:options:)](data%28frompropertylist_format_options_%29.md) instead.

> Use [propertyList(from:options:format:)](propertylist%28from_options_format_%29.md) instead.

## Declaration

```swift
class func propertyListFromData(_ data: Data, mutabilityOption opt: PropertyListSerialization.MutabilityOptions = [], format: UnsafeMutablePointer<PropertyListSerialization.PropertyListFormat>?, errorDescription errorString: UnsafeMutablePointer<NSString?>?) -> Any?
```

## Parameters

- `data`: A data object containing a serialized property list.
- `opt`: The options used to create the property list. For possible values, see [PropertyListSerialization.MutabilityOptions](mutabilityoptions.md).
- `format`: If the property list is valid, upon return contains the format. `format` can be `nil`, in which case the property list format is not returned. For possible values, see [PropertyListSerialization.PropertyListFormat](propertylistformat.md).
- `errorString`: Upon return, if the conversion is successful, `errorString` is `nil`. If the conversion fails, upon return contains a string describing the nature of the error.

<a id="return-value"></a>

## Return Value

A property list object corresponding to the representation in `data`. If data is not in a supported format, returns `nil`.

## See Also

### Related Documentation

- [propertyList(from:options:format:)](propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.

### Obsolete Methods

- [dataFromPropertyList(\_:format:errorDescription:)](datafrompropertylist%28__format_errordescription_%29.md): Deprecated. This method is obsolete and will be deprecated soon.

# propertyListFromData:mutabilityOption:format:errorDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This method is deprecated. Use [dataWithPropertyList:format:options:error:](data%28frompropertylist_format_options_%29.md) instead.

> Use [propertyListWithData:options:format:error:](propertylist%28from_options_format_%29.md) instead.

## Declaration

```objectivec
+ (id) propertyListFromData:(NSData *) data mutabilityOption:(NSPropertyListMutabilityOptions) opt format:(NSPropertyListFormat *) format errorDescription:(NSString **) errorString;
```

## Parameters

- `data`: A data object containing a serialized property list.
- `opt`: The options used to create the property list. For possible values, see [NSPropertyListMutabilityOptions](mutabilityoptions.md).
- `format`: If the property list is valid, upon return contains the format. `format` can be `nil`, in which case the property list format is not returned. For possible values, see [NSPropertyListFormat](propertylistformat.md).
- `errorString`: Upon return, if the conversion is successful, `errorString` is `nil`. If the conversion fails, upon return contains a string describing the nature of the error.

<a id="return-value"></a>

## Return Value

A property list object corresponding to the representation in `data`. If data is not in a supported format, returns `nil`.

## See Also

### Related Documentation

- [propertyListWithData:options:format:error:](propertylist%28from_options_format_%29.md): Creates and returns a property list from the specified data.

### Obsolete Methods

- [dataFromPropertyList:format:errorDescription:](datafrompropertylist%28__format_errordescription_%29.md): Deprecated. This method is obsolete and will be deprecated soon.
