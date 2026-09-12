> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlwritedataandpropertiestoresource(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlwritedataandpropertiestoresource(_:_:_:_:))

# CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Writes the given data and properties to a given URL.

> For resource data, use the CFWriteStream API. For file resource properties, use CFURLSetResourcePropertiesForKeys.

## Declaration

```swift
func CFURLWriteDataAndPropertiesToResource(_ url: CFURL!, _ dataToWrite: CFData!, _ propertiesToWrite: CFDictionary!, _ errorCode: UnsafeMutablePointer<Int32>!) -> Bool
```

## Parameters

- `url`: The resource to write.
- `dataToWrite`: The data to write. Pass `NULL` to write only properties.
- `propertiesToWrite`: The properties to write. Pass `NULL` to write only data. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: Upon return, `0` if successful, otherwise contains an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Properties not present in `propertiesToWrite` are left unchanged, hence if `propertiesToWrite` is `NULL` or empty, the URL’s properties are not changed at all.

If `url` uses a file scheme and it references a file, the contents of `dataToWrite` are written to the referenced file, overwriting any preexisting data, and the file’s properties are modified according to `propertiesToWrite`. If the file does not exist, but all intermediate directories along the path do already exist, the file is created (otherwise it is not).

If `url` uses a file scheme and it references a directory (the last path character is “`/`”), the contents of `dataToWrite` are ignored, but if the parameter value is not `NULL`—and all intermediate directories along the path do already exist—a new directory is created  (otherwise it is not).

If `url` uses an http scheme, an http `PUT` request is sent to the resource with `propertiesToWrite` as the header fields and `dataToWrite` as the data.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource(\_:\_:\_:\_:)](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource(\_:\_:)](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.

# CFURLWriteDataAndPropertiesToResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Writes the given data and properties to a given URL.

> For resource data, use the CFWriteStream API. For file resource properties, use CFURLSetResourcePropertiesForKeys.

## Declaration

```objectivec
extern Boolean CFURLWriteDataAndPropertiesToResource(CFURLRef url, CFDataRef dataToWrite, CFDictionaryRef propertiesToWrite, SInt32 *errorCode);
```

## Parameters

- `url`: The resource to write.
- `dataToWrite`: The data to write. Pass `NULL` to write only properties.
- `propertiesToWrite`: The properties to write. Pass `NULL` to write only data. See [File URL Properties](file-url-properties.md) and [HTTP URL Properties](http-url-properties.md) for the list of available properties.
- `errorCode`: Upon return, `0` if successful, otherwise contains an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Properties not present in `propertiesToWrite` are left unchanged, hence if `propertiesToWrite` is `NULL` or empty, the URL’s properties are not changed at all.

If `url` uses a file scheme and it references a file, the contents of `dataToWrite` are written to the referenced file, overwriting any preexisting data, and the file’s properties are modified according to `propertiesToWrite`. If the file does not exist, but all intermediate directories along the path do already exist, the file is created (otherwise it is not).

If `url` uses a file scheme and it references a directory (the last path character is “`/`”), the contents of `dataToWrite` are ignored, but if the parameter value is not `NULL`—and all intermediate directories along the path do already exist—a new directory is created  (otherwise it is not).

If `url` uses an http scheme, an http `PUT` request is sent to the resource with `propertiesToWrite` as the header fields and `dataToWrite` as the data.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
