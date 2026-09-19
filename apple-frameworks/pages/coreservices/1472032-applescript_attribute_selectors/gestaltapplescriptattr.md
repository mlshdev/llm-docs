> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472032-applescript_attribute_selectors/gestaltapplescriptattr

# gestaltAppleScriptAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppleScriptAttr = 'ascr'
```

<a id="discussion"></a>

## Discussion

A selector you pass to the `Gestalt` function. If AppleScript is not present, the `Gestalt` function returns an error value; otherwise, it returns `noErr` and supplies, in the `response` parameter, a 32-bit value whose bits specify which AppleScript features are available.

The only bit currently in use specifies whether AppleScript is present. You can test this bit with the constant `gestaltAppleScriptPresent`.
