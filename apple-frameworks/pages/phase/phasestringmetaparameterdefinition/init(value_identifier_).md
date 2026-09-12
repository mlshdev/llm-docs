> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasestringmetaparameterdefinition/init(value:identifier:)](https://developer.apple.com/documentation/phase/phasestringmetaparameterdefinition/init(value:identifier:))

# init(value:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named textual metaparameter with the given value.

## Declaration

```swift
convenience init(value: String, identifier: String)
```

## Parameters

- `value`: The default text for the metaparameter specification.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Parameter Definition

- [init(value:)](init%28value_%29.md): Creates a specification for a textual metaparameter with the given value.

# initWithValue:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a specification for a named textual metaparameter with the given value.

## Declaration

```objectivec
- (instancetype) initWithValue:(NSString *) value identifier:(NSString *) identifier;
```

## Parameters

- `value`: The default text for the metaparameter specification.
- `identifier`: A unique name for the metaparameter specification.

## See Also

### Creating a Parameter Definition

- [initWithValue:](init%28value_%29.md): Creates a specification for a textual metaparameter with the given value.
