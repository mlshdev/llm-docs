> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_duplicateclass(_:_:_:)](https://developer.apple.com/documentation/objectivec/objc_duplicateclass(_:_:_:))

# objc_duplicateClass(\_:\_:\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Used by Foundation’s Key-Value Observing.

## Declaration

```swift
func objc_duplicateClass(_ original: AnyClass, _ name: UnsafePointer<CChar>, _ extraBytes: Int) -> AnyClass
```

<a id="Discussion"></a>

## Discussion

Do not call this function yourself.

## See Also

### Adding Classes

- [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair(\_:)](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair(\_:)](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair(\_:\_:\_:)](objc_allocateclasspair%28______%29.md).

# objc_duplicateClass (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Used by Foundation’s Key-Value Observing.

## Declaration

```objectivec
extern Classobjc_duplicateClass(Class original, const char *name, size_t extraBytes);
```

<a id="Discussion"></a>

## Discussion

Do not call this function yourself.

## See Also

### Adding Classes

- [objc_allocateClassPair](objc_allocateclasspair%28______%29.md): Creates a new class and metaclass.
- [objc_disposeClassPair](objc_disposeclasspair%28__%29.md): Destroys a class and its associated metaclass.
- [objc_registerClassPair](objc_registerclasspair%28__%29.md): Registers a class that was allocated using [objc_allocateClassPair](objc_allocateclasspair%28______%29.md).
