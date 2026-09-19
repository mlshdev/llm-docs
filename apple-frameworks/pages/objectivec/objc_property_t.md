> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/objc_property_t

# objc_property_t (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that represents an Objective-C declared property.

## Declaration

```swift
typealias objc_property_t = OpaquePointer
```

## See Also

### Class-Definition Data Structures

- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.

# objc_property_t (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that represents an Objective-C declared property.

## Declaration

```objectivec
typedef struct objc_property * objc_property_t;
```

## See Also

### Class-Definition Data Structures

- [Class](class.md): An opaque type that represents an Objective-C class.
- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [SEL](sel.md): Defines an opaque type that represents a method selector.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.
