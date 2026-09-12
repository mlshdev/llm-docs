> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/hasproperty(_:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/hasproperty(_:))

# hasProperty(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.

## Declaration

```swift
func hasProperty(_ property: Any!) -> Bool
```

```swift
func hasProperty(_ property: String!) -> Bool
```

## Parameters

- `property`: The name of a property to query for in the JavaScript object value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the JavaScript object has a defined property by that name; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with Container Values

- [defineProperty(\_:descriptor:)](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [deleteProperty(\_:)](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [atIndex(\_:)](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue(\_:at:)](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.

# hasProperty: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.

## Declaration

```objectivec
- (BOOL) hasProperty:(JSValueProperty) property;
```

```objectivec
- (BOOL) hasProperty:(JSValueProperty) property;
```

## Parameters

- `property`: The name of a property to query for in the JavaScript object value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the JavaScript object has a defined property by that name; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with Container Values

- [defineProperty:descriptor:](defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [deleteProperty:](deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [valueAtIndex:](atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue:atIndex:](setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](../jsvalueproperty.md): A type that identifies a property of a JavaScript value.
