> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsrelativespecifier/basespecifier

# baseSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the specifier for the base object.

## Declaration

```swift
var baseSpecifier: NSScriptObjectSpecifier? { get set }
```

## Parameters

- `baseSpecifier`: The specifier for the base object—the object to which the relative specifier is related.

## See Also

### Accessing a relative specifier

- [relativePosition](relativeposition-swift.property.md): Sets the relative position encapsulated by the receiver.

# baseSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the specifier for the base object.

## Declaration

```objectivec
@property (retain, nullable) NSScriptObjectSpecifier * baseSpecifier;
```

## Parameters

- `baseSpecifier`: The specifier for the base object—the object to which the relative specifier is related.

## See Also

### Accessing a relative specifier

- [relativePosition](relativeposition-swift.property.md): Sets the relative position encapsulated by the receiver.
