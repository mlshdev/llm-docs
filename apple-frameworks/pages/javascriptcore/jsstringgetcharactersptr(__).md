> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringgetcharactersptr(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringgetcharactersptr(_:))

# JSStringGetCharactersPtr(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.

## Declaration

```swift
func JSStringGetCharactersPtr(_ string: JSStringRef!) -> UnsafePointer<JSChar>!
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the backing store you want to access.

<a id="return-value"></a>

## Return Value

A pointer to the Unicode character buffer that serves as the backing store of `string`, which the system deallocates when it deallocates `string`.

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength(\_:)](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize(\_:)](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString(\_:\_:\_:)](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

# JSStringGetCharactersPtr (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.

## Declaration

```objectivec
const JSChar *JSStringGetCharactersPtr(JSStringRef string);
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the backing store you want to access.

<a id="return-value"></a>

## Return Value

A pointer to the Unicode character buffer that serves as the backing store of `string`, which the system deallocates when it deallocates `string`.

## See Also

### Accessing JavaScript String Information

- [JSStringGetLength](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.
