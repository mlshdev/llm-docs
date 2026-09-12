> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jspropertynameaccumulatoraddname(_:_:)](https://developer.apple.com/documentation/javascriptcore/jspropertynameaccumulatoraddname(_:_:))

# JSPropertyNameAccumulatorAddName(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a property name to a JavaScript property name accumulator.

## Declaration

```swift
func JSPropertyNameAccumulatorAddName(_ accumulator: JSPropertyNameAccumulatorRef!, _ propertyName: JSStringRef!)
```

## Parameters

- `accumulator`: The accumulator object to add the property name to.
- `propertyName`: The property name to add.

## See Also

### Working with Properties

- [JSPropertyNameArrayGetCount(\_:)](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex(\_:\_:)](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease(\_:)](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain(\_:)](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyAttribute](jspropertyattribute.md): A JavaScript property attribute.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

# JSPropertyNameAccumulatorAddName (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a property name to a JavaScript property name accumulator.

## Declaration

```objectivec
void JSPropertyNameAccumulatorAddName(JSPropertyNameAccumulatorRef accumulator, JSStringRef propertyName);
```

## Parameters

- `accumulator`: The accumulator object to add the property name to.
- `propertyName`: The property name to add.

## See Also

### Working with Properties

- [JSPropertyNameArrayGetCount](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyNameArrayRetain](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.
