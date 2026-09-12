> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepicker/close()](https://developer.apple.com/documentation/appkit/nssharingservicepicker/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Closes the picker interface.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

The [sharingServicePicker(\_:didChoose:)](../nssharingservicepickerdelegate/sharingservicepicker%28__didchoose_%29.md) method will be invoked if the [delegate](delegate.md) is set to `nil`.

## See Also

### Displaying the sharing service picker

- [show(relativeTo:of:preferredEdge:)](show%28relativeto_of_preferrededge_%29.md): Shows the picker interface and populates it with the relevant sharing services.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Closes the picker interface.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

The [sharingServicePicker:didChooseSharingService:](../nssharingservicepickerdelegate/sharingservicepicker%28__didchoose_%29.md) method will be invoked if the [delegate](delegate.md) is set to `nil`.

## See Also

### Displaying the sharing service picker

- [showRelativeToRect:ofView:preferredEdge:](show%28relativeto_of_preferrededge_%29.md): Shows the picker interface and populates it with the relevant sharing services.
