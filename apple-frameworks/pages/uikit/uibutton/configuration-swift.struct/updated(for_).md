> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/updated(for:)](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/updated(for:))

# updated(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Returns a copy of the configuration, updated for the given button.

## Declaration

```swift
func updated(for button: UIButton) -> UIButton.Configuration
```

## Parameters

- `button`: A button to use as a basis for the configuration.

<a id="return-value"></a>

## Return Value

An updated configuration. This method preserves custom values set on the configuration, and updates default values based on the button state.

## See Also

### Creating configurations

- [plain()](plain%28%29.md): Creates a configuration for a button with a transparent background.
- [gray()](gray%28%29.md): Creates a configuration for a button with a gray background.
- [tinted()](tinted%28%29.md): Creates a configuration for a button with a tinted background color.
- [filled()](filled%28%29.md): Creates a configuration for a button with a background filled with the button’s tint color.
- [borderless()](borderless%28%29.md): Creates a configuration for a button that has a borderless style.
- [bordered()](bordered%28%29.md): Creates a configuration for a button that has a bordered style.
- [borderedTinted()](borderedtinted%28%29.md): Creates a configuration for a button that has a tinted, bordered style.
- [borderedProminent()](borderedprominent%28%29.md): Creates a configuration for a button that has a prominent, bordered style.
- [glass()](glass%28%29.md): Creates a configuration for a button that has a Liquid Glass style.
- [prominentGlass()](prominentglass%28%29.md): Creates a configuration for a button that has a prominent Liquid Glass style.
- [clearGlass()](clearglass%28%29.md): Creates a configuration for a button that has a clear Liquid Glass style.
- [prominentClearGlass()](prominentclearglass%28%29.md): Creates a configuration for a button that has a prominent, clear Liquid Glass style.
