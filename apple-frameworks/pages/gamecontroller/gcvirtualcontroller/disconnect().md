> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/disconnect()](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/disconnect())

# disconnect() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Disconnects the virtual controller from the device and removes it from the screen.

## Declaration

```swift
func disconnect()
```

<a id="Discussion"></a>

## Discussion

After you invoke this method, the framework stops calling input handlers that you set for the elements.

## See Also

### Connecting and displaying virtual controllers

- [connect(replyHandler:)](connect%28replyhandler_%29.md): Connects the virtual controller to the device and displays it on the screen.

# disconnect (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Disconnects the virtual controller from the device and removes it from the screen.

## Declaration

```objectivec
- (void) disconnect;
```

<a id="Discussion"></a>

## Discussion

After you invoke this method, the framework stops calling input handlers that you set for the elements.

## See Also

### Connecting and displaying virtual controllers

- [connectWithReplyHandler:](connect%28replyhandler_%29.md): Connects the virtual controller to the device and displays it on the screen.
