> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472955-font_manager_attribute_selectors

# Font Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Font Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltFontMgrAttr](1472955-font_manager_attribute_selectors/gestaltfontmgrattr.md): The `Gestalt` selector you pass to determine which Font Manager attributes are present.
- [gestaltOutlineFonts](1472955-font_manager_attribute_selectors/gestaltoutlinefonts.md): If `true`, outline fonts are supported.
