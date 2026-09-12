> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/definitionoptionkey](https://developer.apple.com/documentation/appkit/nsview/definitionoptionkey)

# NSView.DefinitionOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Keys to include in your definition.

## Declaration

```swift
struct DefinitionOptionKey
```

## Topics

### Option Key

- [presentationType](definitionoptionkey/presentationtype.md): An optional key in the options dictionary that specifies the presentation type of the definition display.

### Initializers

- [init(rawValue:)](definitionoptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying Definition Windows

- [showDefinition(for:at:)](showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [showDefinition(for:range:options:baselineOriginProvider:)](showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSView.DefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.

# NSDefinitionOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Keys to include in your definition.

## Declaration

```objectivec
typedef NSString * NSDefinitionOptionKey;
```

## Topics

### Option Key

- [NSDefinitionPresentationTypeKey](definitionoptionkey/presentationtype.md): An optional key in the options dictionary that specifies the presentation type of the definition display.

## See Also

### Displaying Definition Windows

- [showDefinitionForAttributedString:atPoint:](showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [showDefinitionForAttributedString:range:options:baselineOriginProvider:](showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSDefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.
