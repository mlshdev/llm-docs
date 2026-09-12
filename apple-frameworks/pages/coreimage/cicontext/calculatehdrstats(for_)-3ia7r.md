> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/calculatehdrstats(for:)-3ia7r](https://developer.apple.com/documentation/coreimage/cicontext/calculatehdrstats(for:)-3ia7r)

# calculateHDRStats(for:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a Core Graphics image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Graphics image that has the calculated values.

## Declaration

```swift
func calculateHDRStats(for cgimage: CGImage) -> CGImage
```

## Parameters

- `cgimage`: An immutable `CGImage` for which to calculate statistics.

<a id="return-value"></a>

## Return Value

 Returns a new `CGImage` instance that has the calculated statistics attached.

# calculateHDRStatsForCGImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a Core Graphics image, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then return a new Core Graphics image that has the calculated values.

## Declaration

```objectivec
- (CGImageRef) calculateHDRStatsForCGImage:(CGImageRef) cgimage;
```

## Parameters

- `cgimage`: An immutable `CGImage` for which to calculate statistics.

<a id="return-value"></a>

## Return Value

 Returns a new `CGImage` instance that has the calculated statistics attached.
