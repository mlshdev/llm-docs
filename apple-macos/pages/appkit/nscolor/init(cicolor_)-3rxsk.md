> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(cicolor:)-3rxsk](https://developer.apple.com/documentation/appkit/nscolor/init(cicolor:)-3rxsk)

# init(CIColor:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object from the specified Core Image color.

## Declaration

```swift
init(CIColor color: CIColor)
```

## Parameters

- `color`: The Core Image color to convert.

<a id="return-value"></a>

## Return Value

The `NSColor` object corresponding to the specified Core Image color.

<a id="Discussion"></a>

## Discussion

The method raises if the color space and components associated with `color` are `nil` or invalid.
