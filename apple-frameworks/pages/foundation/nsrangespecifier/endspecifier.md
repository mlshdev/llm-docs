> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsrangespecifier/endspecifier

# endSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object specifier representing the last object of the range to a given object.

## Declaration

```swift
var endSpecifier: NSScriptObjectSpecifier? { get set }
```

## Parameters

- `endSpec`: The object specifier representing the last object of the range.

## See Also

### Accessing a range specifier

- [startSpecifier](startspecifier.md): Returns the object specifier representing the first object of the range.

# endSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object specifier representing the last object of the range to a given object.

## Declaration

```objectivec
@property (retain, nullable) NSScriptObjectSpecifier * endSpecifier;
```

## Parameters

- `endSpec`: The object specifier representing the last object of the range.

## See Also

### Accessing a range specifier

- [startSpecifier](startspecifier.md): Returns the object specifier representing the first object of the range.
