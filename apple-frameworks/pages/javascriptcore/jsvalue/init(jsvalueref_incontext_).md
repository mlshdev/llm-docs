> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(jsvalueref:incontext:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(jsvalueref:incontext:))

# init(JSValueRef:inContext:)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript value object from the equivalent C representation.

## Declaration

```swift
init!(JSValueRef value: JSValueRef!, inContext context: JSContext!)
```

## Parameters

- `value`: A C JavaScript value reference.
- `context`: The JavaScript context in which to create the value.

<a id="return-value"></a>

## Return Value

A JavaScript value object representing the same value.

<a id="Discussion"></a>

## Discussion

See `JSValueRef` for the C JavaScriptCore API.

## See Also

### Working with the C JavaScriptCore API

- [jsValueRef](jsvalueref.md): Returns the C representation of the JavaScript value.
