> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/lookaroundpreview](https://developer.apple.com/documentation/mapkit/lookaroundpreview)

# LookAroundPreview

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

A view that provides a Look Around preview for a specific geographic location.

## Declaration

```swift
@MainActor @preconcurrency struct LookAroundPreview
```

<a id="overview"></a>

## Overview

Use a `LookAroundPreview` to create preview imagery for a specific geographic location on the map that you can place in your view. In the following example, a travel recommendations app displays and styles a stack of Look Around previews it generates from an array of `ItineraryItem` structures that contain the location’s title and Look Around scene:

```swift
    struct LookAroundPreviewsView: View {
        let itinerary: [ItineraryItem]
        var body: some View {
            ScrollView {
                LazyVStack {
                    ForEach(itinerary) { item in
                        LookAroundPreview(initialScene: item.lookAroundScene)
                            .frame(height: 128)
                            .overlay(alignment: .bottomTrailing) {
                                Text(item.title)
                                    .font(.caption)
                                    .foregroundColor(.white)
                                    .padding()
                            }
                    }
                }
            }
        }
    }
```

To display a Look Around viewer a person can explore, apply a `lookAroundViewer` view modifier to a specific view, then add a control the user interacts with to display the Look Around viewer. In the following example, the `lookAroundViewer` view modifier observes a binding to Boolean value to determine whether to display the Look Around viewer.

```swift
    var lookAroundScene: MKLookAroundScene?

    @State private var isLookingAround: Bool = false

    var body: some View {
        MyInterestingView()
            .lookAroundViewer(isPresented: $isLookingAround, initialScene: lookAroundScene)
            .toolbar {
                ToolbarItem {
                    Button(action: { lookingAround = true }) {
                        Image(systemName: "binoculars")
                }
            }
        }   
    }
```

## Topics

### Creating a Look Around preview

- [init(initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:badgePosition:)](lookaroundpreview/init%28initialscene_allowsnavigation_showsroadlabels_pointsofinterest_badgeposition_%29.md): Creates a Look Around preview with an initial scene, navigation, road label, points of interest, and badge position you specify.
- [init(scene:allowsNavigation:showsRoadLabels:pointsOfInterest:badgePosition:)](lookaroundpreview/init%28scene_allowsnavigation_showsroadlabels_pointsofinterest_badgeposition_%29.md): Creates a Look Around preview with a binding to a scene, navigation, road label, points of interest, and badge position you specify.

### Creating a Look Around viewer

- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
