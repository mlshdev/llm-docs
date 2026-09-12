> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipgroup](https://developer.apple.com/documentation/tipkit/tipgroup)

# TipGroup

**Framework:** TipKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection of tips that can be presented one at a time using a specific order or based on the first tip eligible for display.

## Declaration

```swift
final class TipGroup
```

<a id="Overview"></a>

## Overview

Use this class to group multiple tips together and have them presented one at a time. You display tips in a specific order with an [`ordered`](tipgroup/priority/ordered.md) priority or display the first tip eligible for display with a [`firstAvailable`](tipgroup/priority/firstavailable.md) priority.

TipGroup has a [`firstAvailable`](tipgroup/priority/firstavailable.md) default priority.

```swift
struct TrailDetails: View {
    let trail: Trail

    @State
    var trailDetailTips = TipGroup {
        FindTrailheadTip()
        ExposureRatingTip()
        SlopeProfileTip()
    }

    var body: some View {
        ScrollView(.vertical) {
            // Trail title
            Text(trail.name)
                .font(.title)
            NavigateToTrailButton(trailLocation: trail.location)
                .popoverTip(trailDetailTips.currentTip as? FindTrailheadTip)

            // Trail exposure rating
            TipView(trailDetailTips.currentTip as? ExposureRatingTip, arrowEdge: .bottom)
            Text("Exposure Rating: \(trail.exposureRating)")

            // Trail slope angle
            TipView(trailDetailTips.currentTip as? SlopeProfileTip, arrowEdge: .bottom)
            Text("Slope Angle: \(trail.slopeAngle)°")
        }
    }
}
```

## Topics

### Creating a tip group

- [init(\_:\_:)](tipgroup/init%28____%29.md): Creates a tip group with the specified presentation priority.

### Controlling the display order of a TipGroup’s tips

- [TipGroup.Priority](tipgroup/priority.md): Order priority for a [TipGroup](tipgroup.md).

### Getting the currently available tip

- [currentTip](tipgroup/currenttip.md): Returns the current tip available for display.
- [currentTipUpdates](tipgroup/currenttipupdates.md): Stream of tips that become eligible for display.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content

- [Tip](tip.md): A type that sets a tip’s content, as well as the conditions for when it displays.
