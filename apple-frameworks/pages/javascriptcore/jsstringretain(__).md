> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringretain(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringretain(_:))

# JSStringRetain(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript string.

## Declaration

```swift
func JSStringRetain(_ string: JSStringRef!) -> JSStringRef!
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that is the same as `string`.

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters(\_:\_:)](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString(\_:)](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRelease(\_:)](jsstringrelease%28__%29.md): Releases a JavaScript string.

# JSStringRetain (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript string.

## Declaration

```objectivec
JSStringRefJSStringRetain(JSStringRef string);
```

## Parameters

- `string`: The [JSStringRef](jsstringref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that is the same as `string`.

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRelease](jsstringrelease%28__%29.md): Releases a JavaScript string.
