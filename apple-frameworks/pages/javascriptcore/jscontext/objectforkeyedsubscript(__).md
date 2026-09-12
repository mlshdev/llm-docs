> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/objectforkeyedsubscript(_:)](https://developer.apple.com/documentation/javascriptcore/jscontext/objectforkeyedsubscript(_:))

# objectForKeyedSubscript(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.

## Declaration

```swift
func objectForKeyedSubscript(_ key: Any!) -> JSValue!
```

## Parameters

- `key`: The name of a JavaScript property in the context’s global JavaScript object.

<a id="return-value"></a>

## Return Value

The JavaScript property named by `key`, or `nil` if no such field or function exists.

<a id="Discussion"></a>

## Discussion

This method first constructs a [JSValue](../jsvalue.md) object from the `key` parameter, then uses that value in JavaScript to look up the name of a property in the context’s global object.

## See Also

### Accessing JavaScript global state with subscripts

- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.

# objectForKeyedSubscript: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.

## Declaration

```objectivec
- (JSValue *) objectForKeyedSubscript:(id) key;
```

## Parameters

- `key`: The name of a JavaScript property in the context’s global JavaScript object.

<a id="return-value"></a>

## Return Value

The JavaScript property named by `key`, or `nil` if no such field or function exists.

<a id="Discussion"></a>

## Discussion

This method first constructs a [JSValue](../jsvalue.md) object from the `key` parameter, then uses that value in JavaScript to look up the name of a property in the context’s global object.

## See Also

### Accessing JavaScript global state with subscripts

- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.
