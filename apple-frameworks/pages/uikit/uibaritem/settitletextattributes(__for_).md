> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibaritem/settitletextattributes(_:for:)](https://developer.apple.com/documentation/uikit/uibaritem/settitletextattributes(_:for:))

# setTitleTextAttributes(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title’s text attributes for a given control state.

## Declaration

```swift
func setTitleTextAttributes(_ attributes: [NSAttributedString.Key : Any]?, for state: UIControl.State)
```

## Parameters

- `attributes`: A dictionary containing key-value pairs for text attributes.

  You can specify the font, text color, text shadow color, and text shadow offset using the keys listed in NSString UIKit Additions Reference.
- `state`: The control state for which you want to set the text attributes for the title.

## See Also

### Customizing appearance

- [titleTextAttributes(for:)](titletextattributes%28for_%29.md): Returns the title’s text attributes for a given control state.

# setTitleTextAttributes:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title’s text attributes for a given control state.

## Declaration

```objectivec
- (void) setTitleTextAttributes:(NSDictionary<NSString *,id> *) attributes forState:(UIControlState) state;
```

## Parameters

- `attributes`: A dictionary containing key-value pairs for text attributes.

  You can specify the font, text color, text shadow color, and text shadow offset using the keys listed in NSString UIKit Additions Reference.
- `state`: The control state for which you want to set the text attributes for the title.

## See Also

### Customizing appearance

- [titleTextAttributesForState:](titletextattributes%28for_%29.md): Returns the title’s text attributes for a given control state.
