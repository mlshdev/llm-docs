> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.struct/init(url:)](https://developer.apple.com/documentation/webkit/webview-swift.struct/init(url:))

# init(url:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Create a new WebView with the specified URL.

## Declaration

```swift
@MainActor @preconcurrency init(url: URL?)
```

## Parameters

- `url`: The URL to display in the view. If this value is non-nil or changes to become a non-nil value, the new URL is loaded into the view.

<a id="discussion"></a>

## Discussion

For example, you can create a WebView that displays one of two URLs depending on the state of a toggle:

```swift
struct URLView: View {
    @State private var url: URL? = nil
    @State private var toggle = false

    var body: some View {
        VStack {
            Button("Toggle") {
                toggle.toggle()
            }
            WebView(url: url)
        }
        .onChange(of: toggle, initial: true) {
            url = toggle ? URL(string: "https://www.webkit.org") : URL(string: "https://www.apple.com")
        }
    }
}
```

## See Also

### Creating web views

- [init(\_:)](init%28__%29.md): Create a new WebView.
