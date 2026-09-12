> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabviewsearchactivation(_:)](https://developer.apple.com/documentation/swiftui/view/tabviewsearchactivation(_:))

# tabViewSearchActivation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Configures the activation and deactivation behavior of search in the search tab.

## Declaration

```swift
nonisolated func tabViewSearchActivation(_ activation: TabSearchActivation) -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier on a [TabView](../tabview.md) to change how search activation is handled. The exact activation behavior is determined by the [TabSearchActivation](../tabsearchactivation.md) you pass to this modifier:

```swift
struct TabExampleView: View {
    @State private var text: String = ""

    var body: some View {
        TabView {
            Tab("Books", systemImage: "book") {
                BooksTab()
            }
            Tab(role: .search) {
                NavigationStack {
                    SearchContent()
                }
            }
        }
        .searchable(text: $text)
        .tabViewSearchActivation(.searchTabSelection)
    }
}
```

By default, search is only activated and deactivated by the user.

## See Also

### Tab views

- [defaultAdaptableTabBarPlacement(\_:)](defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](../tabview.md) in the [sidebarAdaptable](../tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a section.
- [tabBarMinimizeBehavior(\_:)](tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [tabViewBottomAccessory(content:)](tabviewbottomaccessory%28content_%29.md): Places a view as the bottom accessory of the tab view.
- [tabViewBottomAccessory(isEnabled:content:)](tabviewbottomaccessory%28isenabled_content_%29.md): Places a view as the bottom accessory of the tab view. Use this modifier to dynamically show and hide the accessory view.
- [tabViewCustomization(\_:)](tabviewcustomization%28__%29.md): Specifies the customizations to apply to the sidebar representation of the tab view.
- [tabViewSidebarHeader(content:)](tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.
