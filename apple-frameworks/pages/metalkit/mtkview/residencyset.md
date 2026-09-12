> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/residencyset](https://developer.apple.com/documentation/metalkit/mtkview/residencyset)

# residencySet (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

## Declaration

```swift
var residencySet: any MTLResidencySet { get }
```

<a id="discussion"></a>

## Discussion

Get the view’s residency set.

Get the view’s residency set. The residency set contains all MTLTextures created by the view. Applications should use this residency set and the residency set of the view’s underlying CAMetalLayer to ensure all required MTLTextures are resident before use.

# residencySet (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLResidencySet> residencySet;
```

<a id="discussion"></a>

## Discussion

Get the view’s residency set.

Get the view’s residency set. The residency set contains all MTLTextures created by the view. Applications should use this residency set and the residency set of the view’s underlying CAMetalLayer to ensure all required MTLTextures are resident before use.
