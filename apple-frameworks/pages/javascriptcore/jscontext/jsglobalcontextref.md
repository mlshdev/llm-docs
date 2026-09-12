> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/jsglobalcontextref](https://developer.apple.com/documentation/javascriptcore/jscontext/jsglobalcontextref)

# jsGlobalContextRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the C representation of the JavaScript context.

## Declaration

```swift
var jsGlobalContextRef: JSGlobalContextRef! { get }
```

<a id="Discussion"></a>

## Discussion

See `JSContextRef` for the C JavaScriptCore API.

## See Also

### Working with the C JavaScriptCore API

- [init(JSGlobalContextRef:)](init%28jsglobalcontextref_%29-9m51.md): Creates a JavaScript context object from the equivalent C representation.

# JSGlobalContextRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the C representation of the JavaScript context.

## Declaration

```objectivec
@property (readonly) JSGlobalContextRef JSGlobalContextRef;
```

<a id="Discussion"></a>

## Discussion

See `JSContextRef` for the C JavaScriptCore API.
