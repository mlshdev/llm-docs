> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/assetregistry](https://developer.apple.com/documentation/phase/phaseengine/assetregistry)

# assetRegistry (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that loads and unloads audio resources.

## Declaration

```swift
var assetRegistry: PHASEAssetRegistry { get }
```

<a id="Discussion"></a>

## Discussion

This property loads audio resources from disk to memory, and unloads audio resources to free up system resources.

# assetRegistry (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that loads and unloads audio resources.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASEAssetRegistry * assetRegistry;
```

<a id="Discussion"></a>

## Discussion

This property loads audio resources from disk to memory, and unloads audio resources to free up system resources.
