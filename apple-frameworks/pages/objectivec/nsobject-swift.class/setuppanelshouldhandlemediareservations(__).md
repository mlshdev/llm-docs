> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setuppanelshouldhandlemediareservations(_:)

# setupPanelShouldHandleMediaReservations(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method allows the delegate to control how media reservations are handled.

## Declaration

```swift
func setupPanelShouldHandleMediaReservations(_ aPanel: DRSetupPanel!) -> Bool
```

## Parameters

- `aPanel`: The setup panel sending the message.

<a id="return-value"></a>

## Return Value

<a id="discussion"></a>

## Discussion

Return `NO` to indicate the delegate will handle media reservations. Return `YES` to indicate the setupPanel should handle media reservations itself.

# setupPanelShouldHandleMediaReservations: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method allows the delegate to control how media reservations are handled.

## Declaration

```objectivec
- (BOOL) setupPanelShouldHandleMediaReservations:(DRSetupPanel *) aPanel;
```

## Parameters

- `aPanel`: The setup panel sending the message.

<a id="return-value"></a>

## Return Value

<a id="discussion"></a>

## Discussion

Return `NO` to indicate the delegate will handle media reservations. Return `YES` to indicate the setupPanel should handle media reservations itself.
