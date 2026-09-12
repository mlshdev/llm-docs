> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/setvalue(_:forproperty:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/setvalue(_:forproperty:))

# setValue(\_:forProperty:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of the named property in the JavaScript object value.

## Declaration

```swift
func setValue(_ value: Any!, forProperty property: Any!)
```

```swift
func setValue(_ value: Any!, forProperty property: String!)
```

## Parameters

- `value`: The value to set for the named property.
- `property`: The name of a property in the JavaScript object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the subscript operator with a string subscript in JavaScript. Use it to set or create fields or properties in JavaScript objects.

## Topics

### Related Documentation

- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

## See Also

### Working with Container Values

- [defineProperty(\_:descriptor:)](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty(\_:)](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty(\_:)](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [atIndex(\_:)](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue(\_:at:)](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.

# setValue:forProperty: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of the named property in the JavaScript object value.

## Declaration

```objectivec
- (void) setValue:(id) value forProperty:(JSValueProperty) property;
```

```objectivec
- (void) setValue:(id) value forProperty:(JSValueProperty) property;
```

## Parameters

- `value`: The value to set for the named property.
- `property`: The name of a property in the JavaScript object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the subscript operator with a string subscript in JavaScript. Use it to set or create fields or properties in JavaScript objects.

## Topics

### Related Documentation

- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

## See Also

### Working with Container Values

- [defineProperty:descriptor:](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty:](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty:](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [valueAtIndex:](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue:atIndex:](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.
