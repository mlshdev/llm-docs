> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/init(jsglobalcontextref:)-1hstm](https://developer.apple.com/documentation/javascriptcore/jscontext/init(jsglobalcontextref:)-1hstm)

# init(jsGlobalContextRef:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init!(jsGlobalContextRef: JSGlobalContextRef!)
```

<a id="return-value"></a>

## Return Value

The JSContext equivalent of the provided JSGlobalContextRef.

<a id="discussion"></a>

## Discussion

Create a JSContext, wrapping its C API counterpart.

# contextWithJSGlobalContextRef: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (JSContext *) contextWithJSGlobalContextRef:(JSGlobalContextRef) jsGlobalContextRef;
```

<a id="return-value"></a>

## Return Value

The JSContext equivalent of the provided JSGlobalContextRef.

<a id="discussion"></a>

## Discussion

Create a JSContext, wrapping its C API counterpart.
