> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472032-applescript_attribute_selectors](https://developer.apple.com/documentation/coreservices/1472032-applescript_attribute_selectors)

# AppleScript Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for AppleScript.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAppleScriptAttr](1472032-applescript_attribute_selectors/gestaltapplescriptattr.md)
- [gestaltAppleScriptPresent](1472032-applescript_attribute_selectors/gestaltapplescriptpresent.md): A `Gestalt` attribute constant. If the bit specified by this constant is set in the `response` parameter value supplied by `Gestalt` for the `gestaltAppleScriptAttr` selector, AppleScript is present.
- [gestaltAppleScriptPowerPCSupport](1472032-applescript_attribute_selectors/gestaltapplescriptpowerpcsupport.md)
