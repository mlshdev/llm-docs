> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setuppanel(_:devicecouldbetarget:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setuppanel(_:devicecouldbetarget:))

# setupPanel(\_:deviceCouldBeTarget:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to determine if device can be used as a target.

## Declaration

```swift
func setupPanel(_ aPanel: DRSetupPanel!, deviceCouldBeTarget device: DRDevice!) -> Bool
```

## Parameters

- `aPanel`: The panel.
- `device`: The candidate device.

<a id="return-value"></a>

## Return Value

 `YES` if the device is acceptable, `NO` if not.

<a id="discussion"></a>

## Discussion

This method is used to limit the menu to only those devices that you want to appear.  For example, a DVD burning application might use this to limit the menu to only devices that are capable of writing DVD-Rs.

# setupPanel:deviceCouldBeTarget: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to determine if device can be used as a target.

## Declaration

```objectivec
- (BOOL) setupPanel:(DRSetupPanel *) aPanel deviceCouldBeTarget:(DRDevice *) device;
```

## Parameters

- `aPanel`: The panel.
- `device`: The candidate device.

<a id="return-value"></a>

## Return Value

 `YES` if the device is acceptable, `NO` if not.

<a id="discussion"></a>

## Discussion

This method is used to limit the menu to only those devices that you want to appear.  For example, a DVD burning application might use this to limit the menu to only devices that are capable of writing DVD-Rs.
