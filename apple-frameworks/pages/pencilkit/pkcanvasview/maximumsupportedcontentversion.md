> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/maximumsupportedcontentversion](https://developer.apple.com/documentation/pencilkit/pkcanvasview/maximumsupportedcontentversion)

# maximumSupportedContentVersion (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The maximum version of PencilKit to support.

## Declaration

```swift
var maximumSupportedContentVersion: PKContentVersion { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [latest](../pkcontentversion/latest.md).

If you set this property to a value less than [latest](../pkcontentversion/latest.md), the canvas view limits the edits that a person can make so they’re compatible with the version of PencilKit you specify.

If you set this property, also set [maximumSupportedContentVersion](../pktoolpicker/maximumsupportedcontentversion.md) on any [PKToolPicker](../pktoolpicker.md) you use.

# maximumSupportedContentVersion (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The maximum version of PencilKit to support.

## Declaration

```objectivec
@property (nonatomic, assign) PKContentVersion maximumSupportedContentVersion;
```

<a id="Discussion"></a>

## Discussion

The default value is [PKContentVersionLatest](../pkcontentversion/latest.md).

If you set this property to a value less than [PKContentVersionLatest](../pkcontentversion/latest.md), the canvas view limits the edits that a person can make so they’re compatible with the version of PencilKit you specify.

If you set this property, also set [maximumSupportedContentVersion](../pktoolpicker/maximumsupportedcontentversion.md) on any [PKToolPicker](../pktoolpicker.md) you use.
