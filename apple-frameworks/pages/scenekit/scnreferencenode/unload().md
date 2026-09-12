> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/unload()](https://developer.apple.com/documentation/scenekit/scnreferencenode/unload())

# unload() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes the node’s children and marks the node as not loaded.

## Declaration

```swift
func unload()
```

<a id="Discussion"></a>

## Discussion

Calling this method does not necessarily unload any content associated with the node’s child nodes from memory—it merely removes them from the scene graph. The unlinked nodes and their content are then subject to normal object memory management rules. Under ARC, those objects are deallocated if and only if they are not referenced from elsewhere in your program.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load()](load%28%29.md): Loads content into the node from its referenced external scene file.
- [isLoaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.

# unload (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the node’s children and marks the node as not loaded.

## Declaration

```objectivec
- (void) unload;
```

<a id="Discussion"></a>

## Discussion

Calling this method does not necessarily unload any content associated with the node’s child nodes from memory—it merely removes them from the scene graph. The unlinked nodes and their content are then subject to normal object memory management rules. Under ARC, those objects are deallocated if and only if they are not referenced from elsewhere in your program.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [loadingPolicy](loadingpolicy.md): An option for whether to load the node’s content automatically.
- [load](load%28%29.md): Loads content into the node from its referenced external scene file.
- [loaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
