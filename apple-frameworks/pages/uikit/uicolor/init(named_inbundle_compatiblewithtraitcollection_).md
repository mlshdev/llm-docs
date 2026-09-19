> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicolor/init(named:inbundle:compatiblewithtraitcollection:)

# init(named:inBundle:compatibleWithTraitCollection:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a color object using the named asset that’s compatible with the specified trait collection.

## Declaration

```swift
init?(named name: String, inBundle bundle: Bundle?, compatibleWithTraitCollection traitCollection: UITraitCollection?)
```

## Parameters

- `name`: The name of the asset containing the color.
- `bundle`: The bundle containing the asset.
- `traitCollection`: The trait collection that specifies the gamut to use when selecting the color.

<a id="return-value"></a>

## Return Value

An initialized color object. The returned object uses the color space specified for the asset.
