> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/familyactivitypicker(title:headertext:footertext:ispresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker(title:headertext:footertext:ispresented:selection:))

# familyActivityPicker(title:headerText:footerText:isPresented:selection:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Present an activity picker sheet for selecting apps and websites to manage.

## Declaration

```swift
@MainActor @preconcurrency func familyActivityPicker(title: String?, headerText: String? = nil, footerText: String? = nil, isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View

```

## Parameters

- `title`: An optional string that provides a title for the picker view.
- `headerText`: An optional string that provides text for the header of the picker view.
- `footerText`: An optional string that provides text for the footer of the picker view.
- `isPresented`: A binding that indicates whether the app presents the picker view.
- `selection`: A binding that manages the selected categories, apps, and web domains.

<a id="discussion"></a>

## Discussion

Use this view modifier to present a `FamilyControls/FamilyActivityPicker` with a custom title.

```swift
struct ContentView: View {
    @State private var selection = FamilyActivitySelection()
    @State private var isPresented = false

    var body: some View {
        Button("Select Activities") {
            isPresented = true
        }
        .familyActivityPicker(
            title: "Choose Apps to Limit",
            headerText: "Select apps and websites to manage",
            footerText: "These selections will be used for screen time limits",
            isPresented: $isPresented,
            selection: $selection
        )
        .onChange(of: selection) { newSelection in
            // Handle the selected activities
            print("Selected \(newSelection.applications.count) apps")
        }
    }
}
```

## See Also

### Configuring Family Sharing

- [FamilyActivityPicker](https://developer.apple.com/documentation/familycontrols/familyactivitypicker): A view in which users specify applications, web domains, and categories without revealing their choices to the app.
- [familyActivityPicker(isPresented:selection:)](familyactivitypicker%28ispresented_selection_%29.md): Presents an activity picker view as a sheet.
- [familyActivityPicker(headerText:footerText:isPresented:selection:)](familyactivitypicker%28headertext_footertext_ispresented_selection_%29.md): Presents an activity picker view as a sheet.
