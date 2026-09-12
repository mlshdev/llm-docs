> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/isfirstresponder](https://developer.apple.com/documentation/appkit/nscollectionview/isfirstresponder)

# isFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value indicating whether the collection view is the first responder.

## Declaration

```swift
var isFirstResponder: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the collection view is the first responder. This property is fully key-value observing compliant.

# firstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value indicating whether the collection view is the first responder.

## Declaration

```objectivec
@property (readonly, getter=isFirstResponder) BOOL firstResponder;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the collection view is the first responder. This property is fully key-value observing compliant.
