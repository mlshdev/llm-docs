> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdiscardablecontent/iscontentdiscarded()](https://developer.apple.com/documentation/foundation/nsdiscardablecontent/iscontentdiscarded())

# isContentDiscarded() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the content has been discarded.

## Declaration

```swift
func isContentDiscarded() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the content has been discarded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Discarding Content

- [discardContentIfPossible()](discardcontentifpossible%28%29.md): Called to discard the contents of the receiver if the value of the accessed counter is 0.

# isContentDiscarded (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the content has been discarded.

## Declaration

```objectivec
- (BOOL) isContentDiscarded;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the content has been discarded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Discarding Content

- [discardContentIfPossible](discardcontentifpossible%28%29.md): Called to discard the contents of the receiver if the value of the accessed counter is 0.
