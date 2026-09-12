> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacevolumecontrol/settintcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacevolumecontrol/settintcolor(_:))

# setTintColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Sets the volume control’s tint color.

## Declaration

```swift
func setTintColor(_ tintColor: UIColor?)
```

## Parameters

- `tintColor`: The tint color for the volume control. If `nil`, the system uses the app’s tint color.

<a id="Discussion"></a>

## Discussion

The system only applies the tint color to the control’s default state (when the crown is not being used to adjust the volume).

# setTintColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Sets the volume control’s tint color.

## Declaration

```objectivec
- (void) setTintColor:(UIColor *) tintColor;
```

## Parameters

- `tintColor`: The tint color for the volume control. If `nil`, the system uses the app’s tint color.

<a id="Discussion"></a>

## Discussion

The system only applies the tint color to the control’s default state (when the crown is not being used to adjust the volume).
