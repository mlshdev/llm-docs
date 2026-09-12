> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/isactive](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/isactive)

# isActive

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

Property that controls whether the store is active

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="discussion"></a>

## Discussion

An inactive store is not included in the effective settings calculation. Defaults to true.
