> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlgetbytes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlgetbytes(_:_:_:))

# CFURLGetBytes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns by reference the byte representation of a URL object.

## Declaration

```swift
func CFURLGetBytes(_ url: CFURL!, _ buffer: UnsafeMutablePointer<UInt8>!, _ bufferLength: CFIndex) -> CFIndex
```

## Parameters

- `url`: The URL object to convert to a byte representation.
- `buffer`: The buffer where you want the bytes to be placed. If the buffer is of insufficient size, returns `-1` and no bytes are placed in buffer. If `NULL` the needed length is computed and returned. The returned bytes are the original bytes from which the URL was created (*not* including the base URL). If the URL was created from a string, the bytes are the bytes of the string encoded via UTF-8.
- `bufferLength`: The number of bytes in `buffer`.

<a id="return-value"></a>

## Return Value

Returns the number of bytes in `buffer` that were filled. If the buffer is of insufficient size, returns `-1`.

## See Also

### Getting URL Properties

- [CFURLGetBaseURL(\_:)](cfurlgetbaseurl%28__%29.md): Returns the base URL of a given URL if it exists.
- [CFURLGetByteRangeForComponent(\_:\_:\_:)](cfurlgetbyterangeforcomponent%28______%29.md): Returns the range of the specified component in the bytes of a URL.
- [CFURLGetTypeID()](cfurlgettypeid%28%29.md): Returns the type identifier for the `CFURL` opaque type.
- [CFURLResourceIsReachable(\_:\_:)](cfurlresourceisreachable%28____%29.md): Returns whether the resource pointed to by a file URL can be reached.

# CFURLGetBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns by reference the byte representation of a URL object.

## Declaration

```objectivec
extern CFIndex CFURLGetBytes(CFURLRef url, UInt8 *buffer, CFIndex bufferLength);
```

## Parameters

- `url`: The URL object to convert to a byte representation.
- `buffer`: The buffer where you want the bytes to be placed. If the buffer is of insufficient size, returns `-1` and no bytes are placed in buffer. If `NULL` the needed length is computed and returned. The returned bytes are the original bytes from which the URL was created (*not* including the base URL). If the URL was created from a string, the bytes are the bytes of the string encoded via UTF-8.
- `bufferLength`: The number of bytes in `buffer`.

<a id="return-value"></a>

## Return Value

Returns the number of bytes in `buffer` that were filled. If the buffer is of insufficient size, returns `-1`.

## See Also

### Getting URL Properties

- [CFURLGetBaseURL](cfurlgetbaseurl%28__%29.md): Returns the base URL of a given URL if it exists.
- [CFURLGetByteRangeForComponent](cfurlgetbyterangeforcomponent%28______%29.md): Returns the range of the specified component in the bytes of a URL.
- [CFURLGetTypeID](cfurlgettypeid%28%29.md): Returns the type identifier for the `CFURL` opaque type.
- [CFURLResourceIsReachable](cfurlresourceisreachable%28____%29.md): Returns whether the resource pointed to by a file URL can be reached.
