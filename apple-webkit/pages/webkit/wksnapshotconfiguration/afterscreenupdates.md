> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksnapshotconfiguration/afterscreenupdates](https://developer.apple.com/documentation/webkit/wksnapshotconfiguration/afterscreenupdates)

# afterScreenUpdates (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether to take the snapshot after incorporating any pending screen updates.

## Declaration

```swift
var afterScreenUpdates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the web view to incorporate any recent changes to the view’s content and then generate the snapshot. If you change the value to [false](https://developer.apple.com/documentation/swift/false), the web view takes the snapshot immediately, and before incorporating any new changes.

# afterScreenUpdates (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether to take the snapshot after incorporating any pending screen updates.

## Declaration

```objectivec
@property (nonatomic) BOOL afterScreenUpdates;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the web view to incorporate any recent changes to the view’s content and then generate the snapshot. If you change the value to [false](https://developer.apple.com/documentation/swift/false), the web view takes the snapshot immediately, and before incorporating any new changes.
