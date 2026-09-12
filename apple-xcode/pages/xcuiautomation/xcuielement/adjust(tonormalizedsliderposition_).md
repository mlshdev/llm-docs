> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/adjust(tonormalizedsliderposition:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/adjust(tonormalizedsliderposition:))

# adjust(toNormalizedSliderPosition:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.

## Declaration

```swift
func adjust(toNormalizedSliderPosition normalizedSliderPosition: CGFloat)
```

<a id="Discussion"></a>

## Discussion

A normalized slider value of `0` corresponds to the minimum value of the slider, and `1` corresponds to the maximum value.

> **Note**

>  The adjustment is a best effort to move the indicator to the desired position; absolute fidelity isn’t guaranteed.

## See Also

### Interacting with sliders

- [normalizedSliderPosition](normalizedsliderposition.md): Returns the position of the slider’s indicator as a normalized value.

# adjustToNormalizedSliderPosition: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.

## Declaration

```objectivec
- (void) adjustToNormalizedSliderPosition:(CGFloat) normalizedSliderPosition;
```

<a id="Discussion"></a>

## Discussion

A normalized slider value of `0` corresponds to the minimum value of the slider, and `1` corresponds to the maximum value.

> **Note**

>  The adjustment is a best effort to move the indicator to the desired position; absolute fidelity isn’t guaranteed.

## See Also

### Interacting with sliders

- [normalizedSliderPosition](normalizedsliderposition.md): Returns the position of the slider’s indicator as a normalized value.
