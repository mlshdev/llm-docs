> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1527206-keyword_parameter_constants/keyaerecordercount

# keyAERecorderCount

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Used with the `keyword` parameter of the [AEManagerInfo](../1449373-aemanagerinfo.md) function. If you pass this value, on return, the `result` parameter supplies the number of processes that are currently recording Apple events.

## Declaration

```objectivec
keyAERecorderCount = 'recr'
```
