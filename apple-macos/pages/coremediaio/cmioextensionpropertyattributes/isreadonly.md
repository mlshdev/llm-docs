> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertyattributes/isreadonly](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertyattributes/isreadonly)

# isReadOnly (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A Boolean value that indicates whether a property is read-only.

## Declaration

```swift
var isReadOnly: Bool { get }
```

## See Also

### Inspecting Attributes

- [minValue](minvalue.md): The minimum value a property supports.
- [maxValue](maxvalue.md): The maximum value a property supports.
- [validValues](validvalues.md): An array of discrete values that this property supports.

# readOnly (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A Boolean value that indicates whether a property is read-only.

## Declaration

```objectivec
@property (atomic, readonly, getter=isReadOnly) BOOL readOnly;
```

## See Also

### Inspecting Attributes

- [minValue](minvalue.md): The minimum value a property supports.
- [maxValue](maxvalue.md): The maximum value a property supports.
- [validValues](validvalues.md): An array of discrete values that this property supports.
