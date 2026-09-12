> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringrelease(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringrelease(_:))

# JSStringRelease(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript string.

## Declaration

```swift
func JSStringRelease(_ string: JSStringRef!)
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) to release.

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters(\_:\_:)](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString(\_:)](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain(\_:)](jsstringretain%28__%29.md): Retains a JavaScript string.

# JSStringRelease (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript string.

## Declaration

```objectivec
void JSStringRelease(JSStringRef string);
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) to release.

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain](jsstringretain%28__%29.md): Retains a JavaScript string.
