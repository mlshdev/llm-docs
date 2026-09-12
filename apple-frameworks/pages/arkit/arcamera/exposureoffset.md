> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/exposureoffset](https://developer.apple.com/documentation/arkit/arcamera/exposureoffset)

# exposureOffset (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value you supply to your custom renderer to light your scene.

## Declaration

```swift
var exposureOffset: Float { get }
```

<a id="Discussion"></a>

## Discussion

If your app displays an AR experience using a custom Metal renderer, use this value to light your scene during its post-processed lighting stage.

Lighting a scene using [exposureOffset](exposureoffset.md) is normally more performant than scaling each light source in your scene based on the value of the frame’s [lightEstimate](../arframe/lightestimate.md).

# exposureOffset (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value you supply to your custom renderer to light your scene.

## Declaration

```objectivec
@property (nonatomic, readonly) float exposureOffset;
```

<a id="Discussion"></a>

## Discussion

If your app displays an AR experience using a custom Metal renderer, use this value to light your scene during its post-processed lighting stage.

Lighting a scene using [exposureOffset](exposureoffset.md) is normally more performant than scaling each light source in your scene based on the value of the frame’s [lightEstimate](../arframe/lightestimate.md).
