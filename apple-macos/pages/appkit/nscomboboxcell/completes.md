> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/completes](https://developer.apple.com/documentation/appkit/nscomboboxcell/completes)

# completes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the combo box tries to complete text entered by the user.

## Declaration

```swift
var completes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box tries to complete what the user types in the text field and every time the user adds characters to the end of the text field, the combo box calls [completedString(\_:)](completedstring%28__%29.md); when it is [false](https://developer.apple.com/documentation/swift/false), it does not.

If [completedString(\_:)](completedstring%28__%29.md) returns a string that’s longer than the existing string, the combo box replaces the existing string with the returned string and selects the additional characters. If the user is deleting characters or adds characters somewhere besides the end of the string, the combo box does not try to complete it.

## See Also

### Completing the Text Field

- [completedString(\_:)](completedstring%28__%29.md): Returns a string from the combo box’s pop-up list that starts with the given substring.

# completes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the combo box tries to complete text entered by the user.

## Declaration

```objectivec
@property BOOL completes;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box tries to complete what the user types in the text field and every time the user adds characters to the end of the text field, the combo box calls [completedString:](completedstring%28__%29.md); when it is [false](https://developer.apple.com/documentation/swift/false), it does not.

If [completedString:](completedstring%28__%29.md) returns a string that’s longer than the existing string, the combo box replaces the existing string with the returned string and selects the additional characters. If the user is deleting characters or adds characters somewhere besides the end of the string, the combo box does not try to complete it.

## See Also

### Completing the Text Field

- [completedString:](completedstring%28__%29.md): Returns a string from the combo box’s pop-up list that starts with the given substring.
