> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setuppanel(_:determinebestdeviceofa:orb:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setuppanel(_:determinebestdeviceofa:orb:))

# setupPanel(\_:determineBestDeviceOfA:orB:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify which device is its preferred.

## Declaration

```swift
func setupPanel(_ aPanel: DRSetupPanel!, determineBestDeviceOfA deviceA: DRDevice!, orB device: DRDevice!) -> DRDevice!
```

## Parameters

- `aPanel`: The panel.
- `deviceA`: A candidate device. May be nil.
- `device`: A candidate device. May be nil.

<a id="return-value"></a>

## Return Value

 One of the two device objects passed in.

<a id="discussion"></a>

## Discussion

When the setup panel is first displayed and again, each time a new device appears, the setup panel will ask the delegate to compare two devices to determine which is most suitable for their content to burn.

# setupPanel:determineBestDeviceOfA:orB: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify which device is its preferred.

## Declaration

```objectivec
- (DRDevice *) setupPanel:(DRSetupPanel *) aPanel determineBestDeviceOfA:(DRDevice *) deviceA orB:(DRDevice *) device;
```

## Parameters

- `aPanel`: The panel.
- `deviceA`: A candidate device. May be nil.
- `device`: A candidate device. May be nil.

<a id="return-value"></a>

## Return Value

 One of the two device objects passed in.

<a id="discussion"></a>

## Discussion

When the setup panel is first displayed and again, each time a new device appears, the setup panel will ask the delegate to compare two devices to determine which is most suitable for their content to burn.
