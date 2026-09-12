> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uistatusbartintparameters/uinavigationbar](https://developer.apple.com/documentation/bundleresources/information-property-list/uistatusbartintparameters/uinavigationbar)

# UINavigationBar

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The initial navigation bar’s style and translucency.

## Details

`UINavigationBar`

## Properties

- `BackgroundImage` — `string`:
- `Style` — `string`: **Default:** `UIBarStyleDefault`
  **Allowed values:** `UIBarStyleDefault`, `UIBarStyleBlack`
- `Translucent` — `boolean`:

<a id="Discussion"></a>

## Discussion

The possible dictionary keys and values are:

- **`BackgroundImage`**: The background image to use for the navigation bar.
- **`Style`**: The appearance of the navigation bar. The possible values are `UIBarStyleDefault` and `UIBarStyleBlack` with `UIBarStyleDefault` as the default vlaue. `UIBarStyleBlack` specifies a black background with light content.
- **`Translucent`**: A Boolean value that indicates whether the navigation bar is translucent.

## Topics

### Navigation Bar Configuration

- [TintColor](uinavigationbar/tintcolor.md): The tint color to apply to the background of the navigation bar.
