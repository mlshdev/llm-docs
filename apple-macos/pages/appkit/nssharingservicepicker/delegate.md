> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservicepicker/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The object for managing the sharing service picker.

## Declaration

```swift
weak var delegate: (any NSSharingServicePickerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [NSSharingServicePickerDelegate](../nssharingservicepickerdelegate.md) delegate.

## See Also

### Managing the sharing service picker

- [NSSharingServicePickerDelegate](../nssharingservicepickerdelegate.md): An interface for managing content for the macOS share sheet.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The object for managing the sharing service picker.

## Declaration

```objectivec
@property (weak, nullable) id<NSSharingServicePickerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [NSSharingServicePickerDelegate](../nssharingservicepickerdelegate.md) delegate.

## See Also

### Managing the sharing service picker

- [NSSharingServicePickerDelegate](../nssharingservicepickerdelegate.md): An interface for managing content for the macOS share sheet.
