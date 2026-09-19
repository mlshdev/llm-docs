> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/ismixdown

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
