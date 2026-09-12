> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/textstyling(at:in:)](https://developer.apple.com/documentation/uikit/uitextinput/textstyling(at:in:))

# textStyling(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a dictionary with properties that specify how to style the text at a certain location in a document.

## Declaration

```swift
optional func textStyling(at position: UITextPosition, in direction: UITextStorageDirection) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `position`: An object that indicates a location in the text of a document.
- `direction`: The direction of the styling attributes in text storage.

<a id="return-value"></a>

## Return Value

A dictionary whose elements are one or more of the key-value pairs defining text color, font, and background color. See [Style dictionary keys](../style-dictionary-keys.md) for descriptions of these key-value pairs.

<a id="Discussion"></a>

## Discussion

Text styling information can affect, for example, the appearance of a correction rectangle.

# textStylingAtPosition:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a dictionary with properties that specify how to style the text at a certain location in a document.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textStylingAtPosition:(UITextPosition *) position inDirection:(UITextStorageDirection) direction;
```

## Parameters

- `position`: An object that indicates a location in the text of a document.
- `direction`: The direction of the styling attributes in text storage.

<a id="return-value"></a>

## Return Value

A dictionary whose elements are one or more of the key-value pairs defining text color, font, and background color. See [Style dictionary keys](../style-dictionary-keys.md) for descriptions of these key-value pairs.

<a id="Discussion"></a>

## Discussion

Text styling information can affect, for example, the appearance of a correction rectangle.
