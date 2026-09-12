> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jspropertynamearrayrelease(_:)](https://developer.apple.com/documentation/javascriptcore/jspropertynamearrayrelease(_:))

# JSPropertyNameArrayRelease(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript property name array.

## Declaration

```swift
func JSPropertyNameArrayRelease(_ array: JSPropertyNameArrayRef!)
```

## Parameters

- `array`: The [JSPropertyNameArrayRef](jspropertynamearrayref.md) to release.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName(\_:\_:)](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount(\_:)](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex(\_:\_:)](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRetain(\_:)](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyAttribute](jspropertyattribute.md): A JavaScript property attribute.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

# JSPropertyNameArrayRelease (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a JavaScript property name array.

## Declaration

```objectivec
void JSPropertyNameArrayRelease(JSPropertyNameArrayRef array);
```

## Parameters

- `array`: The [JSPropertyNameArrayRef](jspropertynamearrayref.md) to release.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRetain](jspropertynamearrayretain%28__%29.md): Retains a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.
