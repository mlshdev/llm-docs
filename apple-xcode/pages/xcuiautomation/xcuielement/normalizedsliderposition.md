> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/normalizedsliderposition](https://developer.apple.com/documentation/xcuiautomation/xcuielement/normalizedsliderposition)

# normalizedSliderPosition (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns the position of the slider’s indicator as a normalized value.

## Declaration

```swift
var normalizedSliderPosition: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

A value of `0` corresponds to the minimum value of the slider, and `1` corresponds to its maximum value.

## See Also

### Interacting with sliders

- [adjust(toNormalizedSliderPosition:)](adjust%28tonormalizedsliderposition_%29.md): Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.

# normalizedSliderPosition (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns the position of the slider’s indicator as a normalized value.

## Declaration

```objectivec
@property (readonly) CGFloat normalizedSliderPosition;
```

<a id="Discussion"></a>

## Discussion

A value of `0` corresponds to the minimum value of the slider, and `1` corresponds to its maximum value.

## See Also

### Interacting with sliders

- [adjustToNormalizedSliderPosition:](adjust%28tonormalizedsliderposition_%29.md): Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.
