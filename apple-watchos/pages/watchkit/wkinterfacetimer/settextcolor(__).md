> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetimer/settextcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetimer/settextcolor(_:))

# setTextColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the timer’s text.

## Declaration

```swift
func setTextColor(_ color: UIColor?)
```

## Parameters

- `color`: The custom color to apply to the timer string. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default text color is white.

## See Also

### Configuring the Timer Attributes

- [setDate(\_:)](setdate%28__%29.md): Changes the start time for the timer.

# setTextColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color of the timer’s text.

## Declaration

```objectivec
- (void) setTextColor:(UIColor *) color;
```

## Parameters

- `color`: The custom color to apply to the timer string. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default text color is white.

## See Also

### Configuring the Timer Attributes

- [setDate:](setdate%28__%29.md): Changes the start time for the timer.
