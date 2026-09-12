> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anynavigationtransition](https://developer.apple.com/documentation/swiftui/anynavigationtransition)

# AnyNavigationTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erasing navigation transition that allows for providing any navigation transition value dynamically.

## Declaration

```swift
struct AnyNavigationTransition
```

<a id="overview"></a>

## Overview

Use this navigation transition when you need to dynamically configure the transition of your content. For example, you could use this in a [sheet(isPresented:onDismiss:content:)](view/sheet%28ispresented_ondismiss_content_%29.md) modifier to dynamically configure how the sheet transitions in and out.

This example shows a sheet that uses a different transition based on model state.

```swift
struct ContentView: View {
    @State private var showSheet = false
    @Environment(Model.self) var model

    var body: some View {
        VStack {
            Button("Show Sheet") {
                showSheet = true
            }
            .sheet(isPresented: $showSheet) {
                let transition = model.useCrossDissolve
                    ? AnyNavigationTransition(.crossFade)
                    : AnyNavigationTransition(.automatic)
                Text("Sheet Content")
                    .presentationDetents([.medium])
                    .navigationTransition(transition)
            }
        }
    }
}
```

## Topics

### Initializers

- [init(\_:)](anynavigationtransition/init%28__%29.md)

## Relationships

### Conforms To

- [NavigationTransition](navigationtransition.md)

## See Also

### Defining navigation transitions

- [navigationTransition(\_:)](view/navigationtransition%28__%29.md): Sets the navigation transition style for this view.
- [NavigationTransition](navigationtransition.md): A type that defines the transition to use when navigating to a view.
- [CrossFadeNavigationTransition](crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
