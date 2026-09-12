> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/displayingactivitylabels](https://developer.apple.com/documentation/familycontrols/displayingactivitylabels)

# Displaying Activity Labels

**Framework:** Family Controls  
**Kind:** API Collection

Provide users with a read-only, visual representation of an application, category, or web domain.

<a id="Overview"></a>

## Overview

To display an application, category, or web domain, choose an [ApplicationToken](../managedsettings/applicationtoken.md), [ActivityCategoryToken](../managedsettings/activitycategorytoken.md), or [WebDomainToken](../managedsettings/webdomaintoken.md) that represents an item selected by the user. For example, you can access these tokens from the [FamilyActivitySelection](familyactivityselection.md) bound to a [FamilyActivityPicker](familyactivitypicker.md) view.

Use one of these tokens to create a [Label](https://developer.apple.com/documentation/swiftui/label) instance by passing the token to its initializer. Display the activity item like any SwiftUI view.

```swift
struct ExampleView: View {
    @State var selection = FamilyActivitySelection()

    var body: some View {
        VStack {
            FamilyActivityPicker(selection: $selection)
            if let applicationToken = selection.applicationTokens.first {
                Label(applicationToken)
            }
        }
    }
}
```

## Topics

### Label constraints

- [FamilyActivityTitleView](familyactivitytitleview.md): A type-erased view representing the title of the family activity.
- [FamilyActivityIconView](familyactivityiconview.md): A type-erased view representing the icon of the family activity.
