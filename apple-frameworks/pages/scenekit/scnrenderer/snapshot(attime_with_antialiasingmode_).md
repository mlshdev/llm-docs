> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/snapshot(attime:with:antialiasingmode:)](https://developer.apple.com/documentation/scenekit/scnrenderer/snapshot(attime:with:antialiasingmode:))

# snapshot(atTime:with:antialiasingMode:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an image by drawing the renderer’s content at the specified system time.

## Declaration

```swift
func snapshot(atTime time: CFTimeInterval, with size: CGSize, antialiasingMode: SCNAntialiasingMode) -> UIImage
```

```swift
func snapshot(atTime time: CFTimeInterval, with size: CGSize, antialiasingMode: SCNAntialiasingMode) -> NSImage
```

## Parameters

- `time`: The timestamp, in seconds, at which to render the scene.
- `size`: The size, in pixels, of the image to create.
- `antialiasingMode`: The antialiasing mode to use for the image output.

<a id="return-value"></a>

## Return Value

An image object reflecting the contents of the scene.

<a id="Discussion"></a>

## Discussion

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the specified timestamp, and then draws the scene into a new image object of the specified size.

# snapshotAtTime:withSize:antialiasingMode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates an image by drawing the renderer’s content at the specified system time.

## Declaration

```objectivec
- (UIImage *) snapshotAtTime:(CFTimeInterval) time withSize:(CGSize) size antialiasingMode:(SCNAntialiasingMode) antialiasingMode;
```

```objectivec
- (NSImage *) snapshotAtTime:(CFTimeInterval) time withSize:(CGSize) size antialiasingMode:(SCNAntialiasingMode) antialiasingMode;
```

## Parameters

- `time`: The timestamp, in seconds, at which to render the scene.
- `size`: The size, in pixels, of the image to create.
- `antialiasingMode`: The antialiasing mode to use for the image output.

<a id="return-value"></a>

## Return Value

An image object reflecting the contents of the scene.

<a id="Discussion"></a>

## Discussion

When you call this method, SceneKit updates its hierarchy of presentation nodes based on the specified timestamp, and then draws the scene into a new image object of the specified size.
