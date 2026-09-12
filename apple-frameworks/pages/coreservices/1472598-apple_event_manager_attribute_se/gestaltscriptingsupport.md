> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472598-apple_event_manager_attribute_se/gestaltscriptingsupport](https://developer.apple.com/documentation/coreservices/1472598-apple_event_manager_attribute_se/gestaltscriptingsupport)

# gestaltScriptingSupport

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltScriptingSupport = 1
```

<a id="discussion"></a>

## Discussion

A `Gestalt` attribute constant. If the bit specified by this constant is set in the `response` parameter value supplied by `Gestalt` for the `gestaltAppleEventsAttr` selector, the Open Scripting Architecture (OSA) is available to provide scripting support. The OSA is described in “Scripting Components”.
