> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/cametaldrawable/layer

# layer (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The layer that owns this drawable object.

## Declaration

```swift
var layer: CAMetalLayer { get }
```

<a id="Discussion"></a>

## Discussion

When you present the drawable object, it becomes the owning layer’s content.

# layer (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The layer that owns this drawable object.

## Declaration

```objectivec
@property (readonly) CAMetalLayer * layer;
```

<a id="Discussion"></a>

## Discussion

When you present the drawable object, it becomes the owning layer’s content.
