> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytraits/supportszoom](https://developer.apple.com/documentation/uikit/uiaccessibilitytraits/supportszoom)

# supportsZoom (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The accessibility element supports zooming in and out on its content.

## Declaration

```swift
nonisolated static let supportsZoom: UIAccessibilityTraits
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that supports zoom functionality, like letting a person perform expand and pinch gestures to zoom in and out. If you assign this trait to an element, you also need to implement [accessibilityZoomIn(at:)](../../objectivec/nsobject-swift.class/accessibilityzoomin%28at_%29.md) and [accessibilityZoomOut(at:)](../../objectivec/nsobject-swift.class/accessibilityzoomout%28at_%29.md).

For example, the following code shows how to assign this trait to a custom view that allows zooming in to an image:

```swift
class ViewController: UIViewController {
    let zoomView = ZoomingImageView(frame: .zero)
    let imageView = UIImageView(image: UIImage(named: "tree"))

    override func viewDidLoad() {
        super.viewDidLoad()

        zoomView.isAccessibilityElement = true
        zoomView.accessibilityLabel = "Zooming Image View"
        zoomView.accessibilityTraits = [.image, .supportsZoom]

        zoomView.addSubview(imageView)
        view.addSubview(zoomView)
    }
}
```

This custom view implements the required methods to modify the zoom scale and post an announcement about the new zoom scale.

```swift
class ZoomingImageView: UIScrollView {
    override func accessibilityZoomIn(at point: CGPoint) -> Bool {
        zoomScale += 1.0

        let zoomQuantity = "\(Int(zoomScale)) x zoom"
        UIAccessibility.post(notification: .announcement, argument: zoomQuantity)
        return true
    }

    override func accessibilityZoomOut(at point: CGPoint) -> Bool {
        zoomScale -= 1.0

        let zoomQuantity = "\(Int(zoomScale)) x zoom"
        UIAccessibility.post(notification: .announcement, argument: zoomQuantity)
        return true
    }
}
```

> **Related sessions from WWDC23**

>  Session 10036: [Build accessible apps with SwiftUI and UIKit](https://developer.apple.com/videos/play/wwdc2023/10036/)

## See Also

### Constants

- [none](none.md): The accessibility element has no traits.
- [button](button.md): The accessibility element behaves like a button.
- [link](link.md): The accessibility element behaves like a link.
- [image](image.md): The accessibility element behaves like an image.
- [searchField](searchfield.md): The accessibility element behaves like a search field.
- [toggleButton](togglebutton.md): The accessibility element behaves like a toggle button.
- [keyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [staticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [header](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [tabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [summaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [selected](selected.md): The accessibility element is currently in a selected state.
- [notEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [adjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [allowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.

# UIAccessibilityTraitSupportsZoom (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The accessibility element supports zooming in and out on its content.

## Declaration

```objectivec
extern const UIAccessibilityTraits UIAccessibilityTraitSupportsZoom;
```

<a id="Discussion"></a>

## Discussion

Use this trait to characterize an accessibility element that supports zoom functionality, like letting a person perform expand and pinch gestures to zoom in and out. If you assign this trait to an element, you also need to implement [accessibilityZoomInAtPoint:](../../objectivec/nsobject-swift.class/accessibilityzoomin%28at_%29.md) and [accessibilityZoomOutAtPoint:](../../objectivec/nsobject-swift.class/accessibilityzoomout%28at_%29.md).

For example, the following code shows how to assign this trait to a custom view that allows zooming in to an image:

```swift
class ViewController: UIViewController {
    let zoomView = ZoomingImageView(frame: .zero)
    let imageView = UIImageView(image: UIImage(named: "tree"))

    override func viewDidLoad() {
        super.viewDidLoad()

        zoomView.isAccessibilityElement = true
        zoomView.accessibilityLabel = "Zooming Image View"
        zoomView.accessibilityTraits = [.image, .supportsZoom]

        zoomView.addSubview(imageView)
        view.addSubview(zoomView)
    }
}
```

This custom view implements the required methods to modify the zoom scale and post an announcement about the new zoom scale.

```swift
class ZoomingImageView: UIScrollView {
    override func accessibilityZoomIn(at point: CGPoint) -> Bool {
        zoomScale += 1.0

        let zoomQuantity = "\(Int(zoomScale)) x zoom"
        UIAccessibility.post(notification: .announcement, argument: zoomQuantity)
        return true
    }

    override func accessibilityZoomOut(at point: CGPoint) -> Bool {
        zoomScale -= 1.0

        let zoomQuantity = "\(Int(zoomScale)) x zoom"
        UIAccessibility.post(notification: .announcement, argument: zoomQuantity)
        return true
    }
}
```

> **Related sessions from WWDC23**

>  Session 10036: [Build accessible apps with SwiftUI and UIKit](https://developer.apple.com/videos/play/wwdc2023/10036/)

## See Also

### Constants

- [UIAccessibilityTraitNone](none.md): The accessibility element has no traits.
- [UIAccessibilityTraitButton](button.md): The accessibility element behaves like a button.
- [UIAccessibilityTraitLink](link.md): The accessibility element behaves like a link.
- [UIAccessibilityTraitImage](image.md): The accessibility element behaves like an image.
- [UIAccessibilityTraitSearchField](searchfield.md): The accessibility element behaves like a search field.
- [UIAccessibilityTraitToggleButton](togglebutton.md): The accessibility element behaves like a toggle button.
- [UIAccessibilityTraitKeyboardKey](keyboardkey.md): The accessibility element behaves like a keyboard key.
- [UIAccessibilityTraitStaticText](statictext.md): The accessibility element behaves like static text that can’t change.
- [UIAccessibilityTraitHeader](header.md): The accessibility element is a header that divides content into sections, such as the title of a navigation bar.
- [UIAccessibilityTraitTabBar](tabbar.md): The accessibility element behaves like a tab bar.
- [UIAccessibilityTraitSummaryElement](summaryelement.md): The accessibility element provides summary information when the app starts.
- [UIAccessibilityTraitSelected](selected.md): The accessibility element is currently in a selected state.
- [UIAccessibilityTraitNotEnabled](notenabled.md): The accessibility element isn’t in an enabled state and doesn’t respond to user interaction.
- [UIAccessibilityTraitAdjustable](adjustable.md): The accessibility element allows continuous adjustment through a range of values.
- [UIAccessibilityTraitAllowsDirectInteraction](allowsdirectinteraction.md): The accessibility element allows direct touch interaction for VoiceOver users.
