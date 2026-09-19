> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikimagestateready

# IKImageStateReady (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The receiver’s represented object has been set and the cell is ready to display.

## Declaration

```swift
var IKImageStateReady: IKImageBrowserCellState { get }
```

## See Also

### Constants

- [IKImageStateNoImage](ikimagestatenoimage.md): Returned until a thumbnail has been created from the represented object.
- [IKImageStateInvalid](ikimagestateinvalid.md): The thumbnail is invalid. For example, an unsupported image is provided.

# IKImageStateReady (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+

The receiver’s represented object has been set and the cell is ready to display.

## Declaration

```objectivec
IKImageStateReady
```

## See Also

### Constants

- [IKImageStateNoImage](ikimagestatenoimage.md): Returned until a thumbnail has been created from the represented object.
- [IKImageStateInvalid](ikimagestateinvalid.md): The thumbnail is invalid. For example, an unsupported image is provided.
