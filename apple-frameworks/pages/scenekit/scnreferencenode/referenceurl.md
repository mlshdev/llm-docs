> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/referenceurl](https://developer.apple.com/documentation/scenekit/scnreferencenode/referenceurl)

# referenceURL (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The URL to a scene file from which to load content for the reference node.

## Declaration

```swift
var referenceURL: URL { get set }
```

<a id="Discussion"></a>

## Discussion

When the reference node loads its content (either automatically, according to the [loadingPolicy](loadingpolicy.md) property, or when you call the [load()](load%28%29.md) method), SceneKit loads the referenced scene file. All children of the scene file’s root node become children of the reference node.

## See Also

### Loading and Unloading a Reference Node’s Content

- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load()](load%28%29.md): Loads content into the node from its referenced external scene file.
- [isLoaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload()](unload%28%29.md): Removes the node’s children and marks the node as not loaded.

# referenceURL (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL to a scene file from which to load content for the reference node.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * referenceURL;
```

<a id="Discussion"></a>

## Discussion

When the reference node loads its content (either automatically, according to the [loadingPolicy](loadingpolicy.md) property, or when you call the [load](load%28%29.md) method), SceneKit loads the referenced scene file. All children of the scene file’s root node become children of the reference node.

## See Also

### Loading and Unloading a Reference Node’s Content

- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load](load%28%29.md): Loads content into the node from its referenced external scene file.
- [loaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload](unload%28%29.md): Removes the node’s children and marks the node as not loaded.
