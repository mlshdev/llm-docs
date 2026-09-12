> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmakerect(aspectratio:insiderect:)](https://developer.apple.com/documentation/avfoundation/avmakerect(aspectratio:insiderect:))

# AVMakeRect(aspectRatio:insideRect:) (Swift)

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a scaled rectangle that maintains the specified aspect ratio within a bounding rectangle.

## Declaration

```swift
func AVMakeRect(aspectRatio: CGSize, insideRect boundingRect: CGRect) -> CGRect
```

## Parameters

- `aspectRatio`: The width and height ratio (aspect ratio) you want to maintain.
- `boundingRect`: The bounding rectangle you want to fit into.

<a id="return-value"></a>

## Return Value

Returns a scaled `CGRect` that maintains the aspect ratio specified by `aspectRatio` that fits within `boundingRect`.

<a id="Discussion"></a>

## Discussion

Use this function when attempting to fit the presentation size of a player item object’s content within the bounds of another [CALayer](../quartzcore/calayer.md). Use the returned [CGRect](../corefoundation/cgrect.md) as the player layer’s [frame](../quartzcore/calayer/frame.md) property value. For example:

**Swift**

```swift
let aspectRatio = CGSize(width: 1920, height: 1080)
playerLayer.frame = AVMakeRect(aspectRatio: aspectRatio, insideRect: superLayer.bounds)
```

**Objective-C**

```objc
CGSize aspectRatio = CGSizeMake(1920, 1080);
self.playerLayer.frame = AVMakeRectWithAspectRatioInsideRect(aspectRatio, self.superLayer.bounds);
```

# AVMakeRectWithAspectRatioInsideRect (Objective-C)

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a scaled rectangle that maintains the specified aspect ratio within a bounding rectangle.

## Declaration

```objectivec
extern CGRect AVMakeRectWithAspectRatioInsideRect(CGSize aspectRatio, CGRect boundingRect);
```

## Parameters

- `aspectRatio`: The width and height ratio (aspect ratio) you want to maintain.
- `boundingRect`: The bounding rectangle you want to fit into.

<a id="return-value"></a>

## Return Value

Returns a scaled `CGRect` that maintains the aspect ratio specified by `aspectRatio` that fits within `boundingRect`.

<a id="Discussion"></a>

## Discussion

Use this function when attempting to fit the presentation size of a player item object’s content within the bounds of another [CALayer](../quartzcore/calayer.md). Use the returned [CGRect](../corefoundation/cgrect.md) as the player layer’s [frame](../quartzcore/calayer/frame.md) property value. For example:

**Swift**

```swift
let aspectRatio = CGSize(width: 1920, height: 1080)
playerLayer.frame = AVMakeRect(aspectRatio: aspectRatio, insideRect: superLayer.bounds)
```

**Objective-C**

```objc
CGSize aspectRatio = CGSizeMake(1920, 1080);
self.playerLayer.frame = AVMakeRectWithAspectRatioInsideRect(aspectRatio, self.superLayer.bounds);
```
