> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstexttab/optionkey

# NSTextTab.OptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.0+

The terminating character for a tab column.

## Declaration

```swift
struct OptionKey
```

## Topics

### Values

- [columnTerminators](optionkey/columnterminators.md): The value is an `NSCharacterSet` object.

### Initializers

- [init(rawValue:)](optionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSParagraphStyle.TextTabType](../nsparagraphstyle/texttabtype.md): Deprecated. Constants that specify the type of tab stop.

# NSTextTabOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The terminating character for a tab column.

## Declaration

```objectivec
typedef NSString * NSTextTabOptionKey;
```

## Topics

### Values

- [NSTabColumnTerminatorsAttributeName](optionkey/columnterminators.md): The value is an `NSCharacterSet` object.

## See Also

### Constants

- [NSTextTabType](../nsparagraphstyle/texttabtype.md): Deprecated. Constants that specify the type of tab stop.
