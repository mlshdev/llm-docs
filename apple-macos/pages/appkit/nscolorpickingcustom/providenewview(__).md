> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingcustom/providenewview(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingcustom/providenewview(_:))

# provideNewView(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view containing the receiver’s user interface.

## Declaration

```swift
@MainActor func provideNewView(_ initialRequest: Bool) -> NSView
```

## Parameters

- `initialRequest`: [true](https://developer.apple.com/documentation/swift/true) only when this method is first invoked for your color picker. If `initialRequest` is [true](https://developer.apple.com/documentation/swift/true), the method should perform any initialization required (such as lazily loading a nib file, initializing the view, or performing any other custom initialization required for your picker).

<a id="return-value"></a>

## Return Value

The view containing the color picker’s user interface. The `NSView` returned by this method should be set to automatically resize both its width and height.

<a id="Discussion"></a>

## Discussion

This message is sent to the color picker whenever the color panel attempts to display it. This may be when the panel is first presented, when the user switches pickers, or when the picker is switched through an API.

# provideNewView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view containing the receiver’s user interface.

## Declaration

```objectivec
- (NSView *) provideNewView:(BOOL) initialRequest;
```

## Parameters

- `initialRequest`: [true](https://developer.apple.com/documentation/swift/true) only when this method is first invoked for your color picker. If `initialRequest` is [true](https://developer.apple.com/documentation/swift/true), the method should perform any initialization required (such as lazily loading a nib file, initializing the view, or performing any other custom initialization required for your picker).

<a id="return-value"></a>

## Return Value

The view containing the color picker’s user interface. The `NSView` returned by this method should be set to automatically resize both its width and height.

<a id="Discussion"></a>

## Discussion

This message is sent to the color picker whenever the color panel attempts to display it. This may be when the panel is first presented, when the user switches pickers, or when the picker is switched through an API.
