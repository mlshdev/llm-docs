> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jspropertynamearraygetnameatindex(_:_:)](https://developer.apple.com/documentation/javascriptcore/jspropertynamearraygetnameatindex(_:_:))

# JSPropertyNameArrayGetNameAtIndex(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets a property name at a specified index in a JavaScript property name array.

## Declaration

```swift
func JSPropertyNameArrayGetNameAtIndex(_ array: JSPropertyNameArrayRef!, _ index: Int) -> JSStringRef!
```

## Parameters

- `array`: The array to retrieve the property name from.
- `index`: The index of the property name to retrieve.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains the property name.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName(\_:\_:)](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount(\_:)](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayRelease(\_:)](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain(\_:)](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyAttribute](jspropertyattribute.md): A JavaScript property attribute.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

# JSPropertyNameArrayGetNameAtIndex (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets a property name at a specified index in a JavaScript property name array.

## Declaration

```objectivec
JSStringRefJSPropertyNameArrayGetNameAtIndex(JSPropertyNameArrayRef array, size_t index);
```

## Parameters

- `array`: The array to retrieve the property name from.
- `index`: The index of the property name to retrieve.

<a id="return-value"></a>

## Return Value

A [JSStringRef](jsstringref.md) that contains the property name.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayRelease](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.
