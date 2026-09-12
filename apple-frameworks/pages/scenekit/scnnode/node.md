> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/node](https://developer.apple.com/documentation/scenekit/scnnode/node)

# node

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a node object.

## Declaration

```objectivec
+ (instancetype) node;
```

<a id="return-value"></a>

## Return Value

A new node object, or `nil` if initialization is not successful.

## See Also

### Creating a Node

- [nodeWithGeometry:](init%28geometry_%29.md): Creates and returns a node object with the specified geometry attached.
- [nodeWithMDLObject:](nodewithmdlobject_.md): Deprecated. Creates a node from the specified Model I/O object.
