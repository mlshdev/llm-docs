> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode/init(text:)](https://developer.apple.com/documentation/spritekit/sklabelnode/init(text:))

# init(text:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a new label object with a text string.

## Declaration

```swift
convenience init(text: String?)
```

## Parameters

- `text`: The text to use to initialize the label node.

<a id="return-value"></a>

## Return Value

An initialized label object.

<a id="Discussion"></a>

## Discussion

The label node’s font is set to Helvetica Neue Ultra Light, 32 point.

## See Also

### Creating a Label

- [init(fontNamed:)](init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [init(attributedText:)](init%28attributedtext_%29.md): Initializes a new label object with an attributed text string.

# labelNodeWithText: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a new label object with a text string.

## Declaration

```objectivec
+ (instancetype) labelNodeWithText:(NSString *) text;
```

## Parameters

- `text`: The text to use to initialize the label node.

<a id="return-value"></a>

## Return Value

An initialized label object.

<a id="Discussion"></a>

## Discussion

The label node’s font is set to Helvetica Neue Ultra Light, 32 point.

## See Also

### Creating a Label

- [initWithFontNamed:](init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [labelNodeWithFontNamed:](labelnodewithfontnamed_.md): Initializes a new label object.
- [labelNodeWithAttributedText:](init%28attributedtext_%29.md): Initializes a new label object with an attributed text string.
