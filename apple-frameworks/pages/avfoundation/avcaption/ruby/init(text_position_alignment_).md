> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/ruby/init(text:position:alignment:)](https://developer.apple.com/documentation/avfoundation/avcaption/ruby/init(text:position:alignment:))

# init(text:position:alignment:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates ruby text with position and alignment.

## Declaration

```swift
convenience init(text: String, position: AVCaption.Ruby.Position, alignment: AVCaption.Ruby.Alignment)
```

## Parameters

- `text`: The ruby text.
- `position`: The ruby text position.
- `alignment`: The ruby text alignment.

## See Also

### Creating Ruby text

- [init(text:)](init%28text_%29.md): Creates ruby text.

# initWithText:position:alignment: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates ruby text with position and alignment.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text position:(AVCaptionRubyPosition) position alignment:(AVCaptionRubyAlignment) alignment;
```

## Parameters

- `text`: The ruby text.
- `position`: The ruby text position.
- `alignment`: The ruby text alignment.

## See Also

### Creating Ruby text

- [initWithText:](init%28text_%29.md): Creates ruby text.
