> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationbuttonwidget/setstate(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationbuttonwidget/setstate(_:))

# setState(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the state of the control.

## Declaration

```swift
func setState(_ value: Int)
```

## Parameters

- `value`: The state the control should be in.

<a id="Discussion"></a>

## Discussion

A control’s state (for example, checked or unchecked) affects how it is drawn. Note that push buttons are always in the on state.

## See Also

### Getting and Setting the Control’s State

- [state()](state%28%29.md): Deprecated. Returns the state of the control.

# setState: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the state of the control.

## Declaration

```objectivec
- (void) setState:(NSInteger) value;
```

## Parameters

- `value`: The state the control should be in.

<a id="Discussion"></a>

## Discussion

A control’s state (for example, checked or unchecked) affects how it is drawn. Note that push buttons are always in the on state.

## See Also

### Getting and Setting the Control’s State

- [state](state%28%29.md): Deprecated. Returns the state of the control.
