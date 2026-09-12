> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472598-apple_event_manager_attribute_se/gestaltappleeventsattr](https://developer.apple.com/documentation/coreservices/1472598-apple_event_manager_attribute_se/gestaltappleeventsattr)

# gestaltAppleEventsAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppleEventsAttr = 'evnt'
```

<a id="discussion"></a>

## Discussion

A selector you pass to the `Gestalt` function. If the Apple Event Manager is not present, the `Gestalt` function returns an error value; otherwise, it returns `noErr` and supplies, in the `response` parameter, a 32-bit value whose bits specify which features of the Apple Event Manager are available.
