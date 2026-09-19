> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/3025784-aedeterminepermissiontoautomatet

# AEDeterminePermissionToAutomateTarget(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.14+

## Declaration

```swift
func AEDeterminePermissionToAutomateTarget(_ target: UnsafePointer<AEAddressDesc>!, _ theAEEventClass: AEEventClass, _ theAEEventID: AEEventID, _ askUserIfNeeded: Bool) -> OSStatus
```

# AEDeterminePermissionToAutomateTarget (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.14+

## Declaration

```objectivec
OSStatus AEDeterminePermissionToAutomateTarget(const AEAddressDesc *target, AEEventClass theAEEventClass, AEEventID theAEEventID, Boolean askUserIfNeeded);
```
