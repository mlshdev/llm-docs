> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcswitch/contents](https://developer.apple.com/documentation/touchcontroller/tcswitch/contents)

# contents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the switch in its normal state.

## Declaration

```swift
var contents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the switch

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [isSwitchedOn](isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.
- [switchedOnContents](switchedoncontents.md): The contents for the switch when it is switched on.

# contents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the switch in its normal state.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * contents;
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the switch

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [switchedOn](isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.
- [switchedOnContents](switchedoncontents.md): The contents for the switch when it is switched on.
