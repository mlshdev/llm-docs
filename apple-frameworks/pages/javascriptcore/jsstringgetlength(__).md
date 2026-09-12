> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringgetlength(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringgetlength(_:))

# JSStringGetLength(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of Unicode characters in a JavaScript string.

## Declaration

```swift
func JSStringGetLength(_ string: JSStringRef!) -> Int
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the length (in Unicode characters) you want to know.

<a id="return-value"></a>

## Return Value

The number of Unicode characters in `string`.

## See Also

### Accessing JavaScript String Information

- [JSStringGetCharactersPtr(\_:)](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize(\_:)](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString(\_:\_:\_:)](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

# JSStringGetLength (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of Unicode characters in a JavaScript string.

## Declaration

```objectivec
size_t JSStringGetLength(JSStringRef string);
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) with the length (in Unicode characters) you want to know.

<a id="return-value"></a>

## Return Value

The number of Unicode characters in `string`.

## See Also

### Accessing JavaScript String Information

- [JSStringGetCharactersPtr](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.
