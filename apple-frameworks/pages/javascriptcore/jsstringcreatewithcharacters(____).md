> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringcreatewithcharacters(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsstringcreatewithcharacters(_:_:))

# JSStringCreateWithCharacters(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a buffer of Unicode characters.

## Declaration

```swift
func JSStringCreateWithCharacters(_ chars: UnsafePointer<JSChar>!, _ numChars: Int) -> JSStringRef!
```

## Parameters

- `chars`: The buffer of Unicode characters to copy into the new [JSStringRef](jsstringref.md).
- `numChars`: The number of characters to copy from the buffer that `chars` points to.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `chars`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a JavaScript String

- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString(\_:)](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain(\_:)](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease(\_:)](jsstringrelease%28__%29.md): Releases a JavaScript string.

# JSStringCreateWithCharacters (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a buffer of Unicode characters.

## Declaration

```objectivec
JSStringRefJSStringCreateWithCharacters(const JSChar *chars, size_t numChars);
```

## Parameters

- `chars`: The buffer of Unicode characters to copy into the new [JSStringRef](jsstringref.md).
- `numChars`: The number of characters to copy from the buffer that `chars` points to.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `chars`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a JavaScript String

- [JSChar](jschar.md): A Unicode character.
- [JSStringCreateWithUTF8CString](jsstringcreatewithutf8cstring%28__%29.md): Creates a JavaScript string from a null-terminated UTF-8 string.
- [JSStringRetain](jsstringretain%28__%29.md): Retains a JavaScript string.
- [JSStringRelease](jsstringrelease%28__%29.md): Releases a JavaScript string.
