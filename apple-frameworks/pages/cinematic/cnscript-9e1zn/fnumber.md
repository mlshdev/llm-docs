> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/fnumber

# fNumber

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The f-stop value that inversely affects the aperture used to render the Cinematic image.

## Declaration

```objectivec
@property float fNumber;
```

<a id="Discussion"></a>

## Discussion

Pass this to the rendering session in the rendering frame attributes to match the selected aperture. Change this property when the user selects a different aperture for the edited movie. Reflect script changes for later restoration by making changes to this property.
