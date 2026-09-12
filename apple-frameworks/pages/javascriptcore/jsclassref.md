> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsclassref](https://developer.apple.com/documentation/javascriptcore/jsclassref)

# JSClassRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript class.

## Declaration

```swift
typealias JSClassRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Use this type with [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md) to construct objects with custom behavior.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.

# JSClassRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript class.

## Declaration

```objectivec
typedef struct OpaqueJSClass * JSClassRef;
```

<a id="Discussion"></a>

## Discussion

Use this type with [JSObjectMake](jsobjectmake%28______%29.md) to construct objects with custom behavior.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
