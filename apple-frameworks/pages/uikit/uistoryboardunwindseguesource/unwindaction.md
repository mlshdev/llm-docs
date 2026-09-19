> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uistoryboardunwindseguesource/unwindaction

# unwindAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The action method associated with the unwind segue.

## Declaration

```swift
var unwindAction: Selector { get }
```

<a id="Discussion"></a>

## Discussion

Each unwind segue has an associated action method. The view controller that’s the destination of the unwind segue must implement this action method.

## See Also

### Getting the unwind segue attributes

- [source](source.md): The view controller being dismissed by the unwind segue.
- [sender](sender.md): The object that performed the unwind action.

# unwindAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The action method associated with the unwind segue.

## Declaration

```objectivec
@property (readonly) SEL unwindAction;
```

<a id="Discussion"></a>

## Discussion

Each unwind segue has an associated action method. The view controller that’s the destination of the unwind segue must implement this action method.

## See Also

### Getting the unwind segue attributes

- [sourceViewController](source.md): The view controller being dismissed by the unwind segue.
- [sender](sender.md): The object that performed the unwind action.
