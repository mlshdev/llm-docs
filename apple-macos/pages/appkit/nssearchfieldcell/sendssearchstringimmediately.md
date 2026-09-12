> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/sendssearchstringimmediately](https://developer.apple.com/documentation/appkit/nssearchfieldcell/sendssearchstringimmediately)

# sendsSearchStringImmediately (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

## Declaration

```swift
var sendsSearchStringImmediately: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell calls its action method immediately upon notification of any changes to the search field. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell pauses briefly after receiving a notification and then calls its action method. Pausing gives the user an opportunity to type more text into the search field and minimize the number of searches that are performed.

## See Also

### Managing search modes

- [sendsWholeSearchString](sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.

# sendsSearchStringImmediately (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

## Declaration

```objectivec
@property BOOL sendsSearchStringImmediately;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell calls its action method immediately upon notification of any changes to the search field. When the value is [false](https://developer.apple.com/documentation/swift/false), the cell pauses briefly after receiving a notification and then calls its action method. Pausing gives the user an opportunity to type more text into the search field and minimize the number of searches that are performed.

## See Also

### Managing search modes

- [sendsWholeSearchString](sendswholesearchstring.md): A Boolean value indicating whether the cell calls its search action method when the user clicks the search button (or presses Return) or after each keystroke.
