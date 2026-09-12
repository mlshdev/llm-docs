> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/fnumber](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/fnumber)

# fNumber

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The f-stop value which inversely affects the aperture used to render the Cinematic image.

## Declaration

```swift
final var fNumber: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Pass this to the rendering session in the rendering frame attributes to match the selected aperture. Change this property when the user selects a different aperture for the edited movie. Reflect script changes for later restoration by making changes to this property.
