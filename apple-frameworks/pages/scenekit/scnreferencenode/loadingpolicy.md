> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/loadingpolicy](https://developer.apple.com/documentation/scenekit/scnreferencenode/loadingpolicy)

# loadingPolicy (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option for whether to load the node’s content automatically.

## Declaration

```swift
var loadingPolicy: SCNReferenceLoadingPolicy { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [SCNReferenceLoadingPolicy.immediate](../scnreferenceloadingpolicy/immediate.md) (the default), instantiating a reference node from an archive (using the [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) class) automatically loads the node’s external content. Set this property to [SCNReferenceLoadingPolicy.onDemand](../scnreferenceloadingpolicy/ondemand.md) before archiving an [SCNReferenceNode](../scnreferencenode.md) object if you don’t want that reference node to automatically load its content when unarchived. In that case, call the [load()](load%28%29.md) method after unarchiving when you want to load the node’s content.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [load()](load%28%29.md): Loads content into the node from its referenced external scene file.
- [isLoaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload()](unload%28%29.md): Removes the node’s children and marks the node as not loaded.

# loadingPolicy (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option for whether to load the node’s content automatically.

## Declaration

```objectivec
@property (nonatomic) SCNReferenceLoadingPolicy loadingPolicy;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [SCNReferenceLoadingPolicyImmediate](../scnreferenceloadingpolicy/immediate.md) (the default), instantiating a reference node from an archive (using the [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) class) automatically loads the node’s external content. Set this property to [SCNReferenceLoadingPolicyOnDemand](../scnreferenceloadingpolicy/ondemand.md) before archiving an [SCNReferenceNode](../scnreferencenode.md) object if you don’t want that reference node to automatically load its content when unarchived. In that case, call the [load](load%28%29.md) method after unarchiving when you want to load the node’s content.

## See Also

### Loading and Unloading a Reference Node’s Content

- [referenceURL](referenceurl.md): The URL to a scene file from which to load content for the reference node.
- [load](load%28%29.md): Loads content into the node from its referenced external scene file.
- [loaded](isloaded.md): A Boolean value that indicates whether the reference node has already loaded its content.
- [unload](unload%28%29.md): Removes the node’s children and marks the node as not loaded.
