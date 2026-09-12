> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator/init(style:)](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/init(style:))

# init(style:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Creates an impact feedback generator with the specified style.

> Use [init(style:view:)](init%28style_view_%29.md) instead.

## Declaration

```swift
init(style: UIImpactFeedbackGenerator.FeedbackStyle)
```

## Parameters

- `style`: A value representing the mass of the colliding objects. For a list of valid feedback styles, see the [UIImpactFeedbackGenerator.FeedbackStyle](feedbackstyle.md) enumeration.

<a id="return-value"></a>

## Return Value

A newly initialized feedback generator.

<a id="Discussion"></a>

## Discussion

For more information on using feedback generators, see `Using feedback generators`.

# initWithStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Creates an impact feedback generator with the specified style.

> Use [feedbackGeneratorWithStyle:forView:](init%28style_view_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithStyle:(UIImpactFeedbackStyle) style;
```

## Parameters

- `style`: A value representing the mass of the colliding objects. For a list of valid feedback styles, see the [UIImpactFeedbackStyle](feedbackstyle.md) enumeration.

<a id="return-value"></a>

## Return Value

A newly initialized feedback generator.

<a id="Discussion"></a>

## Discussion

For more information on using feedback generators, see `Using feedback generators`.
