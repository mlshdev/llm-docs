> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/eraseprogresspanel(_:erasedidfinish:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/eraseprogresspanel(_:erasedidfinish:))

# eraseProgressPanel(\_:eraseDidFinish:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```swift
func eraseProgressPanel(_ theErasePanel: DREraseProgressPanel!, eraseDidFinish erase: DRErase!) -> Bool
```

## Parameters

- `theErasePanel`: The progress panel
- `erase`: The object that performed the erase.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to handle or modify the end-of-burn feedback performed by the progress panel. Return `YES` to indicate the delegate handled the burn completion and the standard feedback should be supressed. If this method returns `NO`, the normal end-of-burn handling is performed (displaying an error if appropriate, playing an “I’m done” sound, etc).

The delegate is messaged before the progress panel is ordered out so a sheet may be displayed on a progress panel displayed as a window.

# eraseProgressPanel:eraseDidFinish: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```objectivec
- (BOOL) eraseProgressPanel:(DREraseProgressPanel *) theErasePanel eraseDidFinish:(DRErase *) erase;
```

## Parameters

- `theErasePanel`: The progress panel
- `erase`: The object that performed the erase.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to handle or modify the end-of-burn feedback performed by the progress panel. Return `YES` to indicate the delegate handled the burn completion and the standard feedback should be supressed. If this method returns `NO`, the normal end-of-burn handling is performed (displaying an error if appropriate, playing an “I’m done” sound, etc).

The delegate is messaged before the progress panel is ordered out so a sheet may be displayed on a progress panel displayed as a window.
