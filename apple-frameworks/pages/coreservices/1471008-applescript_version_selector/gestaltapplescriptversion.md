> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471008-applescript_version_selector/gestaltapplescriptversion](https://developer.apple.com/documentation/coreservices/1471008-applescript_version_selector/gestaltapplescriptversion)

# gestaltAppleScriptVersion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppleScriptVersion = 'ascv'
```

<a id="discussion"></a>

## Discussion

A selector you pass to the `Gestalt` function. If AppleScript is not present, the `Gestalt` function returns an error value; otherwise, it returns `noErr` and supplies, in the `response` parameter, a 32-bit AppleScript version number.

The low word of the 32-bit AppleScript version number specifies the current AppleScript version, while the high word specifies a compatibility version. For example, for AppleScript 1.3.7, which shipped with Mac OS 8.6, the value returned in the `response` parameter, viewed as a hex number, is 0x01100137. The low word, 0x0137, refers to the current AppleScript version. The high word, 0x0110, refers to the compatibility version number—scripts written for AppleScript versions 1.1.0 and later will run with AppleScript version 1.3.7.

The Version Notes section provides additional information about AppleScript versions and features.
