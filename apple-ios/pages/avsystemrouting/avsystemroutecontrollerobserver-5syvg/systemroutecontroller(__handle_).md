> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutecontrollerobserver-5syvg/systemroutecontroller(_:handle:)

# systemRouteController(\_:handle:)

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Connects to, or disconnects from, a device when a user requests it in the picker.

## Declaration

```swift
func systemRouteController(_ controller: AVSystemRouteController, handle event: AVSystemRouteEvent) async -> Bool
```

## Parameters

- `controller`: The system routing controller.
- `event`: The routing event to handle.

## Default Implementations

### AVSystemRouteControllerObserver Implementations

- [systemRouteController(\_:handle:)](systemroutecontroller%28__handle_%29-41ej5.md): Connects to, or disconnects from, a device when a user requests it in the picker.
