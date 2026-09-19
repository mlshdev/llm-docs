> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/mediasettings/denyexplicitcontent-swift.property

# denyExplicitContent

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from accessing explicit content.

## Declaration

```swift
var denyExplicitContent: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Use `denyExplicitContent` to hide music and video content that has an *explicit* tag. If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Denying explicit media

- [denyExplicitContent](denyexplicitcontent-swift.type.property.md): The metadata for the setting that denies explicit content.
