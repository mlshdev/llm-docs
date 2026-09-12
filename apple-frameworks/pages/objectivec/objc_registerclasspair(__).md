> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_registerclasspair(_:)](https://developer.apple.com/documentation/objectivec/objc_registerclasspair(_:))

# objc_registerClassPair(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a class that was allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).

## Declaration

```swift
func objc_registerClassPair(_ cls: AnyClass)
```

## Parameters

- `cls`: The class you want to register.

## See Also

### Adding Classes

- [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair(\_:)](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_duplicateClass(\_:\_:\_:)](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.

# objc_registerClassPair (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Registers a class that was allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).

## Declaration

```objectivec
extern void objc_registerClassPair(Class cls);
```

## Parameters

- `cls`: The class you want to register.

## See Also

### Adding Classes

- [objc_allocateClassPair](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_duplicateClass](objc_duplicateclass%28______%29.md): Used by Foundation’s Key-Value Observing.
