> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_property_attribute_t](https://developer.apple.com/documentation/objectivec/objc_property_attribute_t)

# objc_property_attribute_t (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a property attribute.

## Declaration

```swift
struct objc_property_attribute_t
```

## Topics

### Initializers

- [init(name:value:)](objc_property_attribute_t/init%28name_value_%29.md)

### Instance Properties

- [name](objc_property_attribute_t/name.md): The name of the attribute.
- [value](objc_property_attribute_t/value.md): The value of the attribute (usually empty).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Class-Definition Data Structures

- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.

# objc_property_attribute_t (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a property attribute.

## Declaration

```objectivec
typedef struct { ... } objc_property_attribute_t;
```

## Topics

### Instance Properties

- [name](objc_property_attribute_t/name.md): The name of the attribute.
- [value](objc_property_attribute_t/value.md): The value of the attribute (usually empty).

## See Also

### Class-Definition Data Structures

- [Class](class.md): An opaque type that represents an Objective-C class.
- [Method](method.md): An opaque type that represents a method in a class definition.
- [Ivar](ivar.md): An opaque type that represents an instance variable.
- [Category](category.md): An opaque type that represents a category.
- [objc_property_t](objc_property_t.md): An opaque type that represents an Objective-C declared property.
- [IMP](imp.md): A pointer to the start of a method implementation.
- [SEL](sel.md): Defines an opaque type that represents a method selector.
- [objc_method_description](objc_method_description.md): Defines an Objective-C method.
- [objc_cache](objc_cache.md): Performance optimization for method calls. Contains pointers to recently used methods.
