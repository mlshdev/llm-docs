> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssteppertouchbaritem/target

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The target object that receives action messages from the stepper.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

## See Also

### Handling stepper interaction

- [action](action.md): The action-message selector associated with the stepper.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

The target object that receives action messages from the stepper.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

## See Also

### Handling stepper interaction

- [action](action.md): The action-message selector associated with the stepper.
