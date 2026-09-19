> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uistoryboardunwindseguesource/source

# source (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view controller being dismissed by the unwind segue.

## Declaration

```swift
var source: UIViewController { get }
```

## See Also

### Getting the unwind segue attributes

- [unwindAction](unwindaction.md): The action method associated with the unwind segue.
- [sender](sender.md): The object that performed the unwind action.

# sourceViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view controller being dismissed by the unwind segue.

## Declaration

```objectivec
@property (readonly) UIViewController * sourceViewController;
```

## See Also

### Getting the unwind segue attributes

- [unwindAction](unwindaction.md): The action method associated with the unwind segue.
- [sender](sender.md): The object that performed the unwind action.
