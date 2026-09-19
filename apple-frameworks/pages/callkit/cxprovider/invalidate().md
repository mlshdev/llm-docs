> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxprovider/invalidate()

# invalidate() (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Invalidates the provider and completes all active calls with an error.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

After a receiver is invalidated, no additional messages are sent to its delegate.

# invalidate (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Invalidates the provider and completes all active calls with an error.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

After a receiver is invalidated, no additional messages are sent to its delegate.
