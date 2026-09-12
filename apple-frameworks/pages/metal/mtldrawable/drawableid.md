> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawable/drawableid](https://developer.apple.com/documentation/metal/mtldrawable/drawableid)

# drawableID (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

A positive integer that identifies the drawable.

## Declaration

```swift
var drawableID: Int { get }
```

<a id="discussion"></a>

## Discussion

Drawable objects are usually owned by some other object, such as a [CAMetalLayer](../../quartzcore/cametallayer.md). The owning object gives the first drawable it creates an ID of `0`, and it increments the ID by `1` for each additional drawable it creates.

# drawableID (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

A positive integer that identifies the drawable.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger drawableID;
```

<a id="discussion"></a>

## Discussion

Drawable objects are usually owned by some other object, such as a [CAMetalLayer](../../quartzcore/cametallayer.md). The owning object gives the first drawable it creates an ID of `0`, and it increments the ID by `1` for each additional drawable it creates.
