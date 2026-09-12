> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringgetutf8cstring(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsstringgetutf8cstring(_:_:_:))

# JSStringGetUTF8CString(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

## Declaration

```swift
func JSStringGetUTF8CString(_ string: JSStringRef!, _ buffer: UnsafeMutablePointer<CChar>!, _ bufferSize: Int) -> Int
```

## Parameters

- `string`: The source [JSStringRef](jsstringref.md).
- `buffer`: The destination byte buffer to copy a null-terminated UTF-8 representation of `string` into. On return, `buffer` contains a UTF-8 string representation of `string`. If `bufferSize` is too small, `buffer` contains only partial results. If `buffer` isn’t at least `bufferSize` bytes in size, the conversion results in undefined behavior.
- `bufferSize`: The size of the external buffer in bytes.

<a id="return-value"></a>

## Return Value

The number of bytes the system writes into `buffer` (including the null-terminator byte).

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength(\_:)](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr(\_:)](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize(\_:)](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.

# JSStringGetUTF8CString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

## Declaration

```objectivec
size_t JSStringGetUTF8CString(JSStringRef string, char *buffer, size_t bufferSize);
```

## Parameters

- `string`: The source [JSStringRef](jsstringref.md).
- `buffer`: The destination byte buffer to copy a null-terminated UTF-8 representation of `string` into. On return, `buffer` contains a UTF-8 string representation of `string`. If `bufferSize` is too small, `buffer` contains only partial results. If `buffer` isn’t at least `bufferSize` bytes in size, the conversion results in undefined behavior.
- `bufferSize`: The size of the external buffer in bytes.

<a id="return-value"></a>

## Return Value

The number of bytes the system writes into `buffer` (including the null-terminator byte).

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
