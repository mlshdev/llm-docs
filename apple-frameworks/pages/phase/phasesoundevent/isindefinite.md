> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/isindefinite](https://developer.apple.com/documentation/phase/phasesoundevent/isindefinite)

# isIndefinite (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the sound loops or stops on its own.

## Declaration

```swift
var isIndefinite: Bool { get }
```

## See Also

### Stopping Playback

- [stopAndInvalidate()](stopandinvalidate%28%29.md): Stops a sound event and prevents it from resuming.

# indefinite (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the sound loops or stops on its own.

## Declaration

```objectivec
@property (readonly, getter=isIndefinite) BOOL indefinite;
```

## See Also

### Stopping Playback

- [stopAndInvalidate](stopandinvalidate%28%29.md): Stops a sound event and prevents it from resuming.
