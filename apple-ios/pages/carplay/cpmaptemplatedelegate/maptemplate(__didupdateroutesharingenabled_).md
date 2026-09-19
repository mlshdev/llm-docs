> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didupdateroutesharingenabled:)

# mapTemplate(\_:didUpdateRouteSharingEnabled:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didUpdateRouteSharingEnabled enabled: Bool)
```

# mapTemplate:didUpdateRouteSharingEnabled: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didUpdateRouteSharingEnabled:(BOOL) enabled;
```
