> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitypicker/init(selection:)](https://developer.apple.com/documentation/familycontrols/familyactivitypicker/init(selection:))

# init(selection:)

**Framework:** Family Controls  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Creates a new activity picker.

## Declaration

```swift
@MainActor @preconcurrency init(selection: Binding<FamilyActivitySelection>)
```

## Parameters

- `selection`: A binding that manages the user-selected categories, apps, and web domains.

## See Also

### Creating activity pickers

- [init(headerText:footerText:selection:)](init%28headertext_footertext_selection_%29.md): Creates a new activity picker with optional header and footer text.
- [familyActivityPicker(title:headerText:footerText:isPresented:selection:)](https://developer.apple.com/documentation/swiftui/view/familyactivitypicker%28title:headertext:footertext:ispresented:selection:%29): Present an activity picker sheet for selecting apps and websites to manage.
