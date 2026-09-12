> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/definitionpresentationtype](https://developer.apple.com/documentation/appkit/nsview/definitionpresentationtype)

# NSView.DefinitionPresentationType (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Presentation options for the window.

## Declaration

```swift
struct DefinitionPresentationType
```

## Topics

### Presentation Values

- [dictionaryApplication](definitionpresentationtype/dictionaryapplication.md): A possible value of the [presentationType](definitionoptionkey/presentationtype.md) dictionary key that invokes Dictionary application to display the definition.
- [overlay](definitionpresentationtype/overlay.md): A possible value of the [presentationType](definitionoptionkey/presentationtype.md) dictionary key that produces a small overlay window at the string location,

### Initializers

- [init(rawValue:)](definitionpresentationtype/init%28rawvalue_%29.md)

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
- [NSView.DefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.

# NSDefinitionPresentationType (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Presentation options for the window.

## Declaration

```objectivec
typedef NSString * NSDefinitionPresentationType;
```

## Topics

### Presentation Values

- [NSDefinitionPresentationTypeDictionaryApplication](definitionpresentationtype/dictionaryapplication.md): A possible value of the [NSDefinitionPresentationTypeKey](definitionoptionkey/presentationtype.md) dictionary key that invokes Dictionary application to display the definition.
- [NSDefinitionPresentationTypeOverlay](definitionpresentationtype/overlay.md): A possible value of the [NSDefinitionPresentationTypeKey](definitionoptionkey/presentationtype.md) dictionary key that produces a small overlay window at the string location,

## See Also

### Displaying Definition Windows

- [showDefinitionForAttributedString:atPoint:](showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [showDefinitionForAttributedString:range:options:baselineOriginProvider:](showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSDefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.
