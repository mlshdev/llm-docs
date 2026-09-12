> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/isforprinting](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/isforprinting)

# isForPrinting (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.

## Declaration

```swift
var isForPrinting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the app to open documents and URLs. Set the value to [true](https://developer.apple.com/documentation/swift/true) if you want the app to print the items instead.

## See Also

### Handling URLs

- [requiresUniversalLinks](requiresuniversallinks.md): A Boolean value indicating whether you require the URL to have an associated universal link.

# forPrinting (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.

## Declaration

```objectivec
@property (getter=isForPrinting) BOOL forPrinting;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the app to open documents and URLs. Set the value to [true](https://developer.apple.com/documentation/swift/true) if you want the app to print the items instead.

## See Also

### Handling URLs

- [requiresUniversalLinks](requiresuniversallinks.md): A Boolean value indicating whether you require the URL to have an associated universal link.
