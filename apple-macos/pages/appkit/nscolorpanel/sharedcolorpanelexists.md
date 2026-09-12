> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/sharedcolorpanelexists](https://developer.apple.com/documentation/appkit/nscolorpanel/sharedcolorpanelexists)

# sharedColorPanelExists (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns  a Boolean value indicating whether the `NSColorPanel` has been created already.

## Declaration

```swift
class var sharedColorPanelExists: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `NSColorPanel` has been created already; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Obtaining the shared color panel

- [shared](shared.md): Returns the shared `NSColorPanel` instance, creating it if necessary.

# sharedColorPanelExists (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns  a Boolean value indicating whether the `NSColorPanel` has been created already.

## Declaration

```objectivec
@property (class, readonly) BOOL sharedColorPanelExists;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `NSColorPanel` has been created already; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Obtaining the shared color panel

- [sharedColorPanel](shared.md): Returns the shared `NSColorPanel` instance, creating it if necessary.
