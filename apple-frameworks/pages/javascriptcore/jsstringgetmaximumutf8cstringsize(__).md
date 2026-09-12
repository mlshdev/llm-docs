> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringgetmaximumutf8cstringsize(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringgetmaximumutf8cstringsize(_:))

# JSStringGetMaximumUTF8CStringSize(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.

## Declaration

```swift
func JSStringGetMaximumUTF8CStringSize(_ string: JSStringRef!) -> Int
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the maximum converted size (in bytes) you want to know.

<a id="return-value"></a>

## Return Value

The maximum number of bytes that might be necessary to convert `string` into a null-terminated UTF-8 string. The number of bytes that the conversion actually ends up requiring can be less than this, but never more.

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength(\_:)](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr(\_:)](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetUTF8CString(\_:\_:\_:)](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

# JSStringGetMaximumUTF8CStringSize (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.

## Declaration

```objectivec
size_t JSStringGetMaximumUTF8CStringSize(JSStringRef string);
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the maximum converted size (in bytes) you want to know.

<a id="return-value"></a>

## Return Value

The maximum number of bytes that might be necessary to convert `string` into a null-terminated UTF-8 string. The number of bytes that the conversion actually ends up requiring can be less than this, but never more.

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetUTF8CString](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.
