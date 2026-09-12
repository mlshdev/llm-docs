> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipnspopover](https://developer.apple.com/documentation/tipkit/tipnspopover)

# TipNSPopover

**Framework:** TipKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A subclass of NSPopover that displays a popover tip in AppKit applications.

## Declaration

```swift
@MainActor @objc @preconcurrency final class TipNSPopover
```

<a id="Overview"></a>

## Overview

Use this to create a tip you want to display and lay out as a [NSPopover](https://developer.apple.com/documentation/appkit/nspopover).

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
    @IBOutlet weak var catTracksFeatureButton: NSButton!

    private var catTracksFeatureTip = CatTracksFeatureTip()
    private var tipObservationTask: Task<Void, Never>?
    private var tipPopover: TipNSPopover?

    override func viewDidAppear() {
        super.viewDidAppear()

        tipObservationTask = tipObservationTask ?? Task { @MainActor in
            for await shouldDisplay in catTracksFeatureTip.shouldDisplayUpdates {
                if shouldDisplay {
                    tipPopover = TipNSPopover(catTracksFeatureTip)
                    tipPopover?.show(relativeTo: catTracksFeatureButton.bounds, of: catTracksFeatureButton, preferredEdge: .minY)
                }
                else {
                    tipPopover?.close()
                    tipPopover = nil
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

- [init(\_:delegate:actionHandler:)](tipnspopover/init%28__delegate_actionhandler_%29.md): Initializes a popover with the specified tip.

### Instance Properties

- [backgroundColor](tipnspopover/backgroundcolor.md): The background color to use for the tip view.
- [backgroundStyle](tipnspopover/backgroundstyle.md): The background style to use for the tip view.
- [cornerRadius](tipnspopover/cornerradius.md): Corner radius for the tip view.
- [imageSize](tipnspopover/imagesize.md): Size of the image displayed in the tip view.
- [imageStyle](tipnspopover/imagestyle.md): Foreground style for the tip’s image.
- [viewStyle](tipnspopover/viewstyle.md): The given style for TipView within the view hierarchy

## Relationships

### Inherits From

- [NSPopover](https://developer.apple.com/documentation/appkit/nspopover)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)

## See Also

### AppKit Views

- [TipNSView](tipnsview.md): A user interface element that represents a tip in AppKit applications.
