> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceslider/setcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceslider/setcolor(_:))

# setColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the slider bar.

## Declaration

```swift
func setColor(_ color: UIColor?)
```

## Parameters

- `color`: The custom color to be applied to the slider bar. Specifying `nil` removes the custom color and returns the slider to the color specified in the storyboard file. The default slider bar color is green.

## See Also

### Setting the Slider Value

- [setValue(\_:)](setvalue%28__%29.md): Changes the value of the slider.
- [setNumberOfSteps(\_:)](setnumberofsteps%28__%29.md): Sets the number of steps for the slider.

# setColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the slider bar.

## Declaration

```objectivec
- (void) setColor:(UIColor *) color;
```

## Parameters

- `color`: The custom color to be applied to the slider bar. Specifying `nil` removes the custom color and returns the slider to the color specified in the storyboard file. The default slider bar color is green.

## See Also

### Setting the Slider Value

- [setValue:](setvalue%28__%29.md): Changes the value of the slider.
- [setNumberOfSteps:](setnumberofsteps%28__%29.md): Sets the number of steps for the slider.
