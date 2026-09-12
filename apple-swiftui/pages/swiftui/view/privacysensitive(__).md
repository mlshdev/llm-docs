> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/privacysensitive(_:)](https://developer.apple.com/documentation/swiftui/view/privacysensitive(_:))

# privacySensitive(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Marks the view as containing sensitive, private user data.

## Declaration

```swift
nonisolated func privacySensitive(_ sensitive: Bool = true) -> some View

```

<a id="discussion"></a>

## Discussion

SwiftUI redacts views marked with this modifier when you apply the [privacy](../redactionreasons/privacy.md) redaction reason.

```swift
struct BankAccountView: View {
    var body: some View {
        VStack {
            Text("Account #")

            Text(accountNumber)
                .font(.headline)
                .privacySensitive() // Hide only the account number.
        }
    }
}
```

## See Also

### Redacting private content

- [Designing your app for the Always On state](https://developer.apple.com/documentation/watchos-apps/designing-your-app-for-the-always-on-state): Customize your watchOS app’s user interface for continuous display.
- [Protecting sensitive content when screen sharing and remote control are active](../protecting-sensitive-content-when-screen-sharing.md): Detect active screen capture sessions and respond appropriately to protect sensitive content in your app.
- [redacted(reason:)](redacted%28reason_%29.md): Adds a reason to apply a redaction to this view hierarchy.
- [unredacted()](unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [redactionReasons](../environmentvalues/redactionreasons.md): The current redaction reasons applied to the view hierarchy.
- [isSceneCaptured](../environmentvalues/isscenecaptured.md): The current capture state.
- [RedactionReasons](../redactionreasons.md): The reasons to apply a redaction to data displayed on screen.
