> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview/init(progressviewstyle:)](https://developer.apple.com/documentation/uikit/uiprogressview/init(progressviewstyle:))

# init(progressViewStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a progress view with the specified style.

## Declaration

```swift
convenience init(progressViewStyle style: UIProgressView.Style)
```

## Parameters

- `style`: A constant that specifies the style of the object to be created. See [UIProgressView.Style](style.md) for descriptions of the style constants.

<a id="return-value"></a>

## Return Value

An initialized [UIProgressView](../uiprogressview.md) object.

<a id="Discussion"></a>

## Discussion

[UIProgressView](../uiprogressview.md) sets the height of the returned view according to the specified `style`. You can set and retrieve the style of a progress view through the [progressViewStyle](progressviewstyle.md) property.

## See Also

### Creating a progress view

- [init(frame:)](init%28frame_%29.md): Creates a progress view with the specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Creates a progress view from data in an unarchiver.

# initWithProgressViewStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a progress view with the specified style.

## Declaration

```objectivec
- (instancetype) initWithProgressViewStyle:(UIProgressViewStyle) style;
```

## Parameters

- `style`: A constant that specifies the style of the object to be created. See [UIProgressViewStyle](style.md) for descriptions of the style constants.

<a id="return-value"></a>

## Return Value

An initialized [UIProgressView](../uiprogressview.md) object.

<a id="Discussion"></a>

## Discussion

[UIProgressView](../uiprogressview.md) sets the height of the returned view according to the specified `style`. You can set and retrieve the style of a progress view through the [progressViewStyle](progressviewstyle.md) property.

## See Also

### Creating a progress view

- [initWithFrame:](init%28frame_%29.md): Creates a progress view with the specified frame rectangle.
- [initWithCoder:](init%28coder_%29.md): Creates a progress view from data in an unarchiver.
