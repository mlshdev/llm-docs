> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/hidetipsfortesting(_:)](https://developer.apple.com/documentation/tipkit/tips/hidetipsfortesting(_:))

# hideTipsForTesting(\_:)

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Hide specified tips regardless of their display rule eligibility for UI testing without certain tips.

## Declaration

```swift
static func hideTipsForTesting(_ tips: [any Tip.Type])
```

## Parameters

- `tips`: Array of tips to hide regardless of their display rule eligibility.

<a id="Overview"></a>

## Overview

This function can also be called with the launch argument `-com.apple.TipKit.HideTips FindTrailheadTip,SlopeProfileTip`.

TipKit’s display override testing functions have the following precedence:

| Priority | Testing function |
| --- | --- |
| First | [showTipsForTesting(\_:)](showtipsfortesting%28__%29.md) |
| Second | [hideTipsForTesting(\_:)](hidetipsfortesting%28__%29.md) |
| Third | [showAllTipsForTesting()](showalltipsfortesting%28%29.md) |
| Fourth | [hideAllTipsForTesting()](hidealltipsfortesting%28%29.md) |

```swift
import SwiftUI
import TipKit

@main
struct LandmarkTips: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }

    init() {
        setupTips()
    }

    // Configure tips in the app.
    func setupTips() {
        do {
            #if DEBUG
            Tips.hideTipsForTesting([FindTrailheadTip.self, SlopeProfileTip.self])
            #endif

            try Tips.configure()
        }
        catch {
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
```

## See Also

### Testing

- [showAllTipsForTesting()](showalltipsfortesting%28%29.md): Show all tips regardless of their display rule eligibility or display frequency status for UI testing of tips.
- [showTipsForTesting(\_:)](showtipsfortesting%28__%29.md): Show specified tips regardless of their display rule eligibility or display frequency status for UI testing of certain tips.
- [hideAllTipsForTesting()](hidealltipsfortesting%28%29.md): Hide all tips regardless of their display rule eligibility for UI testing without tips.
- [resetDatastore()](resetdatastore%28%29.md): Resets the tips’ datastore to the initial state for re-testing tip display rules and eligibility.
