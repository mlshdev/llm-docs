> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/update/targettimestamp](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/update/targettimestamp)

# targetTimestamp (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A deadline that indicates when your app needs to finish rendering to the drawable.

## Declaration

```swift
var targetTimestamp: CFTimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Your app needs to call the [drawable](drawable.md) instance’s [present()](../../../metal/mtldrawable/present%28%29.md) method before the deadline. GPU rendering can continue after this time, based on [preferredFrameLatency](../preferredframelatency.md). For more information on timing your app’s rendering, see [metalDisplayLink(\_:needsUpdate:)](../../cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md).

## See Also

### Drawing the Next Frame

- [drawable](drawable.md): The Metal drawable your app uses to render the next frame.

# targetTimestamp (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A deadline that indicates when your app needs to finish rendering to the drawable.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval targetTimestamp;
```

<a id="Discussion"></a>

## Discussion

Your app needs to call the [drawable](drawable.md) instance’s [present](../../../metal/mtldrawable/present%28%29.md) method before the deadline. GPU rendering can continue after this time, based on [preferredFrameLatency](../preferredframelatency.md). For more information on timing your app’s rendering, see [metalDisplayLink:needsUpdate:](../../cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md).

## See Also

### Drawing the Next Frame

- [drawable](drawable.md): The Metal drawable your app uses to render the next frame.
