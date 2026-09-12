> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylinkdelegate/metaldisplaylink(_:needsupdate:)](https://developer.apple.com/documentation/quartzcore/cametaldisplaylinkdelegate/metaldisplaylink(_:needsupdate:))

# metalDisplayLink(\_:needsUpdate:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A method the system calls to notify your app when it plans to update the display.

## Declaration

```swift
func metalDisplayLink(_ link: CAMetalDisplayLink, needsUpdate update: CAMetalDisplayLink.Update)
```

## Parameters

- `link`: A Metal display link instance the system notifies.
- `update`: An update instance that contains the time the system intends to update the display, a [CAMetalDrawable](../cametaldrawable.md) instance, and a deadline to call its [present()](../../metal/mtldrawable/present%28%29.md) method.

<a id="Discussion"></a>

## Discussion

In this method’s implementation, perform your app’s rendering on the [layer](../cametaldrawable/layer.md) or [texture](../cametaldrawable/texture.md) of the `update` instance’s [drawable](../cametaldisplaylink/update/drawable.md) property. Before calling [present()](../../metal/mtldrawable/present%28%29.md), encode all your Metal commands to the `link` parameter’s [MTLDevice](../../metal/mtldevice.md). The GPU has additional time to complete running your commands before the frame displays on screen, determined by the value of the `link` parameter’s [preferredFrameLatency](../cametaldisplaylink/preferredframelatency.md) property.

> **Warning**

>  Using alternative methods to [present()](../../metal/mtldrawable/present%28%29.md) that target the presentation for a specific time cause an assert when used with a [CAMetalDisplayLink](../cametaldisplaylink.md).

# metalDisplayLink:needsUpdate: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A method the system calls to notify your app when it plans to update the display.

## Declaration

```objectivec
- (void) metalDisplayLink:(CAMetalDisplayLink *) link needsUpdate:(CAMetalDisplayLinkUpdate *) update;
```

## Parameters

- `link`: A Metal display link instance the system notifies.
- `update`: An update instance that contains the time the system intends to update the display, a [CAMetalDrawable](../cametaldrawable.md) instance, and a deadline to call its [present](../../metal/mtldrawable/present%28%29.md) method.

<a id="Discussion"></a>

## Discussion

In this method’s implementation, perform your app’s rendering on the [layer](../cametaldrawable/layer.md) or [texture](../cametaldrawable/texture.md) of the `update` instance’s [drawable](../cametaldisplaylink/update/drawable.md) property. Before calling [present](../../metal/mtldrawable/present%28%29.md), encode all your Metal commands to the `link` parameter’s [MTLDevice](../../metal/mtldevice.md). The GPU has additional time to complete running your commands before the frame displays on screen, determined by the value of the `link` parameter’s [preferredFrameLatency](../cametaldisplaylink/preferredframelatency.md) property.

> **Warning**

>  Using alternative methods to [present](../../metal/mtldrawable/present%28%29.md) that target the presentation for a specific time cause an assert when used with a [CAMetalDisplayLink](../cametaldisplaylink.md).
