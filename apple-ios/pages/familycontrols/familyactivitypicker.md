> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitypicker](https://developer.apple.com/documentation/familycontrols/familyactivitypicker)

# FamilyActivityPicker

**Framework:** Family Controls  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A view in which users specify applications, web domains, and categories without revealing their choices to the app.

## Declaration

```swift
@MainActor @preconcurrency struct FamilyActivityPicker
```

<a id="overview"></a>

## Overview

To prompt the user for their selection, create a binding to a [FamilyActivitySelection](familyactivityselection.md) instance, and use the binding to create a [FamilyActivityPicker](familyactivitypicker.md) instance. You can then display the picker like any SwiftUI view.

```swift
struct ExampleView: View {
    @State var selection = FamilyActivitySelection()

    var body: some View {
        VStack {
            Image(systemName: "eye")
                .font(.system(size: 76.0))
                .padding()

            FamilyActivityPicker(selection: $selection)

            Image(systemName: "hourglass")
                .font(.system(size: 76.0))
                .padding()
        }
        .onChange(of: selection) { newSelection in
            let applications = selection.applications
            let categories = selection.categories
            let webDomains = selection.webDomains
        }
    }
}
```

> **Note**

> A `FamilyActivityPicker` shown on a parent device only displays applications and websites from authorized child devices within the Family Sharing Group. A `FamilyActivityPicker` shown on an individually authorized device includes applications and websites from that same device.

To streamline this process, call  the [familyActivityPicker(isPresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker%28ispresented:selection:%29) modifier on a view in your user interface. This modifier displays the picker view as a sheet over your user interface when the `isPresented` binding is `true`.

```swift
struct ExampleView: View {
    @State var selection = FamilyActivitySelection()
    @State var isPresented = false

   var body: some View {
       Button("Present FamilyActivityPicker") { isPresented = true }
       .familyActivityPicker(isPresented: $isPresented,
                             selection: $selection)
       .onChange(of: selection) { newSelection in
           let applications = selection.applications
           let categories = selection.categories
           let webDomains = selection.webDomains
       }
   }
}
```

When you present the `FamilyActivityPicker`, the system displays a view where the user can select categories, applications, and web domains. As soon as the user confirms their selection, the system updates the `FamilyActivitySelection` binding with the user’s selections. To protect the user’s privacy, the system uses opaque values to represent the selections.

Your app passes the selected values to the appropriate instances and methods from the [Managed Settings](../managedsettings.md) and [Device Activity](../deviceactivity.md) frameworks.

## Topics

### Creating activity pickers

- [init(selection:)](familyactivitypicker/init%28selection_%29.md): Creates a new activity picker.
- [init(headerText:footerText:selection:)](familyactivitypicker/init%28headertext_footertext_selection_%29.md): Creates a new activity picker with optional header and footer text.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker%28title:headertext:footertext:ispresented:selection:%29): Present an activity picker sheet for selecting apps and websites to manage.

### Accessing the content

- [body](familyactivitypicker/body.md): The content of this view.

### Adding view modifiers

- [View Modifiers](familyactivitypicker-view-modifiers.md): Apply standard modifiers to configure the family activity picker view and the views it contains.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Activity selections

- [FamilyActivitySelection](familyactivityselection.md): A collection of applications, categories, and web domains selected by the user.
