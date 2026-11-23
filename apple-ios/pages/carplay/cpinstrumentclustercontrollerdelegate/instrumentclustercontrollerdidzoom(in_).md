> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidzoom(in:)

# instrumentClusterControllerDidZoom(in:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to increase map magnification by one level.

## Declaration

```swift
optional func instrumentClusterControllerDidZoom(in instrumentClusterController: CPInstrumentClusterController)
```

## Parameters

- `instrumentClusterController`: The controller object associated with your interface.

<a id="discussion"></a>

## Discussion

Using vehicle controls, someone can change the magnification level of the map you display in the instrument cluster. You define the magnification levels for your content. Each time the system calls this method, increase the magnification of your map’s content by one level. If your map is already at the maximum supported magnification level, don’t magnify it any further.

## See Also

### Handling zoom events

- [instrumentClusterControllerDidZoomOut(\_:)](instrumentclustercontrollerdidzoomout%28__%29.md): Tells the delegate to decrease map magnification by one level.

# instrumentClusterControllerDidZoomIn: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate to increase map magnification by one level.

## Declaration

```objectivec
- (void) instrumentClusterControllerDidZoomIn:(CPInstrumentClusterController *) instrumentClusterController;
```

## Parameters

- `instrumentClusterController`: The controller object associated with your interface.

<a id="discussion"></a>

## Discussion

Using vehicle controls, someone can change the magnification level of the map you display in the instrument cluster. You define the magnification levels for your content. Each time the system calls this method, increase the magnification of your map’s content by one level. If your map is already at the maximum supported magnification level, don’t magnify it any further.

## See Also

### Handling zoom events

- [instrumentClusterControllerDidZoomOut:](instrumentclustercontrollerdidzoomout%28__%29.md): Tells the delegate to decrease map magnification by one level.
