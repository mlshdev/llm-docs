> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setuppanel(_:devicecontainssuitablemedia:promptstring:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setuppanel(_:devicecontainssuitablemedia:promptstring:))

# setupPanel(\_:deviceContainsSuitableMedia:promptString:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method allows the delegate to determine if the media inserted in the device is suitable for whatever operation is to be performed.

## Declaration

```swift
func setupPanel(_ aPanel: DRSetupPanel!, deviceContainsSuitableMedia device: DRDevice!, promptString prompt: AutoreleasingUnsafeMutablePointer<NSString?>!) -> Bool
```

## Parameters

- `aPanel`: The panel.
- `device`: The device that contains the media being asked about.
- `prompt`: A pointer to storage for an NSString. Pass back an NSString object describing the media state.

<a id="return-value"></a>

## Return Value

 Return `NO` to disable the default button.

# setupPanel:deviceContainsSuitableMedia:promptString: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method allows the delegate to determine if the media inserted in the device is suitable for whatever operation is to be performed.

## Declaration

```objectivec
- (BOOL) setupPanel:(DRSetupPanel *) aPanel deviceContainsSuitableMedia:(DRDevice *) device promptString:(NSString **) prompt;
```

## Parameters

- `aPanel`: The panel.
- `device`: The device that contains the media being asked about.
- `prompt`: A pointer to storage for an NSString. Pass back an NSString object describing the media state.

<a id="return-value"></a>

## Return Value

 Return `NO` to disable the default button.
