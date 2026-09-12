> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol/backgroundcolor](https://developer.apple.com/documentation/appkit/nspathcontrol/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The receiver’s background color.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the background is set to a light blue color for `NSPathStyleStandard` and `nil` for the other styles. You can use `[NSColor clearColor]` to make the background transparent.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The receiver’s background color.

## Declaration

```objectivec
@property (copy, nullable) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

By default, the background is set to a light blue color for `NSPathStyleStandard` and `nil` for the other styles. You can use `[NSColor clearColor]` to make the background transparent.
