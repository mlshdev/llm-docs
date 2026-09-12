> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutecontrollerobserver-5syvg/systemroutecontroller(_:handle:)-41ej5](https://developer.apple.com/documentation/avsystemrouting/avsystemroutecontrollerobserver-5syvg/systemroutecontroller(_:handle:)-41ej5)

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

<a id="return-value"></a>

## Return Value

`true` if the event was handled successfully, `false` otherwise.
