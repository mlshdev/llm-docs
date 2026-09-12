> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextselectiondirectionnavigation/move(in:by:)](https://developer.apple.com/documentation/browserenginekit/betextselectiondirectionnavigation/move(in:by:))

# move(in:by:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the cursor in the specified directions by granularity, in response to different key combinations:

## Declaration

```swift
func move(in direction: UITextStorageDirection, by granularity: UITextGranularity)
```

<a id="discussion"></a>

## Discussion

Option + left/right = word Option + up/down = paragraph Command + left/right = line Command + up/down = document

## See Also

### Moving the cursor

- [move(in:)](move%28in_%29.md): Moves the cursor in the specified directions, such as in response to an arrow key press.

# moveInStorageDirection:byGranularity: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the cursor in the specified directions by granularity, in response to different key combinations:

## Declaration

```objectivec
- (void) moveInStorageDirection:(UITextStorageDirection) direction byGranularity:(UITextGranularity) granularity;
```

<a id="discussion"></a>

## Discussion

Option + left/right = word Option + up/down = paragraph Command + left/right = line Command + up/down = document

## See Also

### Moving the cursor

- [moveInLayoutDirection:](move%28in_%29.md): Moves the cursor in the specified directions, such as in response to an arrow key press.
