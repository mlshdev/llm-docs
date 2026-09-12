> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/isloaded](https://developer.apple.com/documentation/scenekit/scnreferencenode/isloaded)

# isLoaded (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that indicates whether the reference node has already loaded its content.

## Declaration

```swift
var isLoaded: Bool { get }
```

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load()](load%28%29.md): Loads content into the node from its referenced external scene file.
- [unload()](unload%28%29.md): Removes the node’s children and marks the node as not loaded.

# loaded (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the reference node has already loaded its content.

## Declaration

```objectivec
@property (readonly, getter=isLoaded) BOOL loaded;
```

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load](load%28%29.md): Loads content into the node from its referenced external scene file.
- [unload](unload%28%29.md): Removes the node’s children and marks the node as not loaded.
