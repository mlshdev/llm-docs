> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472598-apple_event_manager_attribute_se](https://developer.apple.com/documentation/coreservices/1472598-apple_event_manager_attribute_se)

# Apple Event Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Apple Event Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAppleEventsAttr](1472598-apple_event_manager_attribute_se/gestaltappleeventsattr.md)
- [gestaltAppleEventsPresent](1472598-apple_event_manager_attribute_se/gestaltappleeventspresent.md): A `Gestalt` attribute constant. If the bit specified by this constant is set in the `response` parameter value supplied by `Gestalt` for the `gestaltAppleEventsAttr` selector, the Apple Event Manager is present and installed in the system.
- [gestaltScriptingSupport](1472598-apple_event_manager_attribute_se/gestaltscriptingsupport.md)
- [gestaltOSLInSystem](1472598-apple_event_manager_attribute_se/gestaltoslinsystem.md): A `Gestalt` attribute constant. If the bit specified by this constant is set in the `response` parameter value supplied by `Gestalt` for the `gestaltAppleEventsAttr` selector, the Object Support Library (OSL) is part of the system.
- [gestaltSupportsApplicationURL](1472598-apple_event_manager_attribute_se/gestaltsupportsapplicationurl.md)
