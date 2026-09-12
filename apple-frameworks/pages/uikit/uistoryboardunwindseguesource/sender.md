> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardunwindseguesource/sender](https://developer.apple.com/documentation/uikit/uistoryboardunwindseguesource/sender)

# sender (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The object that performed the unwind action.

## Declaration

```swift
var sender: Any? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which object in your interface triggered the unwind segue.

## See Also

### Getting the unwind segue attributes

- [source](source.md): The view controller being dismissed by the unwind segue.
- [unwindAction](unwindaction.md): The action method associated with the unwind segue.

# sender (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The object that performed the unwind action.

## Declaration

```objectivec
@property (readonly, nullable) id sender;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which object in your interface triggered the unwind segue.

## See Also

### Getting the unwind segue attributes

- [sourceViewController](source.md): The view controller being dismissed by the unwind segue.
- [unwindAction](unwindaction.md): The action method associated with the unwind segue.
