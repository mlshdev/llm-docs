> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/init(geometry:)](https://developer.apple.com/documentation/scenekit/scnnode/init(geometry:))

# init(geometry:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a node object with the specified geometry attached.

## Declaration

```swift
init(geometry: SCNGeometry?)
```

## Parameters

- `geometry`: The geometry to be attached.

<a id="return-value"></a>

## Return Value

A new node object with the geometry attached, or `nil` if initialization is not successful.

# nodeWithGeometry: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates and returns a node object with the specified geometry attached.

## Declaration

```objectivec
+ (SCNNode *) nodeWithGeometry:(SCNGeometry *) geometry;
```

## Parameters

- `geometry`: The geometry to be attached.

<a id="return-value"></a>

## Return Value

A new node object with the geometry attached, or `nil` if initialization is not successful.

## See Also

### Creating a Node

- [node](node.md): Deprecated. Creates and returns a node object.
- [nodeWithMDLObject:](nodewithmdlobject_.md): Deprecated. Creates a node from the specified Model I/O object.
