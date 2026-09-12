> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurldestroyresource(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurldestroyresource(_:_:))

# CFURLDestroyResource(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Destroys a resource indicated by a given URL.

> Use CFURLGetFileSystemRepresentation and removefile(3) instead.

## Declaration

```swift
func CFURLDestroyResource(_ url: CFURL!, _ errorCode: UnsafeMutablePointer<Int32>!) -> Bool
```

## Parameters

- `url`: The `CFURL` object of the resource to destroy.
- `errorCode`: On return, `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `url` uses an http scheme, an http `DELETE` request is sent to the resource. If `url` uses a file scheme, then:

- if the reference is a file, the file is deleted;
- if the reference is a directory and the directory is empty, the directory is deleted;
- if the reference is a directory and the directory is not empty, the function returns `false` and `errorCode` contains `kCFURLUnknownError`.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource(\_:\_:\_:\_:)](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.

# CFURLDestroyResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Destroys a resource indicated by a given URL.

> Use CFURLGetFileSystemRepresentation and removefile(3) instead.

## Declaration

```objectivec
extern Boolean CFURLDestroyResource(CFURLRef url, SInt32 *errorCode);
```

## Parameters

- `url`: The `CFURL` object of the resource to destroy.
- `errorCode`: On return, `0` if successful, otherwise an error code indicating the nature of the problem. See [CFURLError](cfurlerror.md) for a list of possible error codes.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `url` uses an http scheme, an http `DELETE` request is sent to the resource. If `url` uses a file scheme, then:

- if the reference is a file, the file is deleted;
- if the reference is a directory and the directory is empty, the directory is deleted;
- if the reference is a directory and the directory is not empty, the function returns `false` and `errorCode` contains `kCFURLUnknownError`.

## See Also

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLWriteDataAndPropertiesToResource](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.
