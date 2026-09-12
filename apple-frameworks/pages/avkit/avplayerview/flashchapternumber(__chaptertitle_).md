> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/flashchapternumber(_:chaptertitle:)](https://developer.apple.com/documentation/avkit/avplayerview/flashchapternumber(_:chaptertitle:))

# flashChapterNumber(\_:chapterTitle:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Displays the chapter number and title in the player view for a brief moment.

## Declaration

```swift
func flashChapterNumber(_ chapterNumber: Int, chapterTitle: String?)
```

## Parameters

- `chapterNumber`: The chapter number.
- `chapterTitle`: The chapter title. This value is optional and can be `nil`.

# flashChapterNumber:chapterTitle: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Displays the chapter number and title in the player view for a brief moment.

## Declaration

```objectivec
- (void) flashChapterNumber:(NSUInteger) chapterNumber chapterTitle:(NSString *) chapterTitle;
```

## Parameters

- `chapterNumber`: The chapter number.
- `chapterTitle`: The chapter title. This value is optional and can be `nil`.
