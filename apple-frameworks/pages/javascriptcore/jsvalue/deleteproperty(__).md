> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/deleteproperty(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/deleteproperty(_:))

# deleteProperty(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Deletes the named property from the JavaScript object value.

## Declaration

```swift
func deleteProperty(_ property: Any!) -> Bool
```

```swift
func deleteProperty(_ property: String!) -> Bool
```

## Parameters

- `property`: The name of a property in the JavaScript object value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if property deletion was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the JavaScript `delete` operator on an object (for example, `delete object.property`). After deletion, attempting to retrieve the property’s value results in the undefined value, and any descriptor information that defines the property’s behavior (see the [defineProperty(\_:descriptor:)](defineproperty%28__descriptor_%29.md) method or the JavaScript `defineProperty` function) is lost.

## See Also

### Working with Container Values

- [defineProperty(\_:descriptor:)](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty(\_:)](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [atIndex(\_:)](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue(\_:at:)](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.

# deleteProperty: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Deletes the named property from the JavaScript object value.

## Declaration

```objectivec
- (BOOL) deleteProperty:(JSValueProperty) property;
```

```objectivec
- (BOOL) deleteProperty:(JSValueProperty) property;
```

## Parameters

- `property`: The name of a property in the JavaScript object value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if property deletion was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the JavaScript `delete` operator on an object (for example, `delete object.property`). After deletion, attempting to retrieve the property’s value results in the undefined value, and any descriptor information that defines the property’s behavior (see the [defineProperty:descriptor:](defineproperty%28__descriptor_%29.md) method or the JavaScript `defineProperty` function) is lost.

## See Also

### Working with Container Values

- [defineProperty:descriptor:](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty:](hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [valueAtIndex:](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue:atIndex:](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.
