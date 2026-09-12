> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/decoration/customview(_:)](https://developer.apple.com/documentation/uikit/uicalendarview/decoration/customview(_:))

# customView(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new calendar view decoration with a custom view, using your view provider.

## Declaration

```swift
class func customView(_ customViewProvider: @escaping () -> UIView) -> Self
```

## Parameters

- `customViewProvider`: A block of code that creates and returns a calendar view decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

Create and return a decoration view for the calendar view in your `customViewProvider` block. The calendar view will clip the decoration view to its parent’s bounds. The decoration view may not have any interactions.

# decorationWithCustomViewProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new calendar view decoration with a custom view, using your view provider.

## Declaration

```objectivec
+ (instancetype) decorationWithCustomViewProvider:(UIView * (^)()) customViewProvider;
```

## Parameters

- `customViewProvider`: A block of code that creates and returns a calendar view decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

Create and return a decoration view for the calendar view in your `customViewProvider` block. The calendar view will clip the decoration view to its parent’s bounds. The decoration view may not have any interactions.

## See Also

### Creating a Custom Decoration View

- [initWithCustomViewProvider:](../../uicalendarviewdecoration/initwithcustomviewprovider_.md): Creates a new calendar view decoration with a custom view, using your view provider.
