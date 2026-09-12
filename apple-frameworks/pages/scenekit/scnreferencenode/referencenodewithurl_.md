> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferencenode/referencenodewithurl:](https://developer.apple.com/documentation/scenekit/scnreferencenode/referencenodewithurl:)

# referenceNodeWithURL:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a node whose content is to be loaded from the referenced URL.

## Declaration

```objectivec
+ (instancetype) referenceNodeWithURL:(NSURL *) referenceURL;
```

## Parameters

- `referenceURL`: The URL to a scene file from which to load the node’s content.

<a id="return-value"></a>

## Return Value

A new reference node.

<a id="Discussion"></a>

## Discussion

Using this method does not load the node’s content. To load content from the referenced URL, use the [load](load%28%29.md) method.

## See Also

### Creating a Reference Node

- [initWithURL:](init%28url_%29-9dkfj.md): Initializes a node whose content is to be loaded from the referenced URL.
