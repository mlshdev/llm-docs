> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/target

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

An object that is notified when a user interacts with the color picker.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

## See Also

### Obtaining the selected color

- [color](color.md): The picker’s currently selected color.
- [action](action.md): The selector on the target object that is invoked when a user interacts with the color picker.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

An object that is notified when a user interacts with the color picker.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

## See Also

### Obtaining the selected color

- [color](color.md): The picker’s currently selected color.
- [action](action.md): The selector on the target object that is invoked when a user interacts with the color picker.
