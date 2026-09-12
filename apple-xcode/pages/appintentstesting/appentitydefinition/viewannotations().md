> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/viewannotations()](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/viewannotations())

# viewAnnotations()

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Provides the currently visible onscreen entities.

## Declaration

```swift
func viewAnnotations() async throws -> [ViewAnnotation]
```

<a id="return-value"></a>

## Return Value

An array of view annotations, with selection state and entity data.

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the view annotations query fails.
