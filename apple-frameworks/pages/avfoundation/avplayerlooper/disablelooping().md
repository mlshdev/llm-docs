> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper/disablelooping()](https://developer.apple.com/documentation/avfoundation/avplayerlooper/disablelooping())

# disableLooping() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Disables looping for the player queue.

## Declaration

```swift
func disableLooping()
```

<a id="Discussion"></a>

## Discussion

The player looper will stop performing player queue operations for looping and let the current looping item replica play to the end. The player’s original [actionAtItemEnd](../avplayer/actionatitemend-swift.property.md) property will be restored afterwards.

## See Also

### Configuring looping

- [loopingPlayerItems](loopingplayeritems.md): An array containing replicas of the template player item used to accomplish the looping.

# disableLooping (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Disables looping for the player queue.

## Declaration

```objectivec
- (void) disableLooping;
```

<a id="Discussion"></a>

## Discussion

The player looper will stop performing player queue operations for looping and let the current looping item replica play to the end. The player’s original [actionAtItemEnd](../avplayer/actionatitemend-swift.property.md) property will be restored afterwards.

## See Also

### Configuring looping

- [loopingPlayerItems](loopingplayeritems.md): An array containing replicas of the template player item used to accomplish the looping.
