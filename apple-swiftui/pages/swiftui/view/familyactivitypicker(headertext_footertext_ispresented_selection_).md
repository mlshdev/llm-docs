> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/familyactivitypicker(headertext:footertext:ispresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker(headertext:footertext:ispresented:selection:))

# familyActivityPicker(headerText:footerText:isPresented:selection:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Presents an activity picker view as a sheet.

## Declaration

```swift
@MainActor @preconcurrency func familyActivityPicker(headerText: String? = nil, footerText: String? = nil, isPresented: Binding<Bool>, selection: Binding<FamilyActivitySelection>) -> some View

```

## Parameters

- `headerText`: An optional string that provides text for the header of the picker view.
- `footerText`: An optional string that provides text for the footer of the picker view.
- `isPresented`: A binding that indicates whether the app presents the picker view.
- `selection`: A binding that manages the user-selected categories, apps, and web domains.

<a id="discussion"></a>

## Discussion

Use this view modifier to present a `FamilyControls/FamilyActivityPicker`.

## See Also

### Configuring Family Sharing

- [FamilyActivityPicker](https://developer.apple.com/documentation/familycontrols/familyactivitypicker): A view in which users specify applications, web domains, and categories without revealing their choices to the app.
- [familyActivityPicker(isPresented:selection:)](familyactivitypicker%28ispresented_selection_%29.md): Presents an activity picker view as a sheet.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](familyactivitypicker%28title_headertext_footertext_ispresented_selection_%29.md): Present an activity picker sheet for selecting apps and websites to manage.
