> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringcreatewithutf8cstring(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringcreatewithutf8cstring(_:))

# JSStringCreateWithUTF8CString(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a null-terminated UTF-8 string.

## Declaration

```swift
func JSStringCreateWithUTF8CString(_ string: UnsafePointer<CChar>!) -> JSStringRef!
```

## Parameters

- `string`: The null-terminated UTF-8 string to copy into the new [JSStringRef](jsstringref.md).

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters(\_:\_:)](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringRetain(\_:)](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease(\_:)](jsstringrelease%28__%29.md): Releases a JavaScript string.

# JSStringCreateWithUTF8CString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a null-terminated UTF-8 string.

## Declaration

```objectivec
JSStringRefJSStringCreateWithUTF8CString(const char *string);
```

## Parameters

- `string`: The null-terminated UTF-8 string to copy into the new [JSStringRef](jsstringref.md).

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a JavaScript String

- [JSStringCreateWithCharacters](jsstringcreatewithcharacters%28____%29.md): Creates a JavaScript string from a buffer of Unicode characters.
- [JSChar](jschar.md): A Unicode character.
- [JSStringRetain](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease](jsstringrelease%28__%29.md): Releases a JavaScript string.
