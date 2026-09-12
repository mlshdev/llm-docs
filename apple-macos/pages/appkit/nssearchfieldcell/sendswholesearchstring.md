> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/sendswholesearchstring](https://developer.apple.com/documentation/appkit/nssearchfieldcell/sendswholesearchstring)

# sendsWholeSearchString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.

## Declaration

```swift
var sendsWholeSearchString: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell calls its action method when the user clicks the search button or presses Return. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell calls the action method after each keystroke. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing search modes

- [sendsSearchStringImmediately](sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

# sendsWholeSearchString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.

## Declaration

```objectivec
@property BOOL sendsWholeSearchString;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell calls its action method when the user clicks the search button or presses Return. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell calls the action method after each keystroke. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing search modes

- [sendsSearchStringImmediately](sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.
