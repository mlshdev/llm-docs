> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/windowlevel()](https://developer.apple.com/documentation/appkit/nstextinputclient/windowlevel())

# windowLevel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window level of the receiver.

## Declaration

```swift
optional func windowLevel() -> Int
```

<a id="return-value"></a>

## Return Value

The window level of the receiver.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A class adopting `NSTextInputClient` can implement this interface to specify its window level if it is higher than `NSFloatingWindowLevel`.

## See Also

### Placing content

- [documentVisibleRect](documentvisiblerect.md)
- [unionRectInVisibleSelectedRange](unionrectinvisibleselectedrange.md)
- [preferredTextAccessoryPlacement()](preferredtextaccessoryplacement%28%29.md)

# windowLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window level of the receiver.

## Declaration

```objectivec
- (NSInteger) windowLevel;
```

<a id="return-value"></a>

## Return Value

The window level of the receiver.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A class adopting `NSTextInputClient` can implement this interface to specify its window level if it is higher than `NSFloatingWindowLevel`.

## See Also

### Placing content

- [documentVisibleRect](documentvisiblerect.md)
- [unionRectInVisibleSelectedRange](unionrectinvisibleselectedrange.md)
- [preferredTextAccessoryPlacement](preferredtextaccessoryplacement%28%29.md)
