> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction/type](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction/type)

# type (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The type of the call action.

## Declaration

```swift
var type: CXPlayDTMFCallAction.ActionType { get set }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [CXPlayDTMFCallAction.ActionType](actiontype.md).

## See Also

### Accessing Action Information

- [digits](digits.md): The digits tapped by the user into the in-call keypad or included in the dial string.

# type (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of the call action.

## Declaration

```objectivec
@property (nonatomic) CXPlayDTMFCallActionType type;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [CXPlayDTMFCallActionType](actiontype.md).

## See Also

### Accessing Action Information

- [digits](digits.md): The digits tapped by the user into the in-call keypad or included in the dial string.
