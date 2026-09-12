> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction/actiontype/softpause](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction/actiontype/softpause)

# CXPlayDTMFCallAction.ActionType.softPause (Swift)

**Framework:** CallKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Indicates that the user included digits after a soft pause in their dial string. A soft pause is indicated by a comma (`,`) and waits a few seconds before dialing the additional digits.

## Declaration

```swift
case softPause
```

## See Also

### Constants

- [CXPlayDTMFCallAction.ActionType.singleTone](singletone.md): Indicates that the user tapped a digit on the in-call keypad.
- [CXPlayDTMFCallAction.ActionType.hardPause](hardpause.md): Indicates that the user included digits after a hard pause in their dial string. A hard pause is indicated by a semicolon (`;`) and waits for further user interaction before dialing the additional digits.

# CXPlayDTMFCallActionTypeSoftPause (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Indicates that the user included digits after a soft pause in their dial string. A soft pause is indicated by a comma (`,`) and waits a few seconds before dialing the additional digits.

## Declaration

```objectivec
CXPlayDTMFCallActionTypeSoftPause
```

## See Also

### Constants

- [CXPlayDTMFCallActionTypeSingleTone](singletone.md): Indicates that the user tapped a digit on the in-call keypad.
- [CXPlayDTMFCallActionTypeHardPause](hardpause.md): Indicates that the user included digits after a hard pause in their dial string. A hard pause is indicated by a semicolon (`;`) and waits for further user interaction before dialing the additional digits.
