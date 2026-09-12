> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/maximumsupportedcontentversion](https://developer.apple.com/documentation/pencilkit/pktoolpicker/maximumsupportedcontentversion)

# maximumSupportedContentVersion (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The maximum version of PencilKit to support.

## Declaration

```swift
var maximumSupportedContentVersion: PKContentVersion { get set }
```

## Mentioned In

- [Supporting backward compatibility for ink types](../supporting-backward-compatibility-for-ink-types.md)

<a id="Discussion"></a>

## Discussion

The default value is [latest](../pkcontentversion/latest.md).

If you set this property to a value less than [latest](../pkcontentversion/latest.md), the tool picker limits the tools that are available so they’re compatible with the version of PencilKit you specify.

If you set this property, also set [maximumSupportedContentVersion](../pkcanvasview/maximumsupportedcontentversion.md) on the [PKCanvasView](../pkcanvasview.md) you use.

# maximumSupportedContentVersion (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The maximum version of PencilKit to support.

## Declaration

```objectivec
@property (nonatomic, assign) PKContentVersion maximumSupportedContentVersion;
```

## Mentioned In

- [Supporting backward compatibility for ink types](../supporting-backward-compatibility-for-ink-types.md)

<a id="Discussion"></a>

## Discussion

The default value is [PKContentVersionLatest](../pkcontentversion/latest.md).

If you set this property to a value less than [PKContentVersionLatest](../pkcontentversion/latest.md), the tool picker limits the tools that are available so they’re compatible with the version of PencilKit you specify.

If you set this property, also set [maximumSupportedContentVersion](../pkcanvasview/maximumsupportedcontentversion.md) on the [PKCanvasView](../pkcanvasview.md) you use.
