> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/objectatindexedsubscript(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/objectatindexedsubscript(_:))

# objectAtIndexedSubscript(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value’s JavaScript property at the specified index, allowing subscript syntax.

## Declaration

```swift
func objectAtIndexedSubscript(_ index: Int) -> JSValue!
```

## Parameters

- `index`: An index in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value at the specified index, or the JavaScript `undefined` value if no property exists at that index.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [atIndex(\_:)](atindex%28__%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [setObject(\_:atIndexedSubscript:)](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript(\_:)](objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.
- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value’s JavaScript property at the specified index, allowing subscript syntax.

## Declaration

```objectivec
- (JSValue *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: An index in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value at the specified index, or the JavaScript `undefined` value if no property exists at that index.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [valueAtIndex:](atindex%28__%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [setObject:atIndexedSubscript:](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript:](objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.
- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.
