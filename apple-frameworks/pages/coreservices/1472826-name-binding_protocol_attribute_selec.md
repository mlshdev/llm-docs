> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472826-name-binding_protocol_attribute_selec

# Name-Binding Protocol Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the standard name-binding protocol.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltStdNBPAttr](1472826-name-binding_protocol_attribute_selec/gestaltstdnbpattr.md): The selector you pass to the `Gestalt` function to determine information about the StandardNBP (Name-Binding Protocol) function.
- [gestaltStdNBPPresent](1472826-name-binding_protocol_attribute_selec/gestaltstdnbppresent.md)
- [gestaltStdNBPSupportsAutoPosition](1472826-name-binding_protocol_attribute_selec/gestaltstdnbpsupportsautoposition.md)
