> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/sendswholesearchstring](https://developer.apple.com/documentation/appkit/nssearchfield/sendswholesearchstring)

# sendsWholeSearchString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the cell calls its search action method when the user clicks the search button or presses Return, or after each keystroke.

## Declaration

```swift
var sendsWholeSearchString: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is yes, the field calls its action method when the user clicks the search button or presses Return. When the value is NO, the field calls the action method after each keystroke. The default value of this property is no.

## See Also

### Managing Search Modes

- [sendsSearchStringImmediately](sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.

# sendsWholeSearchString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the cell calls its search action method when the user clicks the search button or presses Return, or after each keystroke.

## Declaration

```objectivec
@property BOOL sendsWholeSearchString;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is yes, the field calls its action method when the user clicks the search button or presses Return. When the value is NO, the field calls the action method after each keystroke. The default value of this property is no.

## See Also

### Managing Search Modes

- [sendsSearchStringImmediately](sendssearchstringimmediately.md): A Boolean value indicating whether the cell calls its action method immediately when an appropriate action occurs.
