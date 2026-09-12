> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_constructinstance](https://developer.apple.com/documentation/objectivec/objc_constructinstance)

# objc_constructInstance

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an instance of a class at the specified location.

## Declaration

```objectivec
extern idobjc_constructInstance(Class cls, void *bytes);
```

## Parameters

- `cls`: The class that you want to allocate an instance of.
- `bytes`: The location at which to allocate an instance of the `cls` class. `bytes` must point to at least `class_getInstanceSize(cls)` bytes of well-aligned, zero-filled memory.

<a id="return-value"></a>

## Return Value

An instance of the class `cls` at `bytes`, if successful; otherwise `nil` (for example, if `cls` or `bytes` are themselves `nil`).

## See Also

### Instantiating Classes

- [class_createInstance](class_createinstance%28____%29.md): Creates an instance of a class, allocating memory for the class in the default malloc memory zone.
- [objc_destructInstance](objc_destructinstance.md): Destroys an instance of a class without freeing memory and removes any of its associated references.
