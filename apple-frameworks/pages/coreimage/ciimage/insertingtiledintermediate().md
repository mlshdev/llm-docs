> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/insertingtiledintermediate()](https://developer.apple.com/documentation/coreimage/ciimage/insertingtiledintermediate())

# insertingTiledIntermediate() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image that inserts a intermediate that is cached in tiles

## Declaration

```swift
func insertingTiledIntermediate() -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

This intermediate will be cacheable even if [cacheIntermediates](../cicontextoption/cacheintermediates.md) is false.

# imageByInsertingTiledIntermediate (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Create an image that inserts a intermediate that is cached in tiles

## Declaration

```objectivec
- (CIImage *) imageByInsertingTiledIntermediate;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md).

<a id="discussion"></a>

## Discussion

This intermediate will be cacheable even if [kCIContextCacheIntermediates](../cicontextoption/cacheintermediates.md) is false.
