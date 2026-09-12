> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueproperty](https://developer.apple.com/documentation/javascriptcore/jsvalueproperty)

# JSValueProperty (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A type that identifies a property of a JavaScript value.

## Declaration

```swift
typealias JSValueProperty = AnyObject
```

```swift
typealias JSValueProperty = NSString
```

## See Also

### Working with Container Values

- [defineProperty(\_:descriptor:)](jsvalue/defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty(\_:)](jsvalue/hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty(\_:)](jsvalue/deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [atIndex(\_:)](jsvalue/atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue(\_:at:)](jsvalue/setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](jsvalue/forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue(\_:forProperty:)](jsvalue/setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.

# JSValueProperty (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A type that identifies a property of a JavaScript value.

## Declaration

```objectivec
typedef id JSValueProperty;
```

```objectivec
typedef NSString * JSValueProperty;
```

## See Also

### Working with Container Values

- [defineProperty:descriptor:](jsvalue/defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty:](jsvalue/hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty:](jsvalue/deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [valueAtIndex:](jsvalue/atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue:atIndex:](jsvalue/setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](jsvalue/forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue:forProperty:](jsvalue/setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
