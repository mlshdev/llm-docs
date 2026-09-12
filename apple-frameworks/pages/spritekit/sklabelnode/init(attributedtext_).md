> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode/init(attributedtext:)](https://developer.apple.com/documentation/spritekit/sklabelnode/init(attributedtext:))

# init(attributedText:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a new label object with an attributed text string.

## Declaration

```swift
convenience init(attributedText: NSAttributedString?)
```

## Parameters

- `attributedText`: The attributed string from which to initialize the label.

<a id="return-value"></a>

## Return Value

A lable initialized from attributed text.

<a id="Discussion"></a>

## Discussion

## See Also

### Creating a Label

- [init(fontNamed:)](init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [init(text:)](init%28text_%29.md): Initializes a new label object with a text string.

# labelNodeWithAttributedText: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a new label object with an attributed text string.

## Declaration

```objectivec
+ (instancetype) labelNodeWithAttributedText:(NSAttributedString *) attributedText;
```

## Parameters

- `attributedText`: The attributed string from which to initialize the label.

<a id="return-value"></a>

## Return Value

A lable initialized from attributed text.

<a id="Discussion"></a>

## Discussion

## See Also

### Creating a Label

- [initWithFontNamed:](init%28fontnamed_%29.md): Initializes a new label object with a specified font.
- [labelNodeWithFontNamed:](labelnodewithfontnamed_.md): Initializes a new label object.
- [labelNodeWithText:](init%28text_%29.md): Initializes a new label object with a text string.
