> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentitydefinition/makereference(identifier:)

# makeReference(identifier:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an app entity instance of the given entity type.

## Declaration

```swift
func makeReference(identifier: String) -> AnyAppEntity
```

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

```swift
let entityDefinition: AppEntityDefinition!

let entityRef = entityDefinition.reference(identifier: "unique-id-123")
``

- Parameter identifier: The entity instance's unique identifier.
```
