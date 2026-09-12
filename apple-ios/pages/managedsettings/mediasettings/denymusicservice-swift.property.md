> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings/denymusicservice-swift.property](https://developer.apple.com/documentation/managedsettings/mediasettings/denymusicservice-swift.property)

# denyMusicService

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from accessing Apple Music’s streaming content.

## Declaration

```swift
var denyMusicService: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If you set this value to `true`, the Music app reverts to classic mode. If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Denying the Apple Music Service

- [denyMusicService](denymusicservice-swift.type.property.md): The metadata associated with denying access to Apple Music.
