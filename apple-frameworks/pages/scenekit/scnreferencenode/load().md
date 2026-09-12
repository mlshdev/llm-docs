> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/load()](https://developer.apple.com/documentation/scenekit/scnreferencenode/load())

# load() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads content into the node from its referenced external scene file.

## Declaration

```swift
func load()
```

<a id="Discussion"></a>

## Discussion

When SceneKit loads the referenced scene file, all children of the scene file’s root node become children of the reference node.

If the node has already been loaded (either automatically, according to the [loadingPolicy](loadingpolicy.md) property, or through a previous call to this method), calling this method has no effect.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [isLoaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload()](unload%28%29.md): Removes the node’s children and marks the node as not loaded.

# load (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads content into the node from its referenced external scene file.

## Declaration

```objectivec
- (void) load;
```

<a id="Discussion"></a>

## Discussion

When SceneKit loads the referenced scene file, all children of the scene file’s root node become children of the reference node.

If the node has already been loaded (either automatically, according to the [loadingPolicy](loadingpolicy.md) property, or through a previous call to this method), calling this method has no effect.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [loaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload](unload%28%29.md): Removes the node’s children and marks the node as not loaded.
