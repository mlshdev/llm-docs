> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteraction/init(view:)](https://developer.apple.com/documentation/uikit/uipreviewinteraction/init(view:))

# init(view:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a newly initialized preview interaction for the specified view.

## Declaration

```swift
init(view: UIView)
```

## Parameters

- `view`: The view for which the preview interaction should respond.

<a id="return-value"></a>

## Return Value

An initialized preview interaction.

<a id="Discussion"></a>

## Discussion

Preview interactions operate on touches within a specified view. Unlike gesture recognizers, the view doesn’t maintain a strong reference to preview interactions. You must therefore retain a reference to the preview interaction to ensure that it continues to receive touches from the view.

# initWithView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a newly initialized preview interaction for the specified view.

## Declaration

```objectivec
- (instancetype) initWithView:(UIView *) view;
```

## Parameters

- `view`: The view for which the preview interaction should respond.

<a id="return-value"></a>

## Return Value

An initialized preview interaction.

<a id="Discussion"></a>

## Discussion

Preview interactions operate on touches within a specified view. Unlike gesture recognizers, the view doesn’t maintain a strong reference to preview interactions. You must therefore retain a reference to the preview interaction to ensure that it continues to receive touches from the view.
