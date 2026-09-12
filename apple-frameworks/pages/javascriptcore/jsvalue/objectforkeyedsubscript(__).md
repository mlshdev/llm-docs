> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/objectforkeyedsubscript(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/objectforkeyedsubscript(_:))

# objectForKeyedSubscript(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.

## Declaration

```swift
func objectForKeyedSubscript(_ key: Any!) -> JSValue!
```

## Parameters

- `key`: The name of a property in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value of the named property, or the JavaScript `undefined` value if no property exists by that name.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [forProperty(\_:)](forproperty%28__%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript(\_:)](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject(\_:atIndexedSubscript:)](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

# objectForKeyedSubscript: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.

## Declaration

```objectivec
- (JSValue *) objectForKeyedSubscript:(id) key;
```

## Parameters

- `key`: The name of a property in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value of the named property, or the JavaScript `undefined` value if no property exists by that name.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [valueForProperty:](forproperty%28__%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript:](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject:atIndexedSubscript:](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.
