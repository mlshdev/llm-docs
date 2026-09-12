> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionos/displaying-text-in-visionos](https://developer.apple.com/documentation/visionos/displaying-text-in-visionos)

# Displaying text in visionOS

**Kind:** Sample Code  
**Availability:** visionOS 2.0+ · Xcode 16.0+

Create styled text in a window using SwiftUI.

<a id="Overview"></a>

## Overview

This sample app uses SwiftUI views to display text in four distinct styles:

- Large title
- Subheadline
- Bold
- Regular with color

The following image shows how the scene renders in visionOS:

![](https://developer.apple.com/images/com.apple.visionOS/sample-text-1-main-view.png)

The app’s main view displays four lines of text by creating a [Text](https://developer.apple.com/documentation/swiftui/text) instance for each line:

```swift
struct SwiftUIText: View {
    /// The amount of spacing between each text entry.
    let spacing: CGFloat = 30

    var body: some View {
        VStack(spacing: spacing) {
            // Set the style to large title.
            Text("This is a large title").font(.largeTitle)

            // Set the style to subheadline.
            Text("This is a subheadline text").font(.subheadline)

            // Format the text to bold.
            Text("This is a bold text").fontWeight(.bold)

            // Set the text's color to green.
            Text("This is a green text").foregroundStyle(.green)
        }
    }
}
```

SwiftUI provides the `Text` view and its modifiers, which the app uses to make each text appear unique.

## See Also

### Drawing text

- [Adding a depth effect to text in visionOS](adding-a-depth-effect-to-text-in-visionos.md): Create text that expands out of a window using stacked SwiftUI text views.
