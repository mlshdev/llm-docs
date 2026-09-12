> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/compositionpickerviewwillstopanimating(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerviewwillstopanimating(_:))

# compositionPickerViewWillStopAnimating(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs custom tasks when the composition picker view stops animating a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func compositionPickerViewWillStopAnimating(_ pickerView: QCCompositionPickerView!)
```

## Parameters

- `pickerView`: The composition picker view in which the composition stopped animating.

<a id="Discussion"></a>

## Discussion

Quartz Composer invokes  this method whenever the composition picker view stops animating a composition. Implement this method if you want to perform custom tasks at that time.

# compositionPickerViewWillStopAnimating: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Performs custom tasks when the composition picker view stops animating a composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) compositionPickerViewWillStopAnimating:(QCCompositionPickerView *) pickerView;
```

## Parameters

- `pickerView`: The composition picker view in which the composition stopped animating.

<a id="Discussion"></a>

## Discussion

Quartz Composer invokes  this method whenever the composition picker view stops animating a composition. Implement this method if you want to perform custom tasks at that time.
