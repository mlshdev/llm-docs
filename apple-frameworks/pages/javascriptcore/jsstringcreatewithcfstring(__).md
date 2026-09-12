> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsstringcreatewithcfstring(_:)](https://developer.apple.com/documentation/javascriptcore/jsstringcreatewithcfstring(_:))

# JSStringCreateWithCFString(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a Core Foundation string.

## Declaration

```swift
func JSStringCreateWithCFString(_ string: CFString!) -> JSStringRef!
```

## Parameters

- `string`: The [CFString](../corefoundation/cfstring.md) to copy into the new [JSStringRef](jsstringref.md).

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The system optimizes this function to take advantage of cases when [CFStringGetCharactersPtr(\_:)](../corefoundation/cfstringgetcharactersptr%28__%29.md) returns a valid pointer.

## See Also

### Converting to and from Core Foundation Strings

- [JSStringCopyCFString(\_:\_:)](jsstringcopycfstring%28____%29.md): Creates a Core Foundation string from a JavaScript string.

# JSStringCreateWithCFString (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript string from a Core Foundation string.

## Declaration

```objectivec
JSStringRefJSStringCreateWithCFString(CFStringRef string);
```

## Parameters

- `string`: The [CFStringRef](../corefoundation/cfstring.md) to copy into the new [JSStringRef](jsstringref.md).

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains `string`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The system optimizes this function to take advantage of cases when [CFStringGetCharactersPtr](../corefoundation/cfstringgetcharactersptr%28__%29.md) returns a valid pointer.

## See Also

### Converting to and from Core Foundation Strings

- [JSStringCopyCFString](jsstringcopycfstring%28____%29.md): Creates a Core Foundation string from a JavaScript string.
