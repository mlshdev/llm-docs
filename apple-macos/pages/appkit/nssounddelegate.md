> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssounddelegate](https://developer.apple.com/documentation/appkit/nssounddelegate)

# NSSoundDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSSound](nssound.md) objects.

## Declaration

```swift
protocol NSSoundDelegate : NSObjectProtocol
```

## Topics

### Playing Sounds

- [sound(\_:didFinishPlaying:)](nssounddelegate/sound%28__didfinishplaying_%29.md): This delegate method is called when an `NSSound` instance has completed playback of its sound data.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Detecting When a Sound Finishes Playing

- [delegate](nssound/delegate.md): The sound’s delegate.

# NSSoundDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSSound](nssound.md) objects.

## Declaration

```objectivec
@protocol NSSoundDelegate <NSObject>
```

## Topics

### Playing Sounds

- [sound:didFinishPlaying:](nssounddelegate/sound%28__didfinishplaying_%29.md): This delegate method is called when an `NSSound` instance has completed playback of its sound data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Detecting When a Sound Finishes Playing

- [delegate](nssound/delegate.md): The sound’s delegate.
