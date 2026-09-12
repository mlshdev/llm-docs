> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(jsvalueref:in:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(jsvalueref:in:))

# init(jsValueRef:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init!(jsValueRef value: JSValueRef!, in context: JSContext!)
```

<a id="return-value"></a>

## Return Value

The Objective-C API equivalent of the specified JSValueRef.

<a id="discussion"></a>

## Discussion

Creates a JSValue, wrapping its C API counterpart.

# valueWithJSValueRef:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (JSValue *) valueWithJSValueRef:(JSValueRef) value inContext:(JSContext *) context;
```

<a id="return-value"></a>

## Return Value

The Objective-C API equivalent of the specified JSValueRef.

<a id="discussion"></a>

## Discussion

Creates a JSValue, wrapping its C API counterpart.
