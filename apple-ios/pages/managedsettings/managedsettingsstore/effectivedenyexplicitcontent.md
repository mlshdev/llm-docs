> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/managedsettingsstore/effectivedenyexplicitcontent

# effectiveDenyExplicitContent

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

The deny explicit content constraint that is active on this device.

## Declaration

```swift
@Published<Bool> var effectiveDenyExplicitContent: Bool { get }
```

<a id="discussion"></a>

## Discussion

An authorized app can query whether or not explicit content is allowed on the device.
