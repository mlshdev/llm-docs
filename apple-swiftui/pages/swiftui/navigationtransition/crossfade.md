> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationtransition/crossfade](https://developer.apple.com/documentation/swiftui/navigationtransition/crossfade)

# crossFade

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A navigation transition that cross-fades between the appearing view and the disappearing view.

## Declaration

```swift
static var crossFade: CrossFadeNavigationTransition { get }
```

<a id="discussion"></a>

## Discussion

Specify this transition in a sheet to have it appear by fading in over the content, as opposed to moving upwards to cover content.

This example shows a sheet that appears with a cross-fade.

```swift
struct ContentView: View {
    @State private var showSheet = false

    var body: some View {
        VStack {
            Button("Show Sheet") {
                showSheet = true
            }
            .sheet(isPresented: $showSheet) {
                Text("Sheet Content")
                    .presentationDetents([.medium])
                    .navigationTransition(.crossFade)
            }
        }
    }
}
```

## See Also

### Getting built-in transitions

- [automatic](automatic.md): Conforms when `Self` is `AutomaticNavigationTransition`. A style that automatically chooses the appropriate presentation transition for the current context.
- [AutomaticNavigationTransition](../automaticnavigationtransition.md): A style that automatically chooses the appropriate presentation transition for the current context.
- [CrossFadeNavigationTransition](../crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
- [zoom(sourceID:in:)](zoom%28sourceid_in_%29.md): Conforms when `Self` is `ZoomNavigationTransition`. A navigation transition that zooms the appearing view from a given source view.
- [ZoomNavigationTransition](../zoomnavigationtransition.md): A navigation transition that zooms the appearing view from a given source view.
