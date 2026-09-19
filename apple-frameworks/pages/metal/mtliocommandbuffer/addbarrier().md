> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtliocommandbuffer/addbarrier()

# addBarrier() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a barrier into the command buffer.

## Declaration

```swift
func addBarrier()
```

<a id="discussion"></a>

## Discussion

The method encodes a barrier that starts any subsequent commands only after all the previously encoded commands have completed.

# addBarrier (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a barrier into the command buffer.

## Declaration

```objectivec
- (void) addBarrier;
```

<a id="discussion"></a>

## Discussion

The method encodes a barrier that starts any subsequent commands only after all the previously encoded commands have completed.
