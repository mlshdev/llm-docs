> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/presentswithtransaction](https://developer.apple.com/documentation/quartzcore/cametallayer/presentswithtransaction)

# presentsWithTransaction (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the layer presents its content using a Core Animation transaction.

## Declaration

```swift
var presentsWithTransaction: Bool { get set }
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

By default, this value is [false](https://developer.apple.com/documentation/swift/false); [CAMetalLayer](../cametallayer.md) displays the output of a rendering pass to the display as quickly as possible and asynchronously to any Core Animation transactions. Core Animation doesn’t guarantee that the Metal content arrives in the same frame as other Core Animation content. This behavior could be an issue if, for example, your app draws [UIKit](https://developer.apple.com/library/archive/releasenotes/General/RN-iOSSDK-6_1/index.html#//apple_ref/doc/uid/TP40012869-CH1-SW17) content over the top of your [CAMetalLayer](../cametallayer.md).

Setting this value to [true](https://developer.apple.com/documentation/swift/true) makes the layer draw its contents synchronously, using whichever Core Animation transaction is current at the time you call the drawable’s [present()](../../metal/mtldrawable/present%28%29.md) method. To ensure that a transaction is available when you schedule the drawable to be presented, first commit the command buffer containing your Metal rendering commands. Then, call its [waitUntilScheduled()](../../metal/mtlcommandbuffer/waituntilscheduled%28%29.md) method to synchronously wait until the command queue schedules the command buffer to execute on the GPU. Finally, call the drawable’s [present()](../../metal/mtldrawable/present%28%29.md) method.

> **Warning**

>  If you’re synchronizing presentation with a Core Animation transaction, don’t use the [present(\_:)](../../metal/mtlcommandbuffer/present%28__%29.md) method on the command buffer to schedule the drawable for presentation. This convenience method (and any variant of it on [MTLCommandBuffer](../../metal/mtlcommandbuffer.md)) doesn’t wait for a transaction to be available.

## See Also

### Configuring Presentation Behavior

- [displaySyncEnabled](displaysyncenabled.md): A Boolean value that determines whether the layer synchronizes its updates to the display’s refresh rate.

# presentsWithTransaction (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the layer presents its content using a Core Animation transaction.

## Declaration

```objectivec
@property BOOL presentsWithTransaction;
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

By default, this value is [false](https://developer.apple.com/documentation/swift/false); [CAMetalLayer](../cametallayer.md) displays the output of a rendering pass to the display as quickly as possible and asynchronously to any Core Animation transactions. Core Animation doesn’t guarantee that the Metal content arrives in the same frame as other Core Animation content. This behavior could be an issue if, for example, your app draws [UIKit](https://developer.apple.com/library/archive/releasenotes/General/RN-iOSSDK-6_1/index.html#//apple_ref/doc/uid/TP40012869-CH1-SW17) content over the top of your [CAMetalLayer](../cametallayer.md).

Setting this value to [true](https://developer.apple.com/documentation/swift/true) makes the layer draw its contents synchronously, using whichever Core Animation transaction is current at the time you call the drawable’s [present](../../metal/mtldrawable/present%28%29.md) method. To ensure that a transaction is available when you schedule the drawable to be presented, first commit the command buffer containing your Metal rendering commands. Then, call its [waitUntilScheduled](../../metal/mtlcommandbuffer/waituntilscheduled%28%29.md) method to synchronously wait until the command queue schedules the command buffer to execute on the GPU. Finally, call the drawable’s [present](../../metal/mtldrawable/present%28%29.md) method.

> **Warning**

>  If you’re synchronizing presentation with a Core Animation transaction, don’t use the [presentDrawable:](../../metal/mtlcommandbuffer/present%28__%29.md) method on the command buffer to schedule the drawable for presentation. This convenience method (and any variant of it on [MTLCommandBuffer](../../metal/mtlcommandbuffer.md)) doesn’t wait for a transaction to be available.

## See Also

### Configuring Presentation Behavior

- [displaySyncEnabled](displaysyncenabled.md): A Boolean value that determines whether the layer synchronizes its updates to the display’s refresh rate.
