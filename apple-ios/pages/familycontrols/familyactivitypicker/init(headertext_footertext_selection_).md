> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitypicker/init(headertext:footertext:selection:)](https://developer.apple.com/documentation/familycontrols/familyactivitypicker/init(headertext:footertext:selection:))

# init(headerText:footerText:selection:)

**Framework:** Family Controls  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Creates a new activity picker with optional header and footer text.

## Declaration

```swift
@MainActor @preconcurrency init(headerText: String? = nil, footerText: String? = nil, selection: Binding<FamilyActivitySelection>)
```

## Parameters

- `headerText`: An optional string that provides text for the header of the picker view.
- `footerText`: An optional string that provides text for the footer of the picker view.
- `selection`: A binding that manages the user-selected categories, apps, and web domains.

## See Also

### Creating activity pickers

- [init(selection:)](init%28selection_%29.md): Creates a new activity picker.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker%28title:headertext:footertext:ispresented:selection:%29): Present an activity picker sheet for selecting apps and websites to manage.
