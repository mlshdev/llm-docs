> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabconfiguration/shouldbeactive](https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration/shouldbeactive)

# shouldBeActive (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the tab should be the active tab.

## Declaration

```swift
var shouldBeActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the tab should be made active in the window, ensuring it is the frontmost tab. Being active implies the tab is also selected. If this property is `NO`, the tab shouldn’t affect the currently active tab.

# shouldBeActive (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the tab should be the active tab.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldBeActive;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the tab should be made active in the window, ensuring it is the frontmost tab. Being active implies the tab is also selected. If this property is `NO`, the tab shouldn’t affect the currently active tab.
