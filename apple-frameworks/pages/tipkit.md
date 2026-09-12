> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit](https://developer.apple.com/documentation/tipkit)

# TipKit

**Framework:** TipKit  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 10.0+

Display tips that help people discover features in your app.

<a id="Overview"></a>

## Overview

Use TipKit to show contextual tips that highlight new, interesting, or unused features people haven’t discovered on their own yet.

![A conceptual image showing general tips added to general apps.](https://developer.apple.com/images/com.apple.TipKit/tipkit_hero@2x.png)

Define your tip content, and the conditions under which they appear, with the [Tip](tipkit/tip.md) protocol. Then draw attention to new features using the [TipView](tipkit/tipview.md).

As you design tips for your app, ensure you don’t overwhelm your users. Use tips sparingly to highlight nonobvious features people haven’t discovered on their own. Similarly, avoid displaying tips each time someone uses your app. Tips can become distracting when they appear unnecessarily. Don’t use tips to guide people through your app, or for advertising and promotion purposes.

For design guidance on tips, see [Human Interface Guidelines \> Offering help](https://developer.apple.com/design/human-interface-guidelines/offering-help).

> **Related session from WWDC24**

> Session 10070: [Customize feature discovery with TipKit](https://developer.apple.com/videos/play/wwdc2024/10070/)

> **Related session from WWDC23**

> Session 10229: [Make features discoverable with TipKit](https://developer.apple.com/videos/play/wwdc2023/10229/)

```swift
import SwiftUI
import TipKit

// Define your tip's content.
struct FavoriteLandmarkTip: Tip {
    var title: Text {
        Text("Save as a Favorite")
    }

    var message: Text? {
        Text("Your favorite landmarks always appear at the top of the list.")
    }

    var image: Image? {
        Image(systemName: "star")
    }
}

@main
struct LandmarkTips: App {
    // Create an instance of your tip.
    var favoriteLandmarkTip = FavoriteLandmarkTip()

    var body: some Scene {
        WindowGroup {
            VStack {
                // Place the tip view near the feature you want to highlight.
                TipView(favoriteLandmarkTip, arrowEdge: .bottom)

                Image(systemName: "star")
                    .imageScale(.large)
                Spacer()
            }
            .task {
                // Configure and load your tips at app launch.
                do {
                    try Tips.configure()
                } 
                catch {
                    // Handle TipKit errors
                    print("Error initializing TipKit \(error.localizedDescription)")
                }
            }
        }
    }
}
```

## Topics

### Essentials

- [Highlighting app features with TipKit](tipkit/highlightingappfeatureswithtipkit.md): Bring attention to new features in your app by using tips.

### Content

- [Tip](tipkit/tip.md): A type that sets a tip’s content, as well as the conditions for when it displays.
- [TipGroup](tipkit/tipgroup.md): A collection of tips that can be presented one at a time using a specific order or based on the first tip eligible for display.

### Configuration

- [configure(\_:)](tipkit/tips/configure%28__%29.md): Loads and configures the persistent state of all tips in your app.
- [cloudKitContainer(\_:)](tipkit/tips/configurationoption/cloudkitcontainer%28__%29.md): Sets the CloudKit container used for syncing tips.
- [datastoreLocation(\_:)](tipkit/tips/configurationoption/datastorelocation%28__%29.md): Specify a custom location for your tips datastore.
- [displayFrequency(\_:)](tipkit/tips/configurationoption/displayfrequency%28__%29.md): Customizes how often new tips are presented in your app after another tip has been displayed.

### Views

- [TipView](tipkit/tipview.md): A user interface element that represents an inline tip.
- [popoverTip(\_:arrowEdge:action:)](https://developer.apple.com/documentation/swiftui/view/popovertip%28_:arrowedge:action:%29): Presents a popover tip on the modified view.

### UIKit Views

- [TipUIView](tipkit/tipuiview.md): A user interface element that represents a tip in UIKit applications.
- [TipUIPopoverViewController](tipkit/tipuipopoverviewcontroller.md): A view controller that displays a popover tip in UIKit applications.
- [TipUICollectionViewCell](tipkit/tipuicollectionviewcell.md): A collection view cell that embeds a tip.
- [TipUICollectionReusableView](tipkit/tipuicollectionreusableview.md): A UICollectionReusableView subclass that represents a tip.

### AppKit Views

- [TipNSView](tipkit/tipnsview.md): A user interface element that represents a tip in AppKit applications.
- [TipNSPopover](tipkit/tipnspopover.md): A subclass of NSPopover that displays a popover tip in AppKit applications.

### Display rules

- [Rule](tipkit/tips/rule.md): A condition to meet before displaying a tip.
- [Parameter](tipkit/tips/parameter.md): A type that monitors the state of its wrapped value to reevaluate any dependent tip rules when the value changes.
- [Event](tipkit/tips/event.md): A repeatable user-defined action.

### View Style

- [tipViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/tipviewstyle%28_:%29): Sets the given style for TipView within the view hierarchy.
- [TipViewStyle](tipkit/tipviewstyle.md): A type that applies custom appearance to all tips within a view hierarchy.
- [TipViewStyleConfiguration](tipkit/tipviewstyleconfiguration.md): The container type that holds a tip’s configuration.
- [MiniTipViewStyle](tipkit/minitipviewstyle.md): The default style for a TipView.

### Testing

- [showAllTipsForTesting()](tipkit/tips/showalltipsfortesting%28%29.md): Show all tips regardless of their display rule eligibility or display frequency status for UI testing of tips.
- [showTipsForTesting(\_:)](tipkit/tips/showtipsfortesting%28__%29.md): Show specified tips regardless of their display rule eligibility or display frequency status for UI testing of certain tips.
- [hideAllTipsForTesting()](tipkit/tips/hidealltipsfortesting%28%29.md): Hide all tips regardless of their display rule eligibility for UI testing without tips.
- [hideTipsForTesting(\_:)](tipkit/tips/hidetipsfortesting%28__%29.md): Hide specified tips regardless of their display rule eligibility for UI testing without certain tips.
- [resetDatastore()](tipkit/tips/resetdatastore%28%29.md): Resets the tips’ datastore to the initial state for re-testing tip display rules and eligibility.

### Common types

- [AnyTip](tipkit/anytip.md): A type-erased tip value.
- [TipKitError](tipkit/tipkiterror.md): A localized tip kit error.
- [Option](tipkit/tipoption.md): A type that represents the various customizations that you can make to a tip’s behavior.

### Enumerations

- [Tips](tipkit/tips.md): TipKit namespace.
