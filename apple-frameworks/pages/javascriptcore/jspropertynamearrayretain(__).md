> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jspropertynamearrayretain(_:)](https://developer.apple.com/documentation/javascriptcore/jspropertynamearrayretain(_:))

# JSPropertyNameArrayRetain(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript property name array.

## Declaration

```swift
func JSPropertyNameArrayRetain(_ array: JSPropertyNameArrayRef!) -> JSPropertyNameArrayRef!
```

## Parameters

- `array`: The [JSPropertyNameArrayRef](jspropertynamearrayref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSPropertyNameArrayRef](jspropertynamearrayref.md) that is the same as `array`.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName(\_:\_:)](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount(\_:)](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex(\_:\_:)](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease(\_:)](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyAttribute](jspropertyattribute.md): A JavaScript property attribute.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.

# JSPropertyNameArrayRetain (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a JavaScript property name array.

## Declaration

```objectivec
JSPropertyNameArrayRefJSPropertyNameArrayRetain(JSPropertyNameArrayRef array);
```

## Parameters

- `array`: The [JSPropertyNameArrayRef](jspropertynamearrayref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSPropertyNameArrayRef](jspropertynamearrayref.md) that is the same as `array`.

## See Also

### Working with Properties

- [JSPropertyNameAccumulatorAddName](jspropertynameaccumulatoraddname%28____%29.md): Adds a property name to a JavaScript property name accumulator.
- [JSPropertyNameArrayGetCount](jspropertynamearraygetcount%28__%29.md): Gets a count of the number of items in a JavaScript property name array.
- [JSPropertyNameArrayGetNameAtIndex](jspropertynamearraygetnameatindex%28____%29.md): Gets a property name at a specified index in a JavaScript property name array.
- [JSPropertyNameArrayRelease](jspropertynamearrayrelease%28__%29.md): Releases a JavaScript property name array.
- [JSPropertyAttributes](jspropertyattributes.md): A set of JavaScript property attributes.
- [JSPropertyNameArrayRef](jspropertynamearrayref.md): An array of JavaScript property names.
- [JSPropertyNameAccumulatorRef](jspropertynameaccumulatorref.md): An ordered set of the names of a JavaScript object’s properties.
