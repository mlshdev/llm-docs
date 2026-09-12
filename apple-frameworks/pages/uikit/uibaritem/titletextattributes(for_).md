> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibaritem/titletextattributes(for:)](https://developer.apple.com/documentation/uikit/uibaritem/titletextattributes(for:))

# titleTextAttributes(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title’s text attributes for a given control state.

## Declaration

```swift
func titleTextAttributes(for state: UIControl.State) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `state`: The control state for which you want to know the text attributes for the title.

<a id="return-value"></a>

## Return Value

The title’s text attributes for `state`.

<a id="Discussion"></a>

## Discussion

The dictionary may contain key-value pairs for text attributes for the font, text color, text shadow color, and text shadow offset using the keys listed in NSString UIKit Additions Reference.

## See Also

### Customizing appearance

- [setTitleTextAttributes(\_:for:)](settitletextattributes%28__for_%29.md): Sets the title’s text attributes for a given control state.

# titleTextAttributesForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title’s text attributes for a given control state.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) titleTextAttributesForState:(UIControlState) state;
```

## Parameters

- `state`: The control state for which you want to know the text attributes for the title.

<a id="return-value"></a>

## Return Value

The title’s text attributes for `state`.

<a id="Discussion"></a>

## Discussion

The dictionary may contain key-value pairs for text attributes for the font, text color, text shadow color, and text shadow offset using the keys listed in NSString UIKit Additions Reference.

## See Also

### Customizing appearance

- [setTitleTextAttributes:forState:](settitletextattributes%28__for_%29.md): Sets the title’s text attributes for a given control state.
