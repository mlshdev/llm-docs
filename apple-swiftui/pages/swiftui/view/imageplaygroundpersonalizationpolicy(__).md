> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/imageplaygroundpersonalizationpolicy(_:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundpersonalizationpolicy(_:))

# imagePlaygroundPersonalizationPolicy(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ (deprecated in 26.4) · iPadOS 18.4+ (deprecated in 26.4) · Mac Catalyst 18.4+ (deprecated in 26.4) · macOS 15.4+ (deprecated in 26.4) · visionOS 2.4+ (deprecated in 26.4)

Policy determining whether to support the usage of people in the playground or not.

> Use imagePlaygroundOptions(\_:) that takes ImagePlaygroundOptions.Personalization instead.

## Declaration

```swift
nonisolated func imagePlaygroundPersonalizationPolicy(_ policy: ImagePlaygroundPersonalizationPolicy = .automatic) -> some View

```

## Parameters

- `policy`: Policy determining whether personalization is enabled or not.

<a id="return-value"></a>

## Return Value

An image playground sheet that does or does not support personalization, based on the `enabled` flag.

<a id="discussion"></a>

## Discussion

Enabling people support will allow the user to condition image generation using:

- A person from their system Photos library
- A character represented by an appearance and a skin tone

Personalization options are available through several user interfaces, including:

- A people picker
- Detection of people names in the prompt text field
- Importing images containing people faces from the system photo library

Enabled by default when the modifier is not set or when the policy is set to `automatic`.
