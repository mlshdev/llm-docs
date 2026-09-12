> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/snapshot()](https://developer.apple.com/documentation/scenekit/scnview/snapshot())

# snapshot() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Renders the view’s scene into a new image object.

## Declaration

```swift
func snapshot() -> UIImage
```

```swift
func snapshot() -> NSImage
```

<a id="return-value"></a>

## Return Value

An image object depicting the view in its current state.

<a id="Discussion"></a>

## Discussion

This method is thread-safe and may be called at any time.

# snapshot (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

Renders the view’s scene into a new image object.

## Declaration

```objectivec
- (UIImage *) snapshot;
```

```objectivec
- (NSImage *) snapshot;
```

<a id="return-value"></a>

## Return Value

An image object depicting the view in its current state.

<a id="Discussion"></a>

## Discussion

This method is thread-safe and may be called at any time.
