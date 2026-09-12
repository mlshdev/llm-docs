> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/inserttextplaceholder(with:)](https://developer.apple.com/documentation/uikit/uitextinput/inserttextplaceholder(with:))

# insertTextPlaceholder(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts a placeholder object to reserve visual space during text input.

## Declaration

```swift
optional func insertTextPlaceholder(with size: CGSize) -> UITextPlaceholder
```

## Parameters

- `size`: The size of the space to reserve.

<a id="return-value"></a>

## Return Value

The placeholder object that was inserted into the text input.

<a id="Discussion"></a>

## Discussion

If the `size.height` is less than or equal to zero, then the placeholder displays inline using the current line’s height.

If the `size.height` is greater than zero, then the text input treats the placeholder as a paragraph of height `size.height`.

## See Also

### Managing placeholders

- [remove(\_:)](remove%28__%29.md): Removes a placeholder object from the text input view.
- [UITextPlaceholder](../uitextplaceholder.md): A placeholder object that reserves visual space in a text input view.

# insertTextPlaceholderWithSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts a placeholder object to reserve visual space during text input.

## Declaration

```objectivec
- (UITextPlaceholder *) insertTextPlaceholderWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the space to reserve.

<a id="return-value"></a>

## Return Value

The placeholder object that was inserted into the text input.

<a id="Discussion"></a>

## Discussion

If the `size.height` is less than or equal to zero, then the placeholder displays inline using the current line’s height.

If the `size.height` is greater than zero, then the text input treats the placeholder as a paragraph of height `size.height`.

## See Also

### Managing placeholders

- [removeTextPlaceholder:](remove%28__%29.md): Removes a placeholder object from the text input view.
- [UITextPlaceholder](../uitextplaceholder.md): A placeholder object that reserves visual space in a text input view.
