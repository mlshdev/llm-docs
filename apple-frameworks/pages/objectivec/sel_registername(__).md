> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/sel_registername(_:)](https://developer.apple.com/documentation/objectivec/sel_registername(_:))

# sel_registerName(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.

## Declaration

```swift
func sel_registerName(_ str: UnsafePointer<CChar>) -> Selector
```

## Parameters

- `str`: A pointer to a C string. Pass the name of the method you wish to register.

<a id="return-value"></a>

## Return Value

A pointer of type [SEL](sel.md) specifying the selector for the named method.

<a id="Discussion"></a>

## Discussion

You must register a method name with the Objective-C runtime system to obtain the method’s selector before you can add the method to a class definition. If the method name has already been registered, this function simply returns the selector.

## See Also

### Working with Selectors

- [sel_getName(\_:)](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_getUid(\_:)](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual(\_:\_:)](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.

# sel_registerName (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.

## Declaration

```objectivec
extern SELsel_registerName(const char *str);
```

## Parameters

- `str`: A pointer to a C string. Pass the name of the method you wish to register.

<a id="return-value"></a>

## Return Value

A pointer of type [SEL](sel.md) specifying the selector for the named method.

<a id="Discussion"></a>

## Discussion

You must register a method name with the Objective-C runtime system to obtain the method’s selector before you can add the method to a class definition. If the method name has already been registered, this function simply returns the selector.

## See Also

### Working with Selectors

- [sel_getName](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_getUid](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.
