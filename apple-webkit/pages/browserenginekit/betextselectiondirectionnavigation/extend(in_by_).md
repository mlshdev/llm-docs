> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextselectiondirectionnavigation/extend(in:by:)](https://developer.apple.com/documentation/browserenginekit/betextselectiondirectionnavigation/extend(in:by:))

# extend(in:by:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the selection in the specified directions by granularity, in response to different key combinations:

## Declaration

```swift
func extend(in direction: UITextStorageDirection, by granularity: UITextGranularity)
```

<a id="discussion"></a>

## Discussion

Word = shift + option + left/right paragraph = shift + option + up/down line = shift + command + left/right document = shift + command + up/down

## See Also

### Extending the text section

- [extend(in:)](extend%28in_%29.md): Extends text selection in the specified directions, such as in response to an arrow key press while shift is held.

# extendInStorageDirection:byGranularity: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the selection in the specified directions by granularity, in response to different key combinations:

## Declaration

```objectivec
- (void) extendInStorageDirection:(UITextStorageDirection) direction byGranularity:(UITextGranularity) granularity;
```

<a id="discussion"></a>

## Discussion

Word = shift + option + left/right paragraph = shift + option + up/down line = shift + command + left/right document = shift + command + up/down

## See Also

### Extending the text section

- [extendInLayoutDirection:](extend%28in_%29.md): Extends text selection in the specified directions, such as in response to an arrow key press while shift is held.
