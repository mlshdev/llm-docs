> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumbermetaparameterdefinition/init(value:minimum:maximum:identifier:)](https://developer.apple.com/documentation/phase/phasenumbermetaparameterdefinition/init(value:minimum:maximum:identifier:))

# init(value:minimum:maximum:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named metaparameter with the given numeric value and range.

## Declaration

```swift
convenience init(value: Double, minimum: Double, maximum: Double, identifier: String)
```

## Parameters

- `value`: A default value for the metaparameter specification.
- `minimum`: The lowest possible number for the value.
- `maximum`: The highest possible number for the value.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Metaparameter Definition

- [init(value:)](init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [init(value:identifier:)](init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [init(value:minimum:maximum:)](init%28value_minimum_maximum_%29.md): Creates a specification for a metaparameter with the given numeric value and range.

# initWithValue:minimum:maximum:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named metaparameter with the given numeric value and range.

## Declaration

```objectivec
- (instancetype) initWithValue:(double) value minimum:(double) minimum maximum:(double) maximum identifier:(NSString *) identifier;
```

## Parameters

- `value`: A default value for the metaparameter specification.
- `minimum`: The lowest possible number for the value.
- `maximum`: The highest possible number for the value.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Metaparameter Definition

- [initWithValue:](init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [initWithValue:identifier:](init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [initWithValue:minimum:maximum:](init%28value_minimum_maximum_%29.md): Creates a specification for a metaparameter with the given numeric value and range.
