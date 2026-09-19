> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservice/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Specifies the delegate of the sharing service.

## Declaration

```swift
weak var delegate: (any NSSharingServiceDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate class must conform to the [NSSharingServiceDelegate](../nssharingservicedelegate.md) protocol.

## See Also

### Managing the Delegate

- [NSSharingServiceDelegate](../nssharingservicedelegate.md): A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Specifies the delegate of the sharing service.

## Declaration

```objectivec
@property (weak, nullable) id<NSSharingServiceDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate class must conform to the [NSSharingServiceDelegate](../nssharingservicedelegate.md) protocol.

## See Also

### Managing the Delegate

- [NSSharingServiceDelegate](../nssharingservicedelegate.md): A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.
