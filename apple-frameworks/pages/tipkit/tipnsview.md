> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipnsview](https://developer.apple.com/documentation/tipkit/tipnsview)

# TipNSView

**Framework:** TipKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A user interface element that represents a tip in AppKit applications.

## Declaration

```swift
@MainActor @objc @preconcurrency final class TipNSView
```

<a id="Overview"></a>

## Overview

You create a tip view by providing a tip and an optional arrow edge. The tip is a type that conforms to the [Tip](tip.md) protocol. The arrow edge is a directional arrow pointing away from the tip.

Use this view to create a tip you want to display and lay out as a [NSView](https://developer.apple.com/documentation/appkit/nsview).

Adding and removing TipNSView from your app is done by listening to a tip’s [shouldDisplayUpdates](tip/shoulddisplayupdates.md) or [statusUpdates](tip/statusupdates.md).

```swift
import Cocoa
import TipKit

struct CatTracksFeatureTip: Tip {
    var title: Text {
        Text("Sample tip title")
    }

    var message: Text? {
        Text("Sample tip message")
    }

    var image: Image? {
        Image(systemName: "globe")
    }
}

class CatTracksViewController: NSViewController {
    private var catTracksFeatureTip = CatTracksFeatureTip()
    private var tipObservationTask: Task<Void, Never>?
    private weak var tipView: TipNSView?

    override func viewDidAppear() {
        super.viewDidAppear()

        tipObservationTask = tipObservationTask ?? Task { @MainActor in
            for await shouldDisplay in catTracksFeatureTip.shouldDisplayUpdates {
                if shouldDisplay {
                    let tipHostingView = TipNSView(catTracksFeatureTip)
                    view.addSubview(tipHostingView)

                    view.addConstraints([
                        tipHostingView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
                        tipHostingView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20.0),
                        tipHostingView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20.0)
                    ])

                    tipView = tipHostingView
                }
                else {
                    tipView?.removeFromSuperview()
                    tipView = nil
                }
            }
        }
    }

    override func viewDidDisappear() {
        super.viewDidDisappear()

        tipObservationTask?.cancel()
        tipObservationTask = nil
    }
}
```

## Topics

### Initializers

- [init(\_:arrowEdge:actionHandler:)](tipnsview/init%28__arrowedge_actionhandler_%29.md): Creates a tip view with an optional arrow.

### Instance Properties

- [backgroundColor](tipnsview/backgroundcolor.md): The background color to use for the tip view.
- [backgroundStyle](tipnsview/backgroundstyle.md): The background style to use for the tip view.
- [cornerRadius](tipnsview/cornerradius.md): Corner radius for the tip view.
- [imageSize](tipnsview/imagesize.md): Size of the image displayed in the tip view.
- [imageStyle](tipnsview/imagestyle.md): Foreground style for the tip’s image.
- [viewStyle](tipnsview/viewstyle.md): The given style for TipView within the view hierarchy

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### AppKit Views

- [TipNSPopover](tipnspopover.md): A subclass of NSPopover that displays a popover tip in AppKit applications.
