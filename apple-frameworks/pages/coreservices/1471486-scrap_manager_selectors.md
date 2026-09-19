> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471486-scrap_manager_selectors

# Scrap Manager Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version and feature availability information for the Scrap Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltScrapMgrAttr](1471486-scrap_manager_selectors/gestaltscrapmgrattr.md): The `Gestalt` selector you pass to determine which Scrap Manager attributes are present.
- [gestaltScrapMgrTranslationAware](1471486-scrap_manager_selectors/gestaltscrapmgrtranslationaware.md): If `true`, the Scrap Manager supports Translation Manager.
