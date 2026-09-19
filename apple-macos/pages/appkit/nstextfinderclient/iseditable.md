> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextfinderclient/iseditable

# isEditable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the text is editable.

## Declaration

```swift
optional var isEditable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The text finder uses this property to validate actions. If is it not implemented, the value is assumed to be [true](https://developer.apple.com/documentation/swift/true) .

# editable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the text is editable.

## Declaration

```objectivec
@property (readonly, getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

The text finder uses this property to validate actions. If is it not implemented, the value is assumed to be [true](https://developer.apple.com/documentation/swift/true) .
