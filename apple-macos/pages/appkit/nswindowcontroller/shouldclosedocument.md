> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/shouldclosedocument](https://developer.apple.com/documentation/appkit/nswindowcontroller/shouldclosedocument)

# shouldCloseDocument (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

## Declaration

```swift
var shouldCloseDocument: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver necessarily closes the associated document when the window it manages is closed, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing the Window

- [close()](close%28%29.md): Closes the window if it was loaded.

# shouldCloseDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

## Declaration

```objectivec
@property BOOL shouldCloseDocument;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver necessarily closes the associated document when the window it manages is closed, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing the Window

- [close](close%28%29.md): Closes the window if it was loaded.
