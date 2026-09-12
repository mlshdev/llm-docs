> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel/sharedfontpanelexists](https://developer.apple.com/documentation/appkit/nsfontpanel/sharedfontpanelexists)

# sharedFontPanelExists (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A Boolean value that indicates whether the shared Font panel has been created.

## Declaration

```swift
class var sharedFontPanelExists: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the shared Font panel has been created, and [false](https://developer.apple.com/documentation/swift/false) if it hasn’t.

## See Also

### Getting the Font Panel

- [shared](shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.

# sharedFontPanelExists (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A Boolean value that indicates whether the shared Font panel has been created.

## Declaration

```objectivec
@property (class, readonly) BOOL sharedFontPanelExists;
```

<a id="discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the shared Font panel has been created, and [false](https://developer.apple.com/documentation/swift/false) if it hasn’t.

## See Also

### Getting the Font Panel

- [sharedFontPanel](shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.
