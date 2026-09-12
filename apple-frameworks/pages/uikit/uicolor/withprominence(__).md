> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/withprominence(_:)](https://developer.apple.com/documentation/uikit/uicolor/withprominence(_:))

# withProminence(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns the version of the current color that results from applying the specified prominence.

## Declaration

```swift
func withProminence(_ prominence: UIColor.Prominence) -> UIColor
```

## Parameters

- `prominence`: The prominence to apply to the color. For options, see [UIColor.Prominence](prominence-swift.enum.md).

<a id="return-value"></a>

## Return Value

The version of the color to display for the specified prominence.

<a id="Discussion"></a>

## Discussion

Interface elements, such as text labels, can have a different level of prominence in the UI. For example, a title label appears more prominently than a subtitle or caption. When you specify a label’s color, you can pass one of the [UIColor.Prominence](prominence-swift.enum.md) constants to [withProminence(\_:)](withprominence%28__%29.md) to communicate how prominently to display that color in the UI.

The following code creates a label with a secondary, vibrant red color:

```swift
let label = UILabel()
label.preferredVibrancy = .automatic
label.textColor = .systemRed.withProminence(.secondary) 
```

## See Also

### Working with color prominence

- [prominence](prominence-swift.property.md)
- [UIColor.Prominence](prominence-swift.enum.md): A type that indicates the prominence of a color in the interface.

# colorWithProminence: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns the version of the current color that results from applying the specified prominence.

## Declaration

```objectivec
- (UIColor *) colorWithProminence:(UIColorProminence) prominence;
```

## Parameters

- `prominence`: The prominence to apply to the color. For options, see [UIColorProminence](prominence-swift.enum.md).

<a id="return-value"></a>

## Return Value

The version of the color to display for the specified prominence.

<a id="Discussion"></a>

## Discussion

Interface elements, such as text labels, can have a different level of prominence in the UI. For example, a title label appears more prominently than a subtitle or caption. When you specify a label’s color, you can pass one of the [UIColorProminence](prominence-swift.enum.md) constants to [colorWithProminence:](withprominence%28__%29.md) to communicate how prominently to display that color in the UI.

The following code creates a label with a secondary, vibrant red color:

```swift
let label = UILabel()
label.preferredVibrancy = .automatic
label.textColor = .systemRed.withProminence(.secondary) 
```

## See Also

### Working with color prominence

- [prominence](prominence-swift.property.md)
- [UIColorProminence](prominence-swift.enum.md): A type that indicates the prominence of a color in the interface.
