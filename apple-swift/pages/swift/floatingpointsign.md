> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpointsign](https://developer.apple.com/documentation/swift/floatingpointsign)

# FloatingPointSign

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sign of a floating-point value.

## Declaration

```swift
@frozen enum FloatingPointSign
```

## Topics

### Operators

- [==(\_:\_:)](floatingpointsign/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Enumeration Cases

- [FloatingPointSign.minus](floatingpointsign/minus.md): The sign for a negative value.
- [FloatingPointSign.plus](floatingpointsign/plus.md): The sign for a positive value.

### Initializers

- [init(rawValue:)](floatingpointsign/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [hashValue](floatingpointsign/hashvalue.md): The hash value.
- [rawValue](floatingpointsign/rawvalue-swift.property.md): The corresponding value of the raw type.

### Instance Methods

- [hash(into:)](floatingpointsign/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Type Aliases

- [FloatingPointSign.RawValue](floatingpointsign/rawvalue-swift.typealias.md): The raw type that can be used to represent all values of the conforming type.

### Default Implementations

- [Equatable Implementations](floatingpointsign/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [RawRepresentable](rawrepresentable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Floating-Point Characteristics

- [FloatingPointClassification](floatingpointclassification.md): The IEEE 754 floating-point classes.
- [FloatingPointRoundingRule](floatingpointroundingrule.md): A rule for rounding a floating-point number.
