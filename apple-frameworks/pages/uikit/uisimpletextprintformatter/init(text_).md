> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter/init(text:)](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter/init(text:))

# init(text:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a simple-text print formatter initialized with plain text.

## Declaration

```swift
init(text: String)
```

## Parameters

- `text`: A string of plain text or `nil` if you intend to assign the text later.

<a id="return-value"></a>

## Return Value

An initialized instance of `UISimpleTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [text](text.md): A string of plain text.

### Creating a simple-text print formatter

- [init(attributedText:)](init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.

# initWithText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a simple-text print formatter initialized with plain text.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text;
```

## Parameters

- `text`: A string of plain text or `nil` if you intend to assign the text later.

<a id="return-value"></a>

## Return Value

An initialized instance of `UISimpleTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [text](text.md): A string of plain text.

### Creating a simple-text print formatter

- [initWithAttributedText:](init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.
