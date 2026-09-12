> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/class_createinstance(_:_:)](https://developer.apple.com/documentation/objectivec/class_createinstance(_:_:))

# class_createInstance(\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an instance of a class, allocating memory for the class in the default malloc memory zone.

## Declaration

```swift
func class_createInstance(_ cls: AnyClass?, _ extraBytes: Int) -> Any?
```

## Parameters

- `cls`: The class that you want to allocate an instance of.
- `extraBytes`: An integer indicating the number of extra bytes to allocate. The additional bytes can be used to store additional instance variables beyond those defined in the class definition.

<a id="return-value"></a>

## Return Value

An instance of the class `cls`.

# class_createInstance (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an instance of a class, allocating memory for the class in the default malloc memory zone.

## Declaration

```objectivec
extern idclass_createInstance(Class cls, size_t extraBytes);
```

## Parameters

- `cls`: The class that you want to allocate an instance of.
- `extraBytes`: An integer indicating the number of extra bytes to allocate. The additional bytes can be used to store additional instance variables beyond those defined in the class definition.

<a id="return-value"></a>

## Return Value

An instance of the class `cls`.

## See Also

### Related Documentation

- [objc_constructInstance](objc_constructinstance.md): Creates an instance of a class at the specified location.

### Instantiating Classes

- [objc_constructInstance](objc_constructinstance.md): Creates an instance of a class at the specified location.
- [objc_destructInstance](objc_destructinstance.md): Destroys an instance of a class without freeing memory and removes any of its associated references.
