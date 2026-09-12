> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/atindex(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/atindex(_:))

# atIndex(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value at the specified numeric index in the JavaScript object value.

## Declaration

```swift
func atIndex(_ index: Int) -> JSValue!
```

## Parameters

- `index`: An index in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value at the specified index, or the JavaScript `undefined` value if no property exists at that index.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the subscript operator with a numeric subscript in JavaScript. Use it to access elements of JavaScript arrays or of objects with numerically-indexed properties.

## Topics

### Related Documentation

- [objectAtIndexedSubscript(\_:)](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.

## See Also

### Working with Container Values

- [defineProperty(\_:descriptor:)](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty(\_:)](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty(\_:)](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [setValue(\_:at:)](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.

# valueAtIndex: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the value at the specified numeric index in the JavaScript object value.

## Declaration

```objectivec
- (JSValue *) valueAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index in the JavaScript object.

<a id="return-value"></a>

## Return Value

The value at the specified index, or the JavaScript `undefined` value if no property exists at that index.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the subscript operator with a numeric subscript in JavaScript. Use it to access elements of JavaScript arrays or of objects with numerically-indexed properties.

## Topics

### Related Documentation

- [objectAtIndexedSubscript:](objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.

## See Also

### Working with Container Values

- [defineProperty:descriptor:](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty:](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty:](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [setValue:atIndex:](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.
