> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/init(title:sections:assistantcellconfiguration:headergridbuttons:)

# init(title:sections:assistantCellConfiguration:headerGridButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list template with one or more grid buttons to displayed in a list header.

## Declaration

```swift
init(title: String?, sections: [CPListSection], assistantCellConfiguration: CPAssistantCellConfiguration?, headerGridButtons: [CPGridButton]?)
```

# initWithTitle:sections:assistantCellConfiguration:headerGridButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list template with one or more grid buttons to displayed in a list header.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title sections:(NSArray<CPListSection *> *) sections assistantCellConfiguration:(CPAssistantCellConfiguration *) assistantCellConfiguration headerGridButtons:(NSArray<CPGridButton *> *) headerGridButtons;
```
