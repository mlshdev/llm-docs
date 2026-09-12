> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssounddelegate/sound(_:didfinishplaying:)](https://developer.apple.com/documentation/appkit/nssounddelegate/sound(_:didfinishplaying:))

# sound(\_:didFinishPlaying:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method is called when an `NSSound` instance has completed playback of its sound data.

## Declaration

```swift
@MainActor optional func sound(_ sound: NSSound, didFinishPlaying flag: Bool)
```

## Parameters

- `sound`: The `NSSound` that has completed playback of its sound data.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) when playback was successful; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [Sound Programming Topics for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Sound/Sound.html#//apple_ref/doc/uid/10000104i)

# sound:didFinishPlaying: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This delegate method is called when an `NSSound` instance has completed playback of its sound data.

## Declaration

```objectivec
- (void) sound:(NSSound *) sound didFinishPlaying:(BOOL) flag;
```

## Parameters

- `sound`: The `NSSound` that has completed playback of its sound data.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) when playback was successful; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [Sound Programming Topics for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Sound/Sound.html#//apple_ref/doc/uid/10000104i)
