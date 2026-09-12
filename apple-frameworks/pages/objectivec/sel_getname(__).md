> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/sel_getname(_:)](https://developer.apple.com/documentation/objectivec/sel_getname(_:))

# sel_getName(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of the method specified by a given selector.

## Declaration

```swift
func sel_getName(_ sel: Selector) -> UnsafePointer<CChar>
```

## Parameters

- `sel`: A pointer of type [SEL](sel.md). Pass the selector whose name you wish to determine.

<a id="return-value"></a>

## Return Value

A C string indicating the name of the selector.

## See Also

### Working with Selectors

- [sel_registerName(\_:)](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid(\_:)](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual(\_:\_:)](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.

# sel_getName (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the name of the method specified by a given selector.

## Declaration

```objectivec
extern const char *sel_getName(SEL sel);
```

## Parameters

- `sel`: A pointer of type [SEL](sel.md). Pass the selector whose name you wish to determine.

<a id="return-value"></a>

## Return Value

A C string indicating the name of the selector.

## See Also

### Working with Selectors

- [sel_registerName](sel_registername%28__%29.md): Registers a method with the Objective-C runtime system, maps the method name to a selector, and returns the selector value.
- [sel_getUid](sel_getuid%28__%29.md): Registers a method name with the Objective-C runtime system.
- [sel_isEqual](sel_isequal%28____%29.md): Returns a Boolean value that indicates whether two selectors are equal.
