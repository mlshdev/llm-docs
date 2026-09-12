> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter/init(attributedtext:)](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter/init(attributedtext:))

# init(attributedText:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a simple-text print formatter initialized with attributed text.

## Declaration

```swift
init(attributedText: NSAttributedString)
```

## Parameters

- `attributedText`: A string of attributed text or `nil` if you intend to assign the text later.

<a id="return-value"></a>

## Return Value

An initialized instance of `UISimpleTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [attributedText](attributedtext.md): A string of attributed text.

### Creating a simple-text print formatter

- [init(text:)](init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.

# initWithAttributedText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a simple-text print formatter initialized with attributed text.

## Declaration

```objectivec
- (instancetype) initWithAttributedText:(NSAttributedString *) attributedText;
```

## Parameters

- `attributedText`: A string of attributed text or `nil` if you intend to assign the text later.

<a id="return-value"></a>

## Return Value

An initialized instance of `UISimpleTextPrintFormatter` or `nil` if the object could not be created.

## See Also

### Related Documentation

- [attributedText](attributedtext.md): A string of attributed text.

### Creating a simple-text print formatter

- [initWithText:](init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.
