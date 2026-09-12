> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_allocateclasspair(_:_:_:)](https://developer.apple.com/documentation/objectivec/objc_allocateclasspair(_:_:_:))

# objc_allocateClassPair(\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new class and metaclass.

## Declaration

```swift
func objc_allocateClassPair(_ superclass: AnyClass?, _ name: UnsafePointer<CChar>, _ extraBytes: Int) -> AnyClass?
```

## Parameters

- `superclass`: The class to use as the new class’s superclass, or `Nil` to create a new root class.
- `name`: The string to use as the new class’s name. The string will be copied.
- `extraBytes`: The number of bytes to allocate for indexed ivars at the end of the class and metaclass objects. This should usually be `0`.

<a id="return-value"></a>

## Return Value

The new class, or `Nil` if the class could not be created (for example, the desired name is already in use).

<a id="Discussion"></a>

## Discussion

You can get a pointer to the new metaclass by calling `object_getClass(newClass)`.

To create a new class, start by calling [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md). Then set the class’s attributes with functions like [class_addMethod(\_:\_:\_:\_:)](class_addmethod%28________%29.md) and [class_addIvar(\_:\_:\_:\_:\_:)](class_addivar%28__________%29.md). When you are done building the class, call [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md). The new class is now ready for use.

Instance methods and instance variables should be added to the class itself. Class methods should be added to the metaclass.

## See Also

### Adding Classes

- [objc_disposeClassPair(\_:)](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass(\_:\_:\_:)](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.

# objc_allocateClassPair (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new class and metaclass.

## Declaration

```objectivec
extern Classobjc_allocateClassPair(Class superclass, const char *name, size_t extraBytes);
```

## Parameters

- `superclass`: The class to use as the new class’s superclass, or `Nil` to create a new root class.
- `name`: The string to use as the new class’s name. The string will be copied.
- `extraBytes`: The number of bytes to allocate for indexed ivars at the end of the class and metaclass objects. This should usually be `0`.

<a id="return-value"></a>

## Return Value

The new class, or `Nil` if the class could not be created (for example, the desired name is already in use).

<a id="Discussion"></a>

## Discussion

You can get a pointer to the new metaclass by calling `object_getClass(newClass)`.

To create a new class, start by calling [objc_allocateClassPair](objc_allocateclasspair%28______%29.md). Then set the class’s attributes with functions like [class_addMethod](class_addmethod%28________%29.md) and [class_addIvar](class_addivar%28__________%29.md). When you are done building the class, call [objc_registerClassPair](objc_registerclasspair%28__%29.md). The new class is now ready for use.

Instance methods and instance variables should be added to the class itself. Class methods should be added to the metaclass.

## See Also

### Adding Classes

- [objc_disposeClassPair](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.
