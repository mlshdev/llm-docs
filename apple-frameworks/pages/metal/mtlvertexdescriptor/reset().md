> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlvertexdescriptor/reset()

# reset() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Resets the default state for the vertex descriptor.

## Declaration

```swift
func reset()
```

<a id="discussion"></a>

## Discussion

After reset, each element of the [attributes](attributes.md) array has a default vertex attribute descriptor, and each element of the [layouts](layouts.md) array has a default vertex buffer layout descriptor.

# reset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Resets the default state for the vertex descriptor.

## Declaration

```objectivec
- (void) reset;
```

<a id="discussion"></a>

## Discussion

After reset, each element of the [attributes](attributes.md) array has a default vertex attribute descriptor, and each element of the [layouts](layouts.md) array has a default vertex buffer layout descriptor.
