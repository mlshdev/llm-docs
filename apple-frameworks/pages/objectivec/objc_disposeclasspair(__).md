> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_disposeclasspair(_:)](https://developer.apple.com/documentation/objectivec/objc_disposeclasspair(_:))

# objc_disposeClassPair(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Destroys a class and its associated metaclass.

## Declaration

```swift
func objc_disposeClassPair(_ cls: AnyClass)
```

## Parameters

- `cls`: The class to be destroyed. This class must have been allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).

<a id="Discussion"></a>

## Discussion

Do not call this function if instances of the `cls` class or any subclass exist.

## See Also

### Adding Classes

- [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass(\_:\_:\_:)](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.

# objc_disposeClassPair (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Destroys a class and its associated metaclass.

## Declaration

```objectivec
extern void objc_disposeClassPair(Class cls);
```

## Parameters

- `cls`: The class to be destroyed. This class must have been allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).

<a id="Discussion"></a>

## Discussion

Do not call this function if instances of the `cls` class or any subclass exist.

## See Also

### Adding Classes

- [objc_allocateClassPair](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_registerClassPair](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).
- [objc_duplicateClass](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.
