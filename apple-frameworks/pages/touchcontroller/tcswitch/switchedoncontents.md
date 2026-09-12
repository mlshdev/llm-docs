> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcswitch/switchedoncontents](https://developer.apple.com/documentation/touchcontroller/tcswitch/switchedoncontents)

# switchedOnContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the switch when it is switched on.

## Declaration

```swift
var switchedOnContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the switch

- [contents](contents.md): The contents for the switch in its normal state.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [isSwitchedOn](isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.

# switchedOnContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the switch when it is switched on.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * switchedOnContents;
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the switch

- [contents](contents.md): The contents for the switch in its normal state.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [switchedOn](isswitchedon.md): A Boolean value that indicates whether the switch is currently switched on.
