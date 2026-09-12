> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/ismixdown](https://developer.apple.com/documentation/coreaudio/catapdescription/ismixdown)

# isMixdown (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```swift
var isMixdown: Bool { get set }
```

<a id="discussion"></a>

## Discussion

True if this description is a mono or stereo mix of the tapped device’s channels.

# mixdown (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, readwrite, getter=isMixdown) BOOL mixdown;
```

<a id="discussion"></a>

## Discussion

True if this description is a mono or stereo mix of the tapped device’s channels.
