> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityrotor(_:textranges:)](https://developer.apple.com/documentation/swiftui/view/accessibilityrotor(_:textranges:))

# accessibilityRotor(\_:textRanges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Create an Accessibility Rotor with the specified user-visible label and entries for each of the specified ranges. The Rotor will be attached to the current Accessibility element, and each entry will go the specified range of that element.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityRotor(_ label: LocalizedStringResource, textRanges: [Range<String.Index>]) -> some View

```

## Parameters

- `label`: Localized label identifying this Rotor to the user.
- `textRanges`: An array of ranges that will be used to generate the entries of the Rotor.

<a id="discussion"></a>

## Discussion

An Accessibility Rotor is a shortcut for Accessibility users to quickly navigate to specific elements of the user interface, and optionally specific ranges of text within those elements.

In the following example, a Message application adds a Rotor allowing the user to navigate through all the ranges of text containing email addresses.

```swift
extension Message {
    // Ranges of special areas in the `content` text. Calculated
    // when `content` is set and then cached so that we don't have
    // to re-compute them.
    var emailAddressRanges: [Range<String.Index>]
}

struct MessageContentView: View {
    TextEditor(.constant(message.content))
        .accessibilityRotor("Email Addresses",
            textRanges: message.emailAddressRanges)
}
```

## See Also

### Working with rotors

- [accessibilityRotor(\_:entries:)](accessibilityrotor%28__entries_%29.md): Create an Accessibility Rotor with the specified user-visible label, and entries generated from the content closure.
- [accessibilityRotor(\_:entries:entryID:entryLabel:)](accessibilityrotor%28__entries_entryid_entrylabel_%29.md): Create an Accessibility Rotor with the specified user-visible label and entries.
- [accessibilityRotor(\_:entries:entryLabel:)](accessibilityrotor%28__entries_entrylabel_%29.md): Create an Accessibility Rotor with the specified user-visible label and entries.
