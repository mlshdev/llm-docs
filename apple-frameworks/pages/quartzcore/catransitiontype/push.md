> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransitiontype/push](https://developer.apple.com/documentation/quartzcore/catransitiontype/push)

# push (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s content pushes any existing content as it slides into place.

## Declaration

```swift
static let push: CATransitionType
```

<a id="discussion"></a>

## Discussion

The [Common Transition Subtypes](../common-transition-subtypes.md) are used with this transition.

## See Also

### Constants

- [fade](fade.md): The layer’s content fades as it becomes visible or hidden.
- [moveIn](movein.md): The layer’s content slides into place over any existing content.
- [reveal](reveal.md): The layer’s content is revealed gradually in the direction specified by the transition subtype.

# kCATransitionPush (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s content pushes any existing content as it slides into place.

## Declaration

```objectivec
extern CATransitionType const kCATransitionPush;
```

<a id="discussion"></a>

## Discussion

The [Common Transition Subtypes](../common-transition-subtypes.md) are used with this transition.

## See Also

### Constants

- [kCATransitionFade](fade.md): The layer’s content fades as it becomes visible or hidden.
- [kCATransitionMoveIn](movein.md): The layer’s content slides into place over any existing content.
- [kCATransitionReveal](reveal.md): The layer’s content is revealed gradually in the direction specified by the transition subtype.
