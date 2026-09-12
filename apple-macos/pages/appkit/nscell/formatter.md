> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/formatter](https://developer.apple.com/documentation/appkit/nscell/formatter)

# formatter (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s formatter object.

## Declaration

```swift
var formatter: Formatter? { get set }
```

<a id="Discussion"></a>

## Discussion

A formatter handles the translation of the receiver’s contents between its onscreen representation and its object value. Cells use a formatter object to format the textual representation of their object value and to validate cell input and convert that input to an object value. When assigning a new formatter to a cell, the formatter attempts to interpret the cell’s current value. If it cannot do so, the formatter converts the current value to a string object.

# formatter (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s formatter object.

## Declaration

```objectivec
@property (strong, nullable) NSFormatter * formatter;
```

<a id="Discussion"></a>

## Discussion

A formatter handles the translation of the receiver’s contents between its onscreen representation and its object value. Cells use a formatter object to format the textual representation of their object value and to validate cell input and convert that input to an object value. When assigning a new formatter to a cell, the formatter attempts to interpret the cell’s current value. If it cannot do so, the formatter converts the current value to a string object.
