> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471353-aux_version_selector/gestaltauxversion](https://developer.apple.com/documentation/coreservices/1471353-aux_version_selector/gestaltauxversion)

# gestaltAUXVersion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The version of A/UX if it is currently executing. The result is placed into the low-order word of the response parameter. If A/UX is not executing, the `Gestalt` function returns `gestaltUnknownErr`.

## Declaration

```objectivec
gestaltAUXVersion = 'a/ux'
```
