> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/backgroundview](https://developer.apple.com/documentation/uikit/uicollectionview/backgroundview)

# backgroundView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that provides the background appearance.

## Declaration

```swift
var backgroundView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

The view (if any) in this property is positioned underneath all of the other content and sized automatically to fill the entire bounds of the collection view. The background view does not scroll with the collection view’s other content. The collection view maintains a strong reference to the background view object.

This property is `nil` by default, which displays the background color of the collection view.

# backgroundView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view that provides the background appearance.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * backgroundView;
```

<a id="Discussion"></a>

## Discussion

The view (if any) in this property is positioned underneath all of the other content and sized automatically to fill the entire bounds of the collection view. The background view does not scroll with the collection view’s other content. The collection view maintains a strong reference to the background view object.

This property is `nil` by default, which displays the background color of the collection view.
