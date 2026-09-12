> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertyattributes/validvalues](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertyattributes/validvalues)

# validValues (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of discrete values that this property supports.

## Declaration

```swift
var validValues: [ObjectType]? { get }
```

## See Also

### Inspecting Attributes

- [isReadOnly](isreadonly.md): A Boolean value that indicates whether a property is read-only.
- [minValue](minvalue.md): The minimum value a property supports.
- [maxValue](maxvalue.md): The maximum value a property supports.

# validValues (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of discrete values that this property supports.

## Declaration

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<id> * validValues;
```

## See Also

### Inspecting Attributes

- [readOnly](isreadonly.md): A Boolean value that indicates whether a property is read-only.
- [minValue](minvalue.md): The minimum value a property supports.
- [maxValue](maxvalue.md): The maximum value a property supports.
