> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/method](https://developer.apple.com/documentation/objectivec/method)

# Method (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that represents a method in a class definition.

## Declaration

```swift
typealias Method = OpaquePointer
```

## Mentioned In

- [buckets](1808503-buckets.md)

## See Also

### Class-Definition Data Structures

- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.

# Method (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque type that represents a method in a class definition.

## Declaration

```objectivec
typedef struct objc_method * Method;
```

## Mentioned In

- [buckets](1808503-buckets.md)

## See Also

### Class-Definition Data Structures

- [Class](class.md): An opaque type that represents an Objective-C class.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [SEL](sel.md): Defines an opaque type that represents a method selector.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
- [objc_property_attribute_t](objc_property_attribute_t.md): Defines a property attribute.
