> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/tokenbackgroundcolor](https://developer.apple.com/documentation/uikit/uisearchtextfield/tokenbackgroundcolor)

# tokenBackgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background color for all tokens in the search text field.

## Declaration

```swift
var tokenBackgroundColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property to `nil`, the search field reverts to the default token background color.

## See Also

### Customizing token behavior

- [tokens(in:)](tokens%28in_%29.md): Returns the search field’s tokens that are within a given range.
- [positionOfToken(at:)](positionoftoken%28at_%29.md): Converts a token index into a text position.

# tokenBackgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The background color for all tokens in the search text field.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * tokenBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

If you set this property to `nil`, the search field reverts to the default token background color.

## See Also

### Customizing token behavior

- [tokensInRange:](tokens%28in_%29.md): Returns the search field’s tokens that are within a given range.
- [positionOfTokenAtIndex:](positionoftoken%28at_%29.md): Converts a token index into a text position.
