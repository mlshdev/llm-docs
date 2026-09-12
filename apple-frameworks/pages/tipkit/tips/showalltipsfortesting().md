> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/showalltipsfortesting()](https://developer.apple.com/documentation/tipkit/tips/showalltipsfortesting())

# showAllTipsForTesting()

**Framework:** TipKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Show all tips regardless of their display rule eligibility or display frequency status for UI testing of tips.

## Declaration

```swift
static func showAllTipsForTesting()
```

<a id="Overview"></a>

## Overview

This function can also be called with the launch argument `-com.apple.TipKit.ShowAllTips 1`.

Tip statuses automatically revert back to `available` after invalidation when displayed using this override to enable repeat testing of presentation and dismissal.

TipKit’s display override testing functions have the following precedence:

| Priority | Testing function |
| --- | --- |
| first | [showTipsForTesting(\_:)](showtipsfortesting%28__%29.md) |
| second | [hideTipsForTesting(\_:)](hidetipsfortesting%28__%29.md) |
| third | [showAllTipsForTesting()](showalltipsfortesting%28%29.md) |
| fourth | [hideAllTipsForTesting()](hidealltipsfortesting%28%29.md) |

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
            Tips.showAllTipsForTesting()
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

- [showTipsForTesting(\_:)](showtipsfortesting%28__%29.md): Show specified tips regardless of their display rule eligibility or display frequency status for UI testing of certain tips.
- [hideAllTipsForTesting()](hidealltipsfortesting%28%29.md): Hide all tips regardless of their display rule eligibility for UI testing without tips.
- [hideTipsForTesting(\_:)](hidetipsfortesting%28__%29.md): Hide specified tips regardless of their display rule eligibility for UI testing without certain tips.
- [resetDatastore()](resetdatastore%28%29.md): Resets the tips’ datastore to the initial state for re-testing tip display rules and eligibility.
