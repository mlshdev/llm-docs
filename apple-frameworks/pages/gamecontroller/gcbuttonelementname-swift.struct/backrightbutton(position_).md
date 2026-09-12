> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelementname-swift.struct/backrightbutton(position:)](https://developer.apple.com/documentation/gamecontroller/gcbuttonelementname-swift.struct/backrightbutton(position:))

# backRightButton(position:)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

Returns the name of the back right button at the specified location.

## Declaration

```swift
static func backRightButton(position: Int) -> GCButtonElementName
```

## Parameters

- `position`: The relative position of the button to the other back right button. Pass `0` for the button nearest to the natural rest position of the person’s finger. Pass `1` for an additional button that requires the person to move their fingers to press if it exists.

<a id="return-value"></a>

## Return Value

The name of the back right button.

## See Also

### Getting extended gamepad back button names

- [backLeftButton(position:)](backleftbutton%28position_%29.md): Returns the name of the back left button at the specified location.
