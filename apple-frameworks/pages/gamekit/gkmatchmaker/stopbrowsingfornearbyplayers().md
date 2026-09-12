> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/stopbrowsingfornearbyplayers()](https://developer.apple.com/documentation/gamekit/gkmatchmaker/stopbrowsingfornearbyplayers())

# stopBrowsingForNearbyPlayers() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Stops finding nearby players.

## Declaration

```swift
func stopBrowsingForNearbyPlayers()
```

<a id="Discussion"></a>

## Discussion

If you use the [startBrowsingForNearbyPlayers(handler:)](startbrowsingfornearbyplayers%28handler_%29.md) method to find nearby players, call this method when you are done.

## See Also

### Looking for nearby players

- [startBrowsingForNearbyPlayers(handler:)](startbrowsingfornearbyplayers%28handler_%29.md): Finds nearby players through Bluetooth or WiFi on the same subnet.

# stopBrowsingForNearbyPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Stops finding nearby players.

## Declaration

```objectivec
- (void) stopBrowsingForNearbyPlayers;
```

<a id="Discussion"></a>

## Discussion

If you use the [startBrowsingForNearbyPlayersWithHandler:](startbrowsingfornearbyplayers%28handler_%29.md) method to find nearby players, call this method when you are done.

## See Also

### Looking for nearby players

- [startBrowsingForNearbyPlayersWithHandler:](startbrowsingfornearbyplayers%28handler_%29.md): Finds nearby players through Bluetooth or WiFi on the same subnet.
