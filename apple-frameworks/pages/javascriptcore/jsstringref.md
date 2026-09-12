> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringref](https://developer.apple.com/documentation/javascriptcore/jsstringref)

# JSStringRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A UTF-16 character buffer.

## Declaration

```swift
typealias JSStringRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

This is the fundamental string representation in JavaScript.

## Topics

### Creating a JavaScript String

- [JSStringCreateWithCharacters(\_:\_:)](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString(\_:)](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain(\_:)](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease(\_:)](jsstringrelease%28__%29.md): Releases a JavaScript string.

### Accessing JavaScript String Information

- [JSStringGetLength(\_:)](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr(\_:)](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize(\_:)](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString(\_:\_:\_:)](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

### Comparing JavaScript Strings

- [JSStringIsEqual(\_:\_:)](jsstringisequal%28____%29.md): Tests whether two JavaScript strings match.
- [JSStringIsEqualToUTF8CString(\_:\_:)](jsstringisequaltoutf8cstring%28____%29.md): Tests whether a JavaScript string matches a null-terminated UTF-8 string.

### Converting to and from Core Foundation Strings

- [JSStringCreateWithCFString(\_:)](jsstringcreatewithcfstring%28__%29.md): Creates a JavaScript string from a Core Foundation string.
- [JSStringCopyCFString(\_:\_:)](jsstringcopycfstring%28____%29.md): Creates a Core Foundation string from a JavaScript string.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSClassRef](jsclassref.md): A JavaScript class.

# JSStringRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A UTF-16 character buffer.

## Declaration

```objectivec
typedef struct OpaqueJSString * JSStringRef;
```

<a id="Discussion"></a>

## Discussion

This is the fundamental string representation in JavaScript.

## Topics

### Creating a JavaScript String

- [JSStringCreateWithCharacters](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease](jsstringrelease%28__%29.md): Releases a JavaScript string.

### Accessing JavaScript String Information

- [JSStringGetLength](jsstringgetlength%28__%29.md): Returns the number of Unicode characters in a JavaScript string.
- [JSStringGetCharactersPtr](jsstringgetcharactersptr%28__%29.md): Returns a pointer to the Unicode character buffer that serves as the backing store for a JavaScript string.
- [JSStringGetMaximumUTF8CStringSize](jsstringgetmaximumutf8cstringsize%28__%29.md): Returns the maximum number of bytes a JavaScript string uses when you convert it into a null-terminated UTF-8 string.
- [JSStringGetUTF8CString](jsstringgetutf8cstring%28______%29.md): Converts a JavaScript string into a null-terminated UTF-8 string, and copies the result into an external byte buffer.

### Comparing JavaScript Strings

- [JSStringIsEqual](jsstringisequal%28____%29.md): Tests whether two JavaScript strings match.
- [JSStringIsEqualToUTF8CString](jsstringisequaltoutf8cstring%28____%29.md): Tests whether a JavaScript string matches a null-terminated UTF-8 string.

### Converting to and from Core Foundation Strings

- [JSStringCreateWithCFString](jsstringcreatewithcfstring%28__%29.md): Creates a JavaScript string from a Core Foundation string.
- [JSStringCopyCFString](jsstringcopycfstring%28____%29.md): Creates a Core Foundation string from a JavaScript string.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSClassRef](jsclassref.md): A JavaScript class.
