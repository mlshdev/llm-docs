> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstabviewitem/tabstate

# tabState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current display state of the tab associated with the receiver.

## Declaration

```swift
var tabState: NSTabViewItem.State { get }
```

<a id="Discussion"></a>

## Discussion

The possible values are `NSSelectedTab`, `NSBackgroundTab`, or `NSPressedTab`. Your application does not directly set the tab state.

# tabState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current display state of the tab associated with the receiver.

## Declaration

```objectivec
@property (readonly) NSTabState tabState;
```

<a id="Discussion"></a>

## Discussion

The possible values are `NSSelectedTab`, `NSBackgroundTab`, or `NSPressedTab`. Your application does not directly set the tab state.
