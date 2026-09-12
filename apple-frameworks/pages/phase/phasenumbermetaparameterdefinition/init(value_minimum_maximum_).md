> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumbermetaparameterdefinition/init(value:minimum:maximum:)](https://developer.apple.com/documentation/phase/phasenumbermetaparameterdefinition/init(value:minimum:maximum:))

# init(value:minimum:maximum:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a metaparameter with the given numeric value and range.

## Declaration

```swift
init(value: Double, minimum: Double, maximum: Double)
```

## Parameters

- `value`: A default value for the metaparameter specification.
- `minimum`: The lowest possible number for the value.
- `maximum`: The highest possible number for the value.

## See Also

### Creating a Metaparameter Definition

- [init(value:)](init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [init(value:identifier:)](init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [init(value:minimum:maximum:identifier:)](init%28value_minimum_maximum_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value and range.

# initWithValue:minimum:maximum: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a metaparameter with the given numeric value and range.

## Declaration

```objectivec
- (instancetype) initWithValue:(double) value minimum:(double) minimum maximum:(double) maximum;
```

## Parameters

- `value`: A default value for the metaparameter specification.
- `minimum`: The lowest possible number for the value.
- `maximum`: The highest possible number for the value.

## See Also

### Creating a Metaparameter Definition

- [initWithValue:](init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [initWithValue:identifier:](init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [initWithValue:minimum:maximum:identifier:](init%28value_minimum_maximum_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value and range.
