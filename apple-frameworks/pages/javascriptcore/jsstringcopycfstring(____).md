> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringcopycfstring(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsstringcopycfstring(_:_:))

# JSStringCopyCFString(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Foundation string from a JavaScript string.

## Declaration

```swift
func JSStringCopyCFString(_ alloc: CFAllocator!, _ string: JSStringRef!) -> CFString!
```

## Parameters

- `alloc`: The `alloc` parameter to pass to `CFStringCreate`.
- `string`: The [JSStringRef](jsstringref.md) to copy into the new [CFString](../corefoundation/cfstring.md).

<a id="return-value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting to and from Core Foundation Strings

- [JSStringCreateWithCFString(\_:)](jsstringcreatewithcfstring%28__%29.md): Creates a JavaScript string from a Core Foundation string.

# JSStringCopyCFString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Foundation string from a JavaScript string.

## Declaration

```objectivec
CFStringRefJSStringCopyCFString(CFAllocatorRef alloc, JSStringRef string);
```

## Parameters

- `alloc`: The `alloc` parameter to pass to `CFStringCreate`.
- `string`: The [JSStringRef](jsstringref.md) to copy into the new [CFStringRef](../corefoundation/cfstring.md).

<a id="return-value"></a>

## Return Value

A [CFStringRef](../corefoundation/cfstring.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Converting to and from Core Foundation Strings

- [JSStringCreateWithCFString](jsstringcreatewithcfstring%28__%29.md): Creates a JavaScript string from a Core Foundation string.
