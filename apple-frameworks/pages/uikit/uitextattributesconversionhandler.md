> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextattributesconversionhandler

# UITextAttributesConversionHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A handler for updating text with current font panel settings.

## Declaration

```swift
typealias UITextAttributesConversionHandler = ([NSAttributedString.Key : Any]) -> [NSAttributedString.Key : Any]
```

## See Also

### Text formatting

- [UITextFormattingCoordinator](uitextformattingcoordinator.md): An object that coordinates text formatting using the standard Mac font panel.

# UITextAttributesConversionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A handler for updating text with current font panel settings.

## Declaration

```objectivec
typedef NSDictionary<NSString *,id> *(^)(NSDictionary<NSString *,id> *) UITextAttributesConversionHandler;
```

## See Also

### Text formatting

- [UITextFormattingCoordinator](uitextformattingcoordinator.md): An object that coordinates text formatting using the standard Mac font panel.
