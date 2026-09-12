> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/compositionpickerview(_:didselect:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerview(_:didselect:))

# compositionPickerView(\_:didSelect:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs custom tasks when the selected composition in the composition picker view changes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositionPickerView(_ pickerView: QCCompositionPickerView!, didSelect composition: QCComposition!)
```

## Parameters

- `pickerView`: The composition picker view in which the selection changed.
- `composition`: The selected composition or `nil` if the previously selected composition is no longer selected.

<a id="Discussion"></a>

## Discussion

Quartz Composer invokes this method when the selected composition in the composition picker view changes. Implement this method if you want to perform custom tasks at that time.

# compositionPickerView:didSelectComposition: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs custom tasks when the selected composition in the composition picker view changes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) compositionPickerView:(QCCompositionPickerView *) pickerView didSelectComposition:(QCComposition *) composition;
```

## Parameters

- `pickerView`: The composition picker view in which the selection changed.
- `composition`: The selected composition or `nil` if the previously selected composition is no longer selected.

<a id="Discussion"></a>

## Discussion

Quartz Composer invokes this method when the selected composition in the composition picker view changes. Implement this method if you want to perform custom tasks at that time.
