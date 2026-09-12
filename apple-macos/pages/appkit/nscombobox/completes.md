> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/completes](https://developer.apple.com/documentation/appkit/nscombobox/completes)

# completes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box tries to complete what the user types.

## Declaration

```swift
var completes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box tries to complete what the user is typing. Every time the user types a new character, the combo box uses the [completedString(\_:)](../nscomboboxcell/completedstring%28__%29.md) method of its cell to get the new value. If the string returned by that method is longer than the string typed by the user, the combo box replaces the existing string with the returned string and selects the additional characters. If the user is deleting characters or adds characters somewhere besides the end of the string, the combo box does not try to complete it.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the combo box does not try to complete the string typed by the user.

# completes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box tries to complete what the user types.

## Declaration

```objectivec
@property BOOL completes;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box tries to complete what the user is typing. Every time the user types a new character, the combo box uses the [completedString:](../nscomboboxcell/completedstring%28__%29.md) method of its cell to get the new value. If the string returned by that method is longer than the string typed by the user, the combo box replaces the existing string with the returned string and selects the additional characters. If the user is deleting characters or adds characters somewhere besides the end of the string, the combo box does not try to complete it.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the combo box does not try to complete the string typed by the user.
