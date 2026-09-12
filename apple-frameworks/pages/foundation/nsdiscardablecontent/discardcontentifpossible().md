> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdiscardablecontent/discardcontentifpossible()](https://developer.apple.com/documentation/foundation/nsdiscardablecontent/discardcontentifpossible())

# discardContentIfPossible() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called to discard the contents of the receiver if the value of the accessed counter is 0.

## Declaration

```swift
func discardContentIfPossible()
```

<a id="Discussion"></a>

## Discussion

This method should only discard the contents of the object if the value of the accessed counter is 0. Otherwise, it should do nothing.

## See Also

### Discarding Content

- [isContentDiscarded()](iscontentdiscarded%28%29.md): Returns a Boolean value indicating whether the content has been discarded.

# discardContentIfPossible (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called to discard the contents of the receiver if the value of the accessed counter is 0.

## Declaration

```objectivec
- (void) discardContentIfPossible;
```

<a id="Discussion"></a>

## Discussion

This method should only discard the contents of the object if the value of the accessed counter is 0. Otherwise, it should do nothing.

## See Also

### Discarding Content

- [isContentDiscarded](iscontentdiscarded%28%29.md): Returns a Boolean value indicating whether the content has been discarded.
