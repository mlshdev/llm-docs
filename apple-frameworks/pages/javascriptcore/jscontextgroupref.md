> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jscontextgroupref

# JSContextGroupRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A group that associates JavaScript contexts with one another.

## Declaration

```swift
typealias JSContextGroupRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

Contexts in the same group may share and exchange JavaScript objects.

## Topics

### Accessing the Content Group

- [JSContextGetGroup(\_:)](jscontextgetgroup%28__%29.md): Gets the context group that a JavaScript execution context belongs to.

## See Also

### JavaScriptCore Engine Interface

- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.

# JSContextGroupRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A group that associates JavaScript contexts with one another.

## Declaration

```objectivec
typedef const struct OpaqueJSContextGroup * JSContextGroupRef;
```

<a id="Discussion"></a>

## Discussion

Contexts in the same group may share and exchange JavaScript objects.

## Topics

### Accessing the Content Group

- [JSContextGetGroup](jscontextgetgroup%28__%29.md): Gets the context group that a JavaScript execution context belongs to.

## See Also

### JavaScriptCore Engine Interface

- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.
