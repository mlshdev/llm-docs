> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityindicatorview/init(style:)](https://developer.apple.com/documentation/uikit/uiactivityindicatorview/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an activity indicator.

## Declaration

```swift
init(style: UIActivityIndicatorView.Style)
```

## Parameters

- `style`: A constant that specifies the style of the object to be created. See [UIActivityIndicatorView.Style](style-swift.enum.md) for descriptions of the style constants.

<a id="return-value"></a>

## Return Value

An initialized [UIActivityIndicatorView](../uiactivityindicatorview.md) object.

<a id="Discussion"></a>

## Discussion

[UIActivityIndicatorView](../uiactivityindicatorview.md) sizes the returned instance according to the specified `style`. You can set and retrieve the style of an activity indicator through the [style](style-swift.property.md) property.

## See Also

### Creating an activity indicator

- [init(frame:)](init%28frame_%29.md): Creates an activity indicator with the specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Creates an activity indicator from data in an unarchiver.

# initWithActivityIndicatorStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an activity indicator.

## Declaration

```objectivec
- (instancetype) initWithActivityIndicatorStyle:(UIActivityIndicatorViewStyle) style;
```

## Parameters

- `style`: A constant that specifies the style of the object to be created. See [UIActivityIndicatorViewStyle](style-swift.enum.md) for descriptions of the style constants.

<a id="return-value"></a>

## Return Value

An initialized [UIActivityIndicatorView](../uiactivityindicatorview.md) object.

<a id="Discussion"></a>

## Discussion

[UIActivityIndicatorView](../uiactivityindicatorview.md) sizes the returned instance according to the specified `style`. You can set and retrieve the style of an activity indicator through the [activityIndicatorViewStyle](style-swift.property.md) property.

## See Also

### Creating an activity indicator

- [initWithFrame:](init%28frame_%29.md): Creates an activity indicator with the specified frame rectangle.
- [initWithCoder:](init%28coder_%29.md): Creates an activity indicator from data in an unarchiver.
