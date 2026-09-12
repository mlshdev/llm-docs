> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/sel_getuid(_:)](https://developer.apple.com/documentation/objectivec/sel_getuid(_:))

# sel_getUid(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a method name with the Objective-C runtime system.

## Declaration

```swift
func sel_getUid(_ str: UnsafePointer<CChar>) -> Selector
```

## Parameters

- `str`: A pointer to a C string. Pass the name of the method you wish to register.

<a id="return-value"></a>

## Return Value

A pointer of type [SEL](sel.md) specifying the selector for the named method.

<a id="Discussion"></a>

## Discussion

The implementation of this method is identical to the implementation of [sel_registerName(\_:)](sel_registername%28__%29.md).

<a id="Version-Notes"></a>

### Version-Notes

Prior to OS X version 10.0, this method tried to find the selector mapped to the given name and returned `NULL` if the selector was not found. This was changed for safety, because it was observed that many of the callers of this function did not check the return value for `NULL`.

## See Also

### Working with Selectors

- [sel_getName(\_:)](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName(\_:)](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_isEqual(\_:\_:)](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.

# sel_getUid (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a method name with the Objective-C runtime system.

## Declaration

```objectivec
extern SELsel_getUid(const char *str);
```

## Parameters

- `str`: A pointer to a C string. Pass the name of the method you wish to register.

<a id="return-value"></a>

## Return Value

A pointer of type [SEL](sel.md) specifying the selector for the named method.

<a id="Discussion"></a>

## Discussion

The implementation of this method is identical to the implementation of [sel_registerName](sel_registername%28__%29.md).

<a id="Version-Notes"></a>

### Version-Notes

Prior to OS X version 10.0, this method tried to find the selector mapped to the given name and returned `NULL` if the selector was not found. This was changed for safety, because it was observed that many of the callers of this function did not check the return value for `NULL`.

## See Also

### Working with Selectors

- [sel_getName](sel_getname%28__%29.md): Returns the name of the method specified by a given selector.
- [sel_registerName](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_isEqual](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.
