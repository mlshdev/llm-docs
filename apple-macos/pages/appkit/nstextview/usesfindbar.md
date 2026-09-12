> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/usesfindbar](https://developer.apple.com/documentation/appkit/nstextview/usesfindbar)

# usesFindBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether to use the find bar for this text view.

## Declaration

```swift
var usesFindBar: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the find bar is used for this text view; otherwise [false](https://developer.apple.com/documentation/swift/false). See [NSTextFinder](../nstextfinder.md) for information about the find bar.

A text view can use either a find panel or a find bar. If [usesFindBar](usesfindbar.md) is set to [true](https://developer.apple.com/documentation/swift/true),  [usesFindPanel](usesfindpanel.md) is set to [false](https://developer.apple.com/documentation/swift/false) and vice versa.

## See Also

### Related Documentation

- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.

### Using the Find Bar

- [isIncrementalSearchingEnabled](isincrementalsearchingenabled.md): A Boolean value that indicates whether incremental searching is enabled.

# usesFindBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether to use the find bar for this text view.

## Declaration

```objectivec
@property BOOL usesFindBar;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the find bar is used for this text view; otherwise [false](https://developer.apple.com/documentation/swift/false). See [NSTextFinder](../nstextfinder.md) for information about the find bar.

A text view can use either a find panel or a find bar. If [usesFindBar](usesfindbar.md) is set to [true](https://developer.apple.com/documentation/swift/true),  [usesFindPanel](usesfindpanel.md) is set to [false](https://developer.apple.com/documentation/swift/false) and vice versa.

## See Also

### Related Documentation

- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.

### Using the Find Bar

- [incrementalSearchingEnabled](isincrementalsearchingenabled.md): A Boolean value that indicates whether incremental searching is enabled.
