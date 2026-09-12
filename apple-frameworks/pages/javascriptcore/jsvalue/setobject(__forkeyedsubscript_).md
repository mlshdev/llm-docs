> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/setobject(_:forkeyedsubscript:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/setobject(_:forkeyedsubscript:))

# setObject(\_:forKeyedSubscript:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

## Declaration

```swift
func setObject(_ object: Any!, forKeyedSubscript key: Any!)
```

## Parameters

- `object`: The value to set for the named JavaScript property.
- `key`: The name of a property in the JavaScript object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript(\_:)](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject(\_:atIndexedSubscript:)](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript(\_:)](objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.

# setObject:forKeyedSubscript: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

## Declaration

```objectivec
- (void) setObject:(id) object forKeyedSubscript:(id) key;
```

## Parameters

- `object`: The value to set for the named JavaScript property.
- `key`: The name of a property in the JavaScript object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [setValue:forProperty:](setvalue%28__forproperty_%29.md) method, but provides Objective-C subscripting support.

## See Also

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript:](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject:atIndexedSubscript:](setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript:](objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.
